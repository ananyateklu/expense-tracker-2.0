using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Persistance;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Expenses.Any()) return;

            var expenses = new List<Expense>
            {
                new Expense
                {
                    Name = "Subway Sandwich",
                    Date = DateTime.Now.AddMonths(-2),
                    Description = "Activity 2 months ago",
                    ExpenseType = "food",
                    Amount = 15.99,
                },
                new Expense
                {
                    Name = "Electricity",
                    Date = DateTime.Now.AddMonths(-7),
                    Description = "Activity 2 months ago",
                    ExpenseType = "utility",
                    Amount = 35.68,
                },
                new Expense
                {
                    Name = "Tuition",
                    Date = DateTime.Now.AddMonths(-11),
                    Description = "Activity 2 months ago",
                    ExpenseType = "school",
                    Amount = 4000,
                },
                new Expense
                {
                    Name = "Gas",
                    Date = DateTime.Now.AddMonths(-3),
                    Description = "Activity 2 months ago",
                    ExpenseType = "transport",
                    Amount = 35,
                },
                new Expense
                {
                    Name = "Portable Speaker",
                    Date = DateTime.Now.AddMonths(-9),
                    Description = "Activity 2 months ago",
                    ExpenseType = "hobby",
                    Amount = 99.99,
                },
                new Expense
                {
                    Name = "Burger King",
                    Date = DateTime.Now.AddMonths(-22),
                    Description = "Activity 2 months ago",
                    ExpenseType = "food",
                    Amount = 12.99,
                },
                new Expense
                {
                    Name = "Sushi",
                    Date = DateTime.Now.AddMonths(-42),
                    Description = "Activity 2 months ago",
                    ExpenseType = "food",
                    Amount = 32.58,
                },
                new Expense
                {
                    Name = "Video Game",
                    Date = DateTime.Now.AddMonths(-32),
                    Description = "Activity 2 months ago",
                    ExpenseType = "hobby",
                    Amount = 22,
                },
                new Expense
                {
                    Name = "Books",
                    Date = DateTime.Now.AddMonths(-7),
                    Description = "Activity 2 months ago",
                    ExpenseType = "school",
                    Amount = 232.99,
                },
                new Expense
                {
                    Name = "McDonalds",
                    Date = DateTime.Now.AddMonths(-6),
                    Description = "Activity 2 months ago",
                    ExpenseType = "food",
                    Amount = 12.99,
                },
            };

            if (context.TotalExpenses.Any()) return;

            var totalExpenses = new List<TotalExpense>
            {
                new TotalExpense
                {
                     Utility = 50, 
                     School = 1245,
                     Hobby = 283,
                     Transport = 193,
                     Food = 379
        
     
    }   
            };

            if (context.TotalIncomes.Any()) return;

            var totalIncomes = new List<Income>
            {
                new Income
                {
                    IncomeType = "Freelance",
                    Amount = 1230,
                }
            };

await context.Expenses.AddRangeAsync(expenses);
await context.TotalExpenses.AddRangeAsync(totalExpenses);
await context.SaveChangesAsync();
        }
    }
}