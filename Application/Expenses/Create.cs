using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistance;

namespace Application.Expenses
{
    public class Create
    {
        public class Command : IRequest
        {
            public Expense Expense { get; set; }

        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Expenses.Add(request.Expense);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}