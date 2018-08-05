var connection = new Mongo();
var db = connection.getDB('ExpenseManager');

// drop the previous database with the same name if exists
db.dropDatabase();

// Create users
db.users.insert([
    /* 0 */
    {
        name: 'Nat',
        email: 'nat@test.com',
        password: 'testpwd1',
        friends: []
    },
    /* 1 */
    {
        name: 'Alex',
        email: 'alex@test.com',
        password: 'testpwd1',
        friends: []
    },
    /* 2 */
    {
        name: 'Alexandra',
        email: 'alexandra@test.com',
        password: 'testpwd1',
        friends: []
    },
    /* 3 */
    {
        name: 'Igor',
        email: 'igor@test.com',
        password: 'testpwd1',
        friends: []
    },
    /* 4 */
    {
        name: 'John',
        email: 'john@test.com',
        password: 'testpwd1',
        friends: []
    },
    /* 5 */
    {
        name: 'Dima',
        email: 'dima@test.com',
        password: 'testpwd1',
        friends: []
    },
    /* 6 */
    {
        name: 'Alexnekot',
        email: 'alexnekot@test.com',
        password: 'testpwd1',
        friends: []
    },
    /* 7 */
    {
        name: 'Test',
        email: 'test@test.com',
        password: 'testpwd1',
        friends: []
    }
]);

// Add friends to users
var users = db.users.find();
/* 0 */
db.users.update(
    { _id: users[0]._id },
    {
        $set: {
            friends: [
                {
                    userId: users[1]._id,
                    name: users[1].name
                },
                {
                    userId: users[2]._id,
                    name: users[2].name
                },
                {
                    userId: users[3]._id,
                    name: users[3].name
                },
                {
                    userId: users[5]._id,
                    name: users[5].name
                },
                {
                    userId: users[6]._id,
                    name: users[6].name
                }
            ]
        }
    }
);
/* 1 */
db.users.update(
    { _id: users[1]._id },
    {
        $set: {
            friends: [
                {
                    userId: users[0]._id,
                    name: users[0].name
                }
            ]
        }
    }
);
/* 2 */
db.users.update(
    { _id: users[2]._id },
    {
        $set: {
            friends: [
                {
                    userId: users[0]._id,
                    name: users[0].name
                },
                {
                    userId: users[3]._id,
                    name: users[3].name
                }
            ]
        }
    }
);
/* 3 */
db.users.update(
    { _id: users[3]._id },
    {
        $set: {
            friends: [
                {
                    userId: users[0]._id,
                    name: users[0].name
                },
                {
                    userId: users[2]._id,
                    name: users[2].name
                }
            ]
        }
    }
);
/* 5 */
db.users.update(
    { _id: users[5]._id },
    {
        $set: {
            friends: [
                {
                    userId: users[0]._id,
                    name: users[0].name
                }
            ]
        }
    }
);
/* 6 */
db.users.update(
    { _id: users[6]._id },
    {
        $set: {
            friends: [
                {
                    userId: users[0]._id,
                    name: users[0].name
                }
            ]
        }
    }
);
/* 7 */
db.users.update(
    { _id: users[6]._id },
    {
        $set: {
            friends: [
                {
                    userId: users[0]._id,
                    name: users[0].name
                },
                {
                    userId: users[2]._id,
                    name: users[2].name
                },
                {
                    userId: users[3]._id,
                    name: users[3].name
                }
            ]
        }
    }
);

db.groups.insert([
    /* 0 */
    {
        name: 'Belgium trip',
        friends: [
            {
                userId: users[0]._id,
                name: users[0].name
            },
            {
                userId: users[2]._id,
                name: users[2].name
            },
            {
                userId: users[3]._id,
                name: users[3].name
            },
            {
                userId: users[7]._id,
                name: users[7].name
            }
        ]
    },
    /* 1 */
    {
        name: 'Vilnius trip',
        friends: [
            {
                userId: users[0]._id,
                name: users[0].name
            },
            {
                userId: users[1]._id,
                name: users[1].name
            }
        ]
    },
    /* 2 */
    {
        name: 'Italy trip',
        friends: [
            {
                userId: users[0]._id,
                name: users[0].name
            },
            {
                userId: users[6]._id,
                name: users[6].name
            }
        ]
    }
]);

