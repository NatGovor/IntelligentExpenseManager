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
    public class UserSettingsRepository : IRepository<UserSettings>
    {
        private readonly DbContext _context = null;

        public UserSettingsRepository(IOptions<Settings> settings)
        {
            _context = new DbContext(settings);
        }

        public IEnumerable<UserSettings> GetAll()
        {
            return _context.UserBalances.Find(_ => true).ToList();
        }

        public UserSettings GetById(string id)
        {
            return _context.UserBalances.Find(x => x.UserId == id).FirstOrDefault();
        }

        public string Add(UserSettings item)
        {
            _context.UserBalances.InsertOne(item);
            return item.UserId;
        }

        public void Update(UserSettings item)
        {
            throw new NotImplementedException();
        }

        public void Remove(string id)
        {
            throw new NotImplementedException();
        }
    }
}
