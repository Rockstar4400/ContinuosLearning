using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Facade_Patter
{
    public class Mortgage
    {
        Bank bank = new Bank();
        Loan loan = new Loan();
        Credit credit = new Credit();

        public bool IsElegible(Customer cust, int amount)
        {
            Console.WriteLine("{0} applies for {1:C} loan\n",
                cust.Name, amount);

            bool elegible = true;

            if(!bank.HasSufficientSavings(cust, amount))
            {
                elegible = false;
            }
            else if (!loan.HasNoBadLoans(cust))
            {
                elegible = false;
            }
            else if (!credit.HasGoodCredit(cust))
            {
                elegible = false;
            }

            return elegible;
        }
    }
}
