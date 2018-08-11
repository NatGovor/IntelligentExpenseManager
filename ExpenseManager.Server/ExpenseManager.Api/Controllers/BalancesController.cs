using ExpenseManager.DataAccess.Entities;
using ExpenseManager.DataAccess.Repositories.Interfaces;
using ExpenseManager.DataAccess.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExpenseManager.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BalancesController : ControllerBase
    {
        private readonly IRepository<UserSettings> _userSettingsRepository;
        private BalanceService _balanceService;

        public BalancesController(IRepository<UserSettings> userSettingsRepository, IExpenseRepository<Expense> expenseRepository)
        {
            _userSettingsRepository = userSettingsRepository;
            _balanceService = new BalanceService(userSettingsRepository, expenseRepository);
        }

        [HttpGet("{id}/{date}")]
        public ActionResult<bool> GetById(string id, DateTime date)
        {
            UserSettings userSettings = _userSettingsRepository.GetById(id);
            if (userSettings == null)
            {
                return NotFound();
            }

            return _balanceService.IsBalanceGood(id, date);
        }
    }
}
