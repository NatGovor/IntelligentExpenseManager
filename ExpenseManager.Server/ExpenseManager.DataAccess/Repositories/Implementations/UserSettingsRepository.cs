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
            return _context.UserSettings.Find(_ => true).ToList();
        }

        public UserSettings GetById(string id)
        {
            return _context.UserSettings.Find(x => x.UserId == id).FirstOrDefault();
        }

        public string Add(UserSettings item)
        {
            _context.UserSettings.InsertOne(item);
            return item.UserId;
        }

        public void Update(UserSettings item)
        {
            var filter = Builders<UserSettings>.Filter.Eq(x => x.UserId, item.UserId);
            var update = Builders<UserSettings>.Update
                            .Set(x => x.MinWeekday, item.MinWeekday)
                            .Set(x => x.MinSaturday, item.MinSaturday)
                            .Set(x => x.MinSunday, item.MinSunday)
                            .Set(x => x.MaximumToSpend, item.MaximumToSpend)
                            .Set(x => x.Percentage, item.Percentage);

            UpdateResult actionResult = _context.UserSettings.UpdateOne(filter, update);
        }

        public void Remove(string id)
        {
            throw new NotImplementedException();
        }
    }
}
