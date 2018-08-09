using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExpenseManager.Api.Models
{
    public class SharedExpenseModel
    {
        public string Id { get; set; }
        public string GroupId { get; set; }
        public string GroupName { get; set; }
        public DateTime Date { get; set; }
        public decimal TotalAmount { get; set; }
        public string UserId { get; set; }
        public string PayerId { get; set; }
        public string PayerName { get; set; }
        public decimal UserDebt { get; set; }
    }
}
