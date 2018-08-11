using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExpenseManager.DataAccess.Entities
{
    public class UserSettings
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string UserId { get; set; }

        [BsonElement("max")]
        public decimal MaximumToSpend { get; set; }

        [BsonElement("percentage")]
        public int Percentage { get; set; }

        [BsonElement("minEveryday")]
        public decimal MinWeekday { get; set; }

        [BsonElement("minSaturday")]
        public decimal MinSaturday { get; set; }

        [BsonElement("minSunday")]
        public decimal MinSunday { get; set; }
    }
}
