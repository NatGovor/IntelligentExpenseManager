using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExpenseManager.Api.Models
{
    public class DayExpensesModel
    {
        public DateTime Date { get; set; }
        public List<ExpenseModel> Expenses { get; set; }
    }
}
