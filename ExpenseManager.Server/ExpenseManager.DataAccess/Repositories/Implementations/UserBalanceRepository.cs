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
    public class UserBalanceRepository : IRepository<UserBalance>
    {
        private readonly DbContext _context = null;

        public UserBalanceRepository(IOptions<Settings> settings)
        {
            _context = new DbContext(settings);
        }

        public IEnumerable<UserBalance> GetAll()
        {
            return _context.UserBalances.Find(_ => true).ToList();
        }

        public UserBalance GetById(string id)
        {
            return _context.UserBalances.Find(_ => true).FirstOrDefault();
        }

        public string Add(UserBalance item)
        {
            _context.UserBalances.InsertOne(item);
            return item.UserId;
        }

        public void Update(UserBalance item)
        {
            var filter = Builders<UserBalance>.Filter.Eq(x => x.UserId, item.UserId);
            var update = Builders<UserBalance>.Update
                            .Set(x => x.Balance, item.Balance)
                            .Set(x => x.SafetyPillow, item.SafetyPillow);
            _context.UserBalances.UpdateOne(filter, update);
        }
    }
}
