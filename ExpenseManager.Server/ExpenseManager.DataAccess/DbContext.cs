using ExpenseManager.DataAccess.Entities;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExpenseManager.DataAccess
{
    public class DbContext
    {
        private readonly IMongoDatabase _database = null;

        public DbContext(IOptions<Settings> settings)
        {
            var client = new MongoClient(settings.Value.ConnectionString);
            if (client != null)
            {
                _database = client.GetDatabase(settings.Value.Database);
            }
        }

        public IMongoCollection<User> Users
        {
            get
            {
                return _database.GetCollection<User>("users");
            }
        }

        public IMongoCollection<Group> Groups
        {
            get
            {
                return _database.GetCollection<Group>("groups");
            }
        }

        public IMongoCollection<Expense> Expenses
        {
            get
            {
                return _database.GetCollection<Expense>("expenses");
            }
        }

        public IMongoCollection<SharedExpense> SharedExpenses
        {
            get
            {
                return _database.GetCollection<SharedExpense>("sharedExpenses");
            }
        }

        public IMongoCollection<UserBalance> UserBalances
        {
            get
            {
                return _database.GetCollection<UserBalance>("userBalances");
            }
        }
    }
}
