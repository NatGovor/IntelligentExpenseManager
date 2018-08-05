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
    public class UserRepository : IRepository<User>
    {
        private readonly DbContext _context = null;

        public UserRepository(IOptions<Settings> settings)
        {
            _context = new DbContext(settings);
        }

        public IEnumerable<User> GetAll()
        {
            try
            {
                return _context.Users.Find(_ => true).ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
