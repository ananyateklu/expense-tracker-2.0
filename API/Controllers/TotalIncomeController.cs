using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Expenses;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class TotalIncomeController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Income>>> GetTotalIncomes()
         {
             return await Mediator.Send(new TotalIncome.Query());
         }
    }
}