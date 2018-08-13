using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ExpenseManager.Api.Models;
using ExpenseManager.DataAccess.Entities;
using ExpenseManager.DataAccess.Repositories.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ExpenseManager.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SharedExpensesController : ControllerBase
    {
        private readonly IExtendedRepository<Group> _groupRepository;
        private readonly ISharedExpenseRepository<SharedExpense> _sharedExpenseRepository;
        private readonly IUserRepository<User> _userRepository;
        private readonly IExpenseRepository<Expense> _expenseRepository;

        public SharedExpensesController(IExtendedRepository<Group> groupRepository,
            ISharedExpenseRepository<SharedExpense> sharedExpenseRepository,
            IUserRepository<User> userRepository,
            IExpenseRepository<Expense> expenseRepository)
        {
            _groupRepository = groupRepository;
            _sharedExpenseRepository = sharedExpenseRepository;
            _userRepository = userRepository;
            _expenseRepository = expenseRepository;
        }

        [HttpGet("{userId}")]
        public ActionResult<List<SharedExpenseModel>> GetByUser(string userId = "")
        {
            var userGroups = _groupRepository.GetByUserId(userId).ToList() ?? new List<Group>();
            var result = new List<SharedExpenseModel>();
            userGroups.ForEach(group =>
            {
                var expenses = _sharedExpenseRepository.GetByGroupId(group.Id).ToList();
                expenses.ForEach(expense =>
                {
                    var sharedExpenseModel = new SharedExpenseModel()
                    {
                        Id = expense.Id,
                        Date = expense.Date,
                        GroupId = group.Id,
                        GroupName = group.Name,
                        PayerId = expense.PaidBy,
                        TotalAmount = expense.Amount,
                        UserId = userId
                    };

                    var payer = _userRepository.GetById(sharedExpenseModel.PayerId);
                    sharedExpenseModel.PayerName = payer.Name;

                    var userExpense = _expenseRepository.GetByIds(sharedExpenseModel.UserId, sharedExpenseModel.Id);
                    sharedExpenseModel.Description = userExpense.Description;

                    var userDebt = expense.Debtors.Find(user => user.UserId == userId);
                    if (sharedExpenseModel.PayerId == userId)
                    {
                        sharedExpenseModel.UserDebt = sharedExpenseModel.TotalAmount - userDebt.Amount;
                    } else
                    {
                        sharedExpenseModel.UserDebt = -userDebt.Amount;
                    }

                    result.Add(sharedExpenseModel);
                });
            });
            return result.OrderBy(x => x.Date).ToList();
        }
    }
}