﻿using ExpenseManager.DataAccess.Entities;
using ExpenseManager.DataAccess.Repositories.Interfaces;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExpenseManager.DataAccess.Repositories.Implementations
{
    public class ExpenseRepository : IExpenseRepository<Expense>, IExtendedRepository<Expense>
    {
        private readonly DbContext _context = null;

        public ExpenseRepository(IOptions<Settings> settings)
        {
            _context = new DbContext(settings);
        }

        public IEnumerable<Expense> GetAll()
        {
            return _context.Expenses.Find(_ => true).ToList().OrderByDescending(expense => expense.Date);
        }

        public Expense GetById(string id)
        {
            return _context.Expenses.Find(expense => expense.Id == id).FirstOrDefault();
        }

        public Expense GetByIds(string userId, string sharedExpenseId)
        {
            return _context.Expenses.Find(expense => expense.UserId == userId && expense.SharedExpenseId == sharedExpenseId)
                .FirstOrDefault();
        }

        public IEnumerable<Expense> GetByUserId(string userId)
        {
            return _context.Expenses.Find(expense => expense.UserId == userId).ToList().OrderByDescending(expense => expense.Date);
        }

        public string Add(Expense item)
        {
            _context.Expenses.InsertOne(item);
            return item.Id;
        }
    }
}
