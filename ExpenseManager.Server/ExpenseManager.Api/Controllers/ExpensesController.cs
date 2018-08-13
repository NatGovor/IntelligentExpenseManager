using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ExpenseManager.Api.Models;
using ExpenseManager.DataAccess.Entities;
using ExpenseManager.DataAccess.Repositories.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;

namespace ExpenseManager_Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExpensesController : ControllerBase
    {
        private readonly IExpenseRepository<Expense> _expenseRepository;

        public ExpensesController(IExpenseRepository<Expense> expenseRepository)
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
                    Id = expense.Id,
                    UserId = expense.UserId,
                    Date = expense.Date,
                    Amount = expense.Amount,
                    Description = expense.Description,
                    IsShared = expense.IsShared,
                    SharedExpenseId = expense.SharedExpenseId
                });
            });
            return result;
        }

        [HttpGet("user/{userId}")]
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
                                Id = expense.Id,
                                UserId = expense.UserId,
                                Date = expense.Date,
                                Amount = expense.Amount,
                                Description = expense.Description,
                                IsShared = expense.IsShared,
                                SharedExpenseId = expense.SharedExpenseId
                            });
                    } else
                    {
                        result.Add(expense.Date, new List<ExpenseModel>() {
                            new ExpenseModel() {
                                Id = expense.Id,
                                UserId = expense.UserId,
                                Date = expense.Date,
                                Amount = expense.Amount,
                                Description = expense.Description,
                                IsShared = expense.IsShared,
                                SharedExpenseId = expense.SharedExpenseId
                            }
                        });
                    }
                });
            }

            return result;
        }

        [HttpGet("{id}", Name = "GetExpense")]
        public ActionResult<ExpenseModel> GetById(string id)
        {
            Expense expense = _expenseRepository.GetById(id);
            if (expense == null)
            {
                return NotFound();
            }
            return new ExpenseModel()
            {
                Id = expense.Id,
                UserId = expense.UserId,
                Date = expense.Date,
                Amount = expense.Amount,
                Description = expense.Description,
                IsShared = expense.IsShared,
                SharedExpenseId = expense.SharedExpenseId
            };
        }

        [HttpPost]
        public IActionResult Create(ExpenseModel expense)
        {
            expense.Id = _expenseRepository.Add(new Expense()
            {
                UserId = expense.UserId,
                Date = expense.Date,
                Amount = expense.Amount,
                Description = expense.Description,
                IsShared = expense.IsShared,
                SharedExpenseId = String.IsNullOrEmpty(expense.SharedExpenseId) == true ? null : expense.SharedExpenseId
            });

            return CreatedAtRoute("GetExpense", new { id = expense.Id }, expense);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            var expense = _expenseRepository.GetById(id);
            if (expense == null)
            {
                return NotFound();
            }

            _expenseRepository.Remove(id);
            return NoContent();
        }
    }
}