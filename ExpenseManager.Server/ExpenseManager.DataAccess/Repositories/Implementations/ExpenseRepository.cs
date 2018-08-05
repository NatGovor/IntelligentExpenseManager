using ExpenseManager.DataAccess.Entities;
using ExpenseManager.DataAccess.Repositories.Interfaces;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExpenseManager.DataAccess.Repositories.Implementations
{
    public class ExpenseRepository : IRepository<Expense>
    {
        private readonly DbContext _context = null;

        public ExpenseRepository(IOptions<Settings> settings)
        {
            _context = new DbContext(settings);
        }

        public IEnumerable<Expense> GetAll()
        {
            try
            {
                return _context.Expenses.Find(_ => true).ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
