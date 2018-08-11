using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ExpenseManager.Api.Models;
using ExpenseManager.DataAccess.Entities;
using ExpenseManager.DataAccess.Repositories.Interfaces;
using ExpenseManager.DataAccess.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace ExpenseManager.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserBalancesController : ControllerBase
    {
        private readonly IRepository<UserBalance> _userBalanceRepository;
        private readonly UserBalanceService _userBalanceService;

        public UserBalancesController(IRepository<UserBalance> userBalanceRepository, IExpenseRepository<Expense> expenseRepository)
        {
            _userBalanceRepository = userBalanceRepository;
            _userBalanceService = new UserBalanceService(_userBalanceRepository, expenseRepository);
        }

        [HttpGet]
        public ActionResult<List<UserBalance>> GetAll()
        {
            return _userBalanceRepository.GetAll().ToList() ?? new List<UserBalance>();
        }

        [HttpGet("{id}", Name = "GetUserBalance")]
        public ActionResult<UserBalance> GetById(string id)
        {
            UserBalance userBalance = _userBalanceRepository.GetById(id);
            if (userBalance == null)
            {
                return NotFound();
            }
            return userBalance;
        }

        [HttpPost]
        public IActionResult Create(UserBalance userBalance)
        {
            int weekDaysCount = 0;
            int saturdaysCount = 0;
            int sundaysCount = 0;

            for (DateTime day = userBalance.StartDate; day <= userBalance.EndDate; day = day.AddDays(1))
            {
                if (day.DayOfWeek == DayOfWeek.Saturday)
                {
                    saturdaysCount++;
                } else if (day.DayOfWeek == DayOfWeek.Sunday)
                {
                    sundaysCount++;
                } else
                {
                    weekDaysCount++;
                }
            }

            userBalance.UserSettings.MinTotal = weekDaysCount * userBalance.UserSettings.MinWeekday +
                saturdaysCount * userBalance.UserSettings.MinSaturday + sundaysCount * userBalance.UserSettings.MinSunday;

            userBalance.Balance = userBalance.UserSettings.MinTotal;
            userBalance.SafetyPillow = userBalance.UserSettings.MaxTotal - userBalance.UserSettings.MinTotal;

            _userBalanceRepository.Add(userBalance);

            return CreatedAtRoute("GetUserBalance", new { id = userBalance.UserId }, userBalance);
        }

        [HttpPut("{id}")]
        public IActionResult Update(string id, SpendingModel spending)
        {
            var userBalance = _userBalanceRepository.GetById(id);
            if (userBalance == null)
            {
                return NotFound();
            }

            //_userBalanceService.UpdateBalance(id, spending.Spending, spending.Date);
            var result = _userBalanceService.IsBalanceGood(id, spending.Date);
            return NoContent();
        }
    }
}