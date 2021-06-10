namespace RS.Properties.Api.Models
{
    public class Property
    {
        public int Id { get; set; }

        public int YearBuilt { get; set; }

        public decimal ListPrice { get; set; }

        public decimal MonthlyRent { get; set; }

        public float Gross { get; private set; }

        public Property()
        {

        }

        private void CalculateGrossYield() => Gross = 12 * MonthlyRent / ListPrice;
    }
}