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

        public User GetById(string id)
        {
            ObjectId oId = new ObjectId(id);
            try
            {
                return _context.Users.Find(user => user.Id == oId).FirstOrDefault();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
