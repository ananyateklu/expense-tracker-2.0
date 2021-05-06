using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Expenses;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistance;

namespace API.Controllers
{
    public class ExpensesController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Expense>>> GetExpenses()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Expense>> GetExpense(Guid id)
        {
            return await Mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost]
        public async Task<ActionResult> CreateExpense(Expense expense)
        {
            return Ok(await Mediator.Send(new Create.Command {Expense = expense}));
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> EditExpense(Guid id, Expense expense)
        {
            expense.Id = id;
            return Ok(await Mediator.Send(new Edit.Command{Expense = expense}));
        }

        [HttpDelete("{id}")]

        public async Task<ActionResult> DeleteExpense(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command{Id = id}));
        }

    }
}