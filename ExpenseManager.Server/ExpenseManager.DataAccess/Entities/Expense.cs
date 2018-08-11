using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExpenseManager.DataAccess.Entities
{
    public class Expense
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("userId")]
        [BsonRepresentation(BsonType.ObjectId)]
        public string UserId { get; set; }

        [BsonElement("date")]
        public DateTime Date { get; set; }

        [BsonElement("amount")]
        public decimal Amount { get; set; }

        [BsonElement("description")]
        public string Description { get; set; }

        [BsonElement("isShared")]
        public bool IsShared { get; set; }

        [BsonElement("sharedExpenseId")]
        [BsonRepresentation(BsonType.ObjectId)]
        public string SharedExpenseId { get; set; }
    }
}
