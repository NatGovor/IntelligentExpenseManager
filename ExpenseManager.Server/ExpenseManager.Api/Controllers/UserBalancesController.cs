using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ExpenseManager.DataAccess.Entities;
using ExpenseManager.DataAccess.Repositories.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ExpenseManager.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserBalancesController : ControllerBase
    {
        private readonly IRepository<UserBalance> _userBalanceRepository;

        public UserBalancesController(IRepository<UserBalance> userBalanceRepository)
        {
            _userBalanceRepository = userBalanceRepository;
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
            _userBalanceRepository.Add(userBalance);

            return CreatedAtRoute("GetUserBalance", new { id = userBalance.UserId }, userBalance);
        }
    }
}