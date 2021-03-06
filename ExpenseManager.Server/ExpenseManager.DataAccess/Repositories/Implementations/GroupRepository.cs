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
    public class GroupRepository : IExtendedRepository<Group>
    {
        private readonly DbContext _context = null;

        public GroupRepository(IOptions<Settings> settings)
        {
            _context = new DbContext(settings);
        }

        public IEnumerable<Group> GetAll()
        {
            return _context.Groups.Find(_ => true).ToList();
        }

        public Group GetById(string id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Group> GetByUserId(string userId)
        {
            var bQuery = "{'friends':{$elemMatch:{'userId': ObjectId('" + userId + "')}}}}";
            var filter = MongoDB.Bson.Serialization.BsonSerializer.Deserialize<BsonDocument>(bQuery);
            return _context.Groups.Find(filter).ToList();
        }

        public string Add(Group item)
        {
            throw new NotImplementedException();
        }

        public void Update(Group item)
        {
            throw new NotImplementedException();
        }

        public void Remove(string id)
        {
            throw new NotImplementedException();
        }
    }
}
