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
    public class SharedExpenseRepository : ISharedExpenseRepository<SharedExpense>
    {
        private readonly DbContext _context = null;

        public SharedExpenseRepository(IOptions<Settings> settings)
        {
            _context = new DbContext(settings);
        }

        public IEnumerable<SharedExpense> GetAll()
        {
            return _context.SharedExpenses.Find(_ => true).ToList().OrderByDescending(expense => expense.Date); ;
        }

        public IEnumerable<SharedExpense> GetByGroupId(string groupId)
        {
            return _context.SharedExpenses.Find(expense => expense.GroupId == groupId).ToList().OrderByDescending(expense => expense.Date); ;
        }

        public SharedExpense GetById(string id)
        {
            throw new NotImplementedException();
        }

        public string Add(SharedExpense item)
        {
            throw new NotImplementedException();
        }

        public void Update(SharedExpense item)
        {
            throw new NotImplementedException();
        }

        public void Remove(string id)
        {
            throw new NotImplementedException();
        }
    }
}
