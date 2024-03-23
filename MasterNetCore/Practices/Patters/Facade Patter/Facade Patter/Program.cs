using Facade_Patter;
public class Program

    // Source: https://www.dofactory.com/net/facade-design-pattern
{
    public static void Main(string[] args)
    {
        Mortgage mortgage = new Mortgage();

        Customer customer = new Customer("Ann Mckinsey");
        bool elegible = mortgage.IsElegible(customer, 125000);

        Console.WriteLine("\n" + customer.Name + " has been "
            + (elegible ? "Approved" : "Rejected"));

        Console.ReadKey();
    }

}
