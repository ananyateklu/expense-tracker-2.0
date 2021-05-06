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
            return await Mediator.Send(new details.Query{Id = id});
        }


    }
}