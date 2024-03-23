namespace DemoLibrary
{
    public class CEO: Employee
    {
        public override void CalculatePerHourRate(int rank)
        {
            decimal baseAmount = 150M;
            Salary = baseAmount * rank;
        }

        public override void AssignManager(Employee manager)
        {
            throw new InvalidCastException("CEO has no manager");
        }

        public void GeneratePerformaceReview()
        {
            Console.WriteLine("Reciving Report");
        }

        public void FireSomeone()
        {
            Console.WriteLine("Fired!");
        }
    }
}