using System;

namespace Domain
{
    public class TotalExpense
    {
        public Guid Id { get; set; }
        public double Utility { get; set; }
        public double School { get; set; }     
        public double Hobby { get; set; }
        public double Transport { get; set; }
        public double Food { get; set; }
        public double Total => (Utility + School + Hobby + Transport + Food);
              
    }
}