// Add expenses for users (including shared expenses)
var groups = db.groups.find();
db.sharedExpenses.insert([
    /* 0 Appartment */
    {
        amount: 100,
        groupId: groups[2]._id,
        paidBy: users[0]._id,
        splitType: 'equal',
        debtors: [
            {
                userId: users[0]._id,
                amount: 50
            },
            {
                userId: users[6]._id,
                amount: 50
            }
        ]
    },
    /* 1 Train */
    {
        amount: 50,
        groupId: groups[2]._id,
        paidBy: users[6]._id,
        splitType: 'equal',
        debtors: [
            {
                userId: users[0]._id,
                amount: 25
            },
            {
                userId: users[6]._id,
                amount: 25
            }
        ]
    },
    /* 2 Hostel Brussels */
    {
        amount: 184,
        groupId: groups[0]._id,
        paidBy: users[2]._id,
        splitType: 'equal',
        debtors: [
            {
                userId: users[0]._id,
                amount: 46
            },
            {
                userId: users[2]._id,
                amount: 46
            },
            {
                userId: users[3]._id,
                amount: 46
            },
            {
                userId: users[7]._id,
                amount: 46
            }
        ]
    },
    /* 3 Bars */
    {
        amount: 15,
        groupId: groups[0]._id,
        paidBy: users[7]._id,
        splitType: 'equal',
        debtors: [
            {
                userId: users[0]._id,
                amount: 3.75
            },
            {
                userId: users[2]._id,
                amount: 3.75
            },
            {
                userId: users[3]._id,
                amount: 3.75
            },
            {
                userId: users[7]._id,
                amount: 3.75
            }
        ]
    },
    /* 4 Lunch */
    {
        amount: 20,
        groupId: groups[0]._id,
        paidBy: users[0]._id,
        splitType: 'equal',
        debtors: [
            {
                userId: users[0]._id,
                amount: 5
            },
            {
                userId: users[2]._id,
                amount: 5
            },
            {
                userId: users[3]._id,
                amount: 5
            },
            {
                userId: users[7]._id,
                amount: 5
            }
        ]
    },
    /* 5 Dinner */
    {
        amount: 40,
        groupId: groups[0]._id,
        paidBy: users[3]._id,
        splitType: 'equal',
        debtors: [
            {
                userId: users[0]._id,
                amount: 10
            },
            {
                userId: users[2]._id,
                amount: 10
            },
            {
                userId: users[3]._id,
                amount: 10
            },
            {
                userId: users[7]._id,
                amount: 10
            }
        ]
    },
    /* 6 Beer museum */
    {
        amount: 20,
        groupId: groups[0]._id,
        paidBy: users[3]._id,
        splitType: 'equal',
        debtors: [
            {
                userId: users[0]._id,
                amount: 5
            },
            {
                userId: users[2]._id,
                amount: 5
            },
            {
                userId: users[3]._id,
                amount: 5
            },
            {
                userId: users[7]._id,
                amount: 5
            }
        ]
    },
    /* 7 Hostel Brugge */
    {
        amount: 84,
        groupId: groups[0]._id,
        paidBy: users[2]._id,
        splitType: 'equal',
        debtors: [
            {
                userId: users[0]._id,
                amount: 21
            },
            {
                userId: users[2]._id,
                amount: 21
            },
            {
                userId: users[3]._id,
                amount: 21
            },
            {
                userId: users[7]._id,
                amount: 21
            }
        ]
    }
]);

var sharedExpenses = db.sharedExpenses.find();
db.expenses.insert([
    /* Expenses of user 0 */
    {
        userId: users[0]._id,
        amount: 50,
        description: 'Apartments',
        isShared: true,
        sharedExpenseId: sharedExpenses[0]._id
    },
    {
        userId: users[0]._id,
        amount: 25,
        description: 'Train',
        isShared: true,
        sharedExpenseId: sharedExpenses[1]._id
    },
    {
        userId: users[0]._id,
        amount: 46,
        description: 'Hostel Brussels',
        isShared: true,
        sharedExpenseId: sharedExpenses[2]._id
    },
    {
        userId: users[0]._id,
        amount: 3.75,
        description: 'Bars',
        isShared: true,
        sharedExpenseId: sharedExpenses[3]._id
    },
    {
        userId: users[0]._id,
        amount: 5,
        description: 'Lunch',
        isShared: true,
        sharedExpenseId: sharedExpenses[4]._id
    },
    {
        userId: users[0]._id,
        amount: 10,
        description: 'Dinner',
        isShared: true,
        sharedExpenseId: sharedExpenses[5]._id
    },
    {
        userId: users[0]._id,
        amount: 5,
        description: 'Beer museum',
        isShared: true,
        sharedExpenseId: sharedExpenses[6]._id
    },
    {
        userId: users[0]._id,
        amount: 21,
        description: 'Hostel Brugge',
        isShared: true,
        sharedExpenseId: sharedExpenses[7]._id
    },
    /* Expenses of user 2 */
    {
        userId: users[2]._id,
        amount: 46,
        description: 'Hostel Brussels',
        isShared: true,
        sharedExpenseId: sharedExpenses[2]._id
    },
    {
        userId: users[2]._id,
        amount: 3.75,
        description: 'Bars',
        isShared: true,
        sharedExpenseId: sharedExpenses[3]._id
    },
    {
        userId: users[2]._id,
        amount: 5,
        description: 'Lunch',
        isShared: true,
        sharedExpenseId: sharedExpenses[4]._id
    },
    {
        userId: users[2]._id,
        amount: 10,
        description: 'Dinner',
        isShared: true,
        sharedExpenseId: sharedExpenses[5]._id
    },
    {
        userId: users[2]._id,
        amount: 5,
        description: 'Beer museum',
        isShared: true,
        sharedExpenseId: sharedExpenses[6]._id
    },
    {
        userId: users[2]._id,
        amount: 21,
        description: 'Hostel Brugge',
        isShared: true,
        sharedExpenseId: sharedExpenses[7]._id
    },
    /* Expenses of user 3 */
    {
        userId: users[3]._id,
        amount: 46,
        description: 'Hotel Brussels',
        isShared: true,
        sharedExpenseId: sharedExpenses[2]._id
    },
    {
        userId: users[3]._id,
        amount: 3.75,
        description: 'Bars',
        isShared: true,
        sharedExpenseId: sharedExpenses[3]._id
    },
    {
        userId: users[3]._id,
        amount: 5,
        description: 'Lunch',
        isShared: true,
        sharedExpenseId: sharedExpenses[4]._id
    },
    {
        userId: users[3]._id,
        amount: 10,
        description: 'Dinner',
        isShared: true,
        sharedExpenseId: sharedExpenses[5]._id
    },
    {
        userId: users[2]._id,
        amount: 5,
        description: 'Beer museum',
        isShared: true,
        sharedExpenseId: sharedExpenses[6]._id
    },
    {
        userId: users[2]._id,
        amount: 21,
        description: 'Hostel Brugge',
        isShared: true,
        sharedExpenseId: sharedExpenses[7]._id
    },
    /* Expenses of user 6 */
    {
        userId: users[6]._id,
        amount: 50,
        description: 'Apartments',
        isShared: true,
        sharedExpenseId: sharedExpenses[0]._id
    },
    {
        userId: users[6]._id,
        amount: 25,
        description: 'Train',
        isShared: true,
        sharedExpenseId: sharedExpenses[1]._id
    },
    /* Expenses of user 7 */
    {
        userId: users[7]._id,
        amount: 46,
        description: 'Hotel Brussels',
        isShared: true,
        sharedExpenseId: sharedExpenses[2]._id
    },
    {
        userId: users[7]._id,
        amount: 3.75,
        description: 'Bars',
        isShared: true,
        sharedExpenseId: sharedExpenses[3]._id
    },
    {
        userId: users[7]._id,
        amount: 5,
        description: 'Lunch',
        isShared: true,
        sharedExpenseId: sharedExpenses[4]._id
    },
    {
        userId: users[7]._id,
        amount: 10,
        description: 'Dinner',
        isShared: true,
        sharedExpenseId: sharedExpenses[5]._id
    },
    {
        userId: users[7]._id,
        amount: 5,
        description: 'Beer museum',
        isShared: true,
        sharedExpenseId: sharedExpenses[6]._id
    },
    {
        userId: users[7]._id,
        amount: 21,
        description: 'Hostel Brugge',
        isShared: true,
        sharedExpenseId: sharedExpenses[7]._id
    }
]);
