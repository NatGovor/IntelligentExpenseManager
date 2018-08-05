using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
        private readonly IRepository<Expense> _expenseRepository;

        public ExpensesController(IRepository<Expense> expenseRepository)
        {
            _expenseRepository = expenseRepository;
        }

        [HttpGet]
        public ActionResult<List<Expense>> GetAll()
        {
            return _expenseRepository.GetAll().ToList() ?? new List<Expense>();
        }
    }
}