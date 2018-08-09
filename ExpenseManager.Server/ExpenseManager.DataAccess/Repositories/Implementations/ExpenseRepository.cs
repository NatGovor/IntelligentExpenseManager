using ExpenseManager.DataAccess.Entities;
using ExpenseManager.DataAccess.Repositories.Interfaces;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExpenseManager.DataAccess.Repositories.Implementations
{
    public class ExpenseRepository : IExtendedRepository<Expense>
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
                return _context.Expenses.Find(_ => true).ToList().OrderBy(expense => expense.Date);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Expense GetById(string id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Expense> GetByUserId(string userId)
        {
            ObjectId oUserId = new ObjectId(userId);
            try
            {
                return _context.Expenses.Find(expense => expense.UserId == oUserId).ToList().OrderBy(expense => expense.Date);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
