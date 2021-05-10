using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Expenses;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class TotalExpenseController : BaseApiController
    {
        [HttpGet]
         public async Task<ActionResult<List<TotalExpense>>> GetTotalExpenses()
         {
            return await Mediator.Send(new TotalAmount.Query());

         }
    }
}