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
    public class ExpenseManagerContext
    {
        private readonly IMongoDatabase _database = null;

        public ExpenseManagerContext(IOptions<Settings> settings)
        {
            var client = new MongoClient(settings.Value.ConnectionString);
            if (client != null)
            {
                _database = client.GetDatabase(settings.Value.Database);
            }
        }

        public IMongoCollection<Expense> Expenses
        {
            get
            {
                return _database.GetCollection<Expense>("expenses");
            }
        }
    }
}
