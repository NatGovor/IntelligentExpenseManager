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
    public class BalanceService
    {
        private readonly IRepository<UserSettings> _userSettingsRepository;
        private readonly IExpenseRepository<Expense> _expenseRepository;

        public BalanceService(IRepository<UserSettings> userSettingsRepository, IExpenseRepository<Expense> expenseRepository)
        {
            _userSettingsRepository = userSettingsRepository;
            _expenseRepository = expenseRepository;
        }

        public bool IsBalanceGood(string userId, DateTime date)
        {
            UserSettings userSettings = _userSettingsRepository.GetById(userId);

            DateTime startDate = new DateTime(date.Year, date.Month, 1);
            DateTime endDate = startDate.AddMonths(1).AddDays(-1);

            int weekDaysCount = 0;
            int saturdaysCount = 0;
            int sundaysCount = 0;

            for (DateTime day = startDate; day <= endDate; day = day.AddDays(1))
            {
                if (day.DayOfWeek == DayOfWeek.Saturday)
                {
                    saturdaysCount++;
                }
                else if (day.DayOfWeek == DayOfWeek.Sunday)
                {
                    sundaysCount++;
                }
                else
                {
                    weekDaysCount++;
                }
            }

            decimal balance = weekDaysCount * userSettings.MinWeekday +
                saturdaysCount * userSettings.MinSaturday + sundaysCount * userSettings.MinSunday;
            decimal safetyPillow = userSettings.MaximumToSpend - balance;
            decimal initialSafetyPillow = safetyPillow;

            if (date.Month == DateTime.Now.Month)
            {
                endDate = new DateTime(date.Year, date.Month, date.Day);
            }      

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
                        normalSpending = userSettings.MinSaturday;
                        break;
                    case DayOfWeek.Sunday:
                        normalSpending = userSettings.MinSunday;
                        break;
                    default:
                        normalSpending = userSettings.MinWeekday;
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

            if (safetyPillow > initialSafetyPillow * userSettings.Percentage / 100)
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
