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
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("date")]
        public DateTime Date { get; set; }

        [BsonElement("amount")]
        public decimal Amount { get; set; }

        [BsonElement("groupId")]
        [BsonRepresentation(BsonType.ObjectId)]
        public string GroupId { get; set; }

        [BsonElement("paidBy")]
        [BsonRepresentation(BsonType.ObjectId)]
        public string PaidBy { get; set; }

        [BsonElement("splitType")]
        public string SplitType { get; set; }

        [BsonElement("debtors")]
        public List<Debtor> Debtors { get; set; }
    }
}
