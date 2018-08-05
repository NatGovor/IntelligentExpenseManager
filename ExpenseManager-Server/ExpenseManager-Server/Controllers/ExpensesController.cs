using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ExpenseManager_Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ExpenseManager_Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExpensesController : ControllerBase
    {
        [HttpGet]
        public ActionResult<List<Expense>> GetAll()
        {
            return new List<Expense>
            {
                new Expense { Id = 0, Description = "Apartments", Amount = 100 },
                new Expense { Id = 0, Description = "Train", Amount = 50 }
            };
        }
    }
}