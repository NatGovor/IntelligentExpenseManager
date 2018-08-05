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
    public class SharedExpenseRepository : IRepository<SharedExpense>
    {
        private readonly DbContext _context = null;

        public SharedExpenseRepository(IOptions<Settings> settings)
        {
            _context = new DbContext(settings);
        }

        public IEnumerable<SharedExpense> GetAll()
        {
            try
            {
                return _context.SharedExpenses.Find(_ => true).ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
