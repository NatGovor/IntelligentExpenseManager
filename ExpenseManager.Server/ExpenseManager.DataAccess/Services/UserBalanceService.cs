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

        public void UpdateBalance(string id, decimal spending, DateTime date)
        {
            UserBalance userBalance = _userBalanceRepository.GetById(id);

            // Get previous spendings in this day
            var prevExpenses = _expenseRepository.GetInInterval(
                new DateTime(date.Year, date.Month, date.Day, 0, 0, 0), new DateTime(date.Year, date.Month, date.Day, 23, 59, 59))
                .Where(x => x.UserId == id).ToList();
            decimal prevSpending = 0;
            prevExpenses.ForEach(expense =>
            {
                prevSpending += expense.Amount;
            });

            decimal totalSpending = prevSpending + spending;

            decimal normalSpending = 0;
            switch (date.DayOfWeek)
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

            if (totalSpending > normalSpending)
            {
                // overspending
                userBalance.Balance -= normalSpending;
                userBalance.SafetyPillow -= spending - normalSpending; // extra spending
            }
            else if (totalSpending < normalSpending)
            {
                // saving money
                userBalance.Balance -= spending;
                //userBalance.SafetyPillow += normalSpending - spending; // saved money
            }
            else
            {
                // spending exact planned amount
                userBalance.Balance -= spending;
            }

            _userBalanceRepository.Update(userBalance);
            
            // for testing
            _expenseRepository.Add(new Expense()
            {
                Amount = spending,
                Date = date,
                Description = "my test",
                UserId = id,
                IsShared = false,
                SharedExpenseId = null
            });
        }

        bool CheckBalance()
        {
            return false;
        }
    }
}
