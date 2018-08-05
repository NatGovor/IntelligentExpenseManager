using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExpenseManager.DataAccess.Entities
{
    public class Debtor
    {
        [BsonElement("userId")]
        public ObjectId UserId { get; set; }

        [BsonElement("amount")]
        public decimal Amount { get; set; }
    }
}
