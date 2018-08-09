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
        public ObjectId Id { get; set; }

        [BsonElement("userId")]
        public ObjectId UserId { get; set; }

        [BsonElement("date")]
        public DateTime Date { get; set; }

        [BsonElement("amount")]
        public decimal Amount { get; set; }

        [BsonElement("description")]
        public string Description { get; set; }

        [BsonElement("isShared")]
        public bool IsShared { get; set; }

        [BsonElement("sharedExpenseId")]
        public ObjectId SharedExpenseId { get; set; }
    }
}
