
import static org.junit.Assert.*;
import org.junit.Test;

public class DonutShopTest {

  @Test
  public void testBuyCoffee() {
    CreditCard crediCard = new CreditCard();
    DonutShop.buyDonut(crediCard);
    DonutShop.buyDonut(crediCard);
    assertEquals(Donut.price * 2, 4);
  }

}
