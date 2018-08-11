using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExpenseManager.DataAccess.Entities
{
    public class UserBalance
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string UserId { get; set; }

        [BsonElement("balance")]
        public decimal Balance { get; set; }

        [BsonElement("safetyPillow")]
        public decimal SafetyPillow { get; set; }

        [BsonElement("startDate")]
        public DateTime StartDate { get; set; }

        [BsonElement("endDate")]
        public DateTime EndDate { get; set; }

        [BsonElement("userSettings")]
        public UserSettings UserSettings { get; set; }
    }
}
