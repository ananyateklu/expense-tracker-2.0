using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistance;

namespace Application.Expenses
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }


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
                var expense = await _context.Expenses.FindAsync(request.Id);

                _context.Remove(expense);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }

    }
}