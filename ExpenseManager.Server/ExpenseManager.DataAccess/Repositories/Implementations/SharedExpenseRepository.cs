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
            try
            {
                return _context.SharedExpenses.Find(_ => true).ToList().OrderBy(expense => expense.Date); ;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public IEnumerable<SharedExpense> GetByGroupId(string groupId)
        {
            ObjectId oGroupId = new ObjectId(groupId);
            try
            {
                return _context.SharedExpenses.Find(expense => expense.GroupId == oGroupId).ToList().OrderBy(expense => expense.Date); ;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public SharedExpense GetById(string id)
        {
            throw new NotImplementedException();
        }
    }
}
