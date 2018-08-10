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
            try
            {
                return _context.Expenses.Find(_ => true).ToList().OrderByDescending(expense => expense.Date);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Expense GetById(string id)
        {
            ObjectId oId = new ObjectId(id);
            try
            {
                return _context.Expenses.Find(expense => expense.Id == oId).FirstOrDefault();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Expense GetByIds(string userId, string sharedExpenseId)
        {
            ObjectId oUserId = new ObjectId(userId);
            ObjectId oSharedExpenseId = new ObjectId(sharedExpenseId);
            try
            {
                return _context.Expenses.Find(expense => expense.UserId == oUserId && expense.SharedExpenseId == oSharedExpenseId)
                    .FirstOrDefault();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public IEnumerable<Expense> GetByUserId(string userId)
        {
            ObjectId oUserId = new ObjectId(userId);
            try
            {
                return _context.Expenses.Find(expense => expense.UserId == oUserId).ToList().OrderByDescending(expense => expense.Date);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public string Add(Expense item)
        {
            _context.Expenses.InsertOne(item);
            return item.Id.ToString();
        }
    }
}
