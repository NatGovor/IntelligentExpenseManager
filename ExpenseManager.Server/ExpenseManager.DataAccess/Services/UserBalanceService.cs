using ExpenseManager.DataAccess.Entities;
using ExpenseManager.DataAccess.Repositories.Implementations;
using ExpenseManager.DataAccess.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExpenseManager.DataAccess.Services
{
    public class UserBalanceService
    {
        private readonly IRepository<UserBalance> _userBalanceRepository;
        private readonly IExpenseRepository<Expense> _expenseRepository;

        public UserBalanceService(IRepository<UserBalance> userBalanceRepository, IExpenseRepository<Expense> expenseRepository)
        {
            _userBalanceRepository = userBalanceRepository;
            _expenseRepository = expenseRepository;
        }

        public bool IsBalanceGood(string userId, DateTime date)
        {
            UserBalance userBalance = _userBalanceRepository.GetById(userId);

            DateTime startDate = new DateTime(date.Year, date.Month, 1);
            DateTime endDate = startDate.AddMonths(1).AddDays(-1);
            if (date.Month == DateTime.Now.Month)
            {
                endDate = new DateTime(date.Year, date.Month, date.Day);
            }

            decimal balance = userBalance.Balance;
            decimal safetyPillow = userBalance.SafetyPillow;
            for (DateTime day = startDate; day <= endDate; day = day.AddDays(1))
            {
                var dayExpenses = _expenseRepository.GetInIntervalForUser(
                    userId, 
                    new DateTime(day.Year, day.Month, day.Day, 0, 0, 0),
                    new DateTime(day.Year, day.Month, day.Day, 23, 59, 59)
                ).ToList();

                decimal daySpending = 0;
                dayExpenses.ForEach(expense =>
                {
                    daySpending += expense.Amount;
                });

                decimal normalSpending = 0;
                switch (day.DayOfWeek)
                {
                    case DayOfWeek.Saturday:
                        normalSpending = userBalance.UserSettings.MinSaturday;
                        break;
                    case DayOfWeek.Sunday:
                        normalSpending = userBalance.UserSettings.MinSunday;
                        break;
                    default:
                        normalSpending = userBalance.UserSettings.MinWeekday;
                        break;
                }

                if (daySpending == normalSpending)
                {
                    balance -= daySpending;
                }
                else if (daySpending > normalSpending)
                {
                    balance -= normalSpending;
                    safetyPillow -= daySpending - normalSpending;
                }
                else if (daySpending < normalSpending)
                {
                    balance -= daySpending;
                    safetyPillow += normalSpending - daySpending;
                }
            }

            if (safetyPillow > 20)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
