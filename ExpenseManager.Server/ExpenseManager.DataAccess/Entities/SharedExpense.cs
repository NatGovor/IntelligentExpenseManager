using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExpenseManager.DataAccess.Entities
{
    public class SharedExpense
    {
        [BsonId]
        public ObjectId Id { get; set; }

        [BsonElement("date")]
        public DateTime Date { get; set; }

        [BsonElement("amount")]
        public decimal Amount { get; set; }

        [BsonElement("groupId")]
        public ObjectId GroupId { get; set; }

        [BsonElement("paidBy")]
        public ObjectId PaidBy { get; set; }

        [BsonElement("splitType")]
        public string SplitType { get; set; }

        [BsonElement("debtors")]
        public List<Debtor> Debtors { get; set; }
    }
}
