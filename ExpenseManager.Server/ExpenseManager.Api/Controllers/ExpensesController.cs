using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ExpenseManager.Api.Models;
using ExpenseManager.DataAccess.Entities;
using ExpenseManager.DataAccess.Repositories.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ExpenseManager_Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExpensesController : ControllerBase
    {
        private readonly IExtendedRepository<Expense> _expenseRepository;

        public ExpensesController(IExtendedRepository<Expense> expenseRepository)
        {
            _expenseRepository = expenseRepository;
        }

        [HttpGet]
        public ActionResult<List<ExpenseModel>> GetAll()
        {
            var expenses = _expenseRepository.GetAll().ToList() ?? new List<Expense>();
            var result = new List<ExpenseModel>();
            expenses.ForEach(expense =>
            {
                result.Add(new ExpenseModel()
                {
                    Id = expense.Id.ToString(),
                    Description = expense.Description,
                    Amount = expense.Amount,
                    IsShared = expense.IsShared,
                    SharedExpenseId = expense.SharedExpenseId.ToString()
                });
            });
            return result;
        }

        [HttpGet("{userId}")]
        public ActionResult<Dictionary<DateTime, List<ExpenseModel>>> GetByUser(string userId = "")
        {
            var result = new Dictionary<DateTime, List<ExpenseModel>>();
            var expenses = _expenseRepository.GetByUserId(userId).ToList() ?? new List<Expense>();
            if (expenses.Count != 0)
            {
                expenses.ForEach(expense =>
                {
                    if (result.ContainsKey(expense.Date))
                    {
                        var list = result.GetValueOrDefault(expense.Date);
                        list.Add(new ExpenseModel()
                            {
                                Id = expense.Id.ToString(),
                                Description = expense.Description,
                                Amount = expense.Amount,
                                IsShared = expense.IsShared,
                                SharedExpenseId = expense.SharedExpenseId.ToString()
                            });
                    } else
                    {
                        result.Add(expense.Date, new List<ExpenseModel>() {
                            new ExpenseModel() {
                                Id = expense.Id.ToString(),
                                Description = expense.Description,
                                Amount = expense.Amount,
                                IsShared = expense.IsShared,
                                SharedExpenseId = expense.SharedExpenseId.ToString()
                            }
                        });
                    }
                });
            }

            return result;
        }
    }
}