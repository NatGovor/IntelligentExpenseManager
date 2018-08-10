using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExpenseManager.Api.Models
{
    public class ExpenseModel
    {
        public string Id { get; set; }
        public string UserId { get; set; }
        public DateTime Date { get; set; }
        public decimal Amount { get; set; }
        public string Description { get; set; }
        public bool IsShared { get; set; }
        public string SharedExpenseId { get; set; }
    }
}
