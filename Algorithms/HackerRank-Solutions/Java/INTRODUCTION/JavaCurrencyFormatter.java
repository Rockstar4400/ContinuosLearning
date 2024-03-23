
/*

Java Currency Formatter

Source help:
https://howtodoinjava.com/java/date-time/location-based-currency-formatting-in-java/
https://stackoverflow.com/questions/2544454/get-the-currency-format-for-a-country-that-does-not-have-a-locale-constant

Another:
https://phrase.com/blog/posts/internationalization-with-java-locale/
http://kirste.userpage.fu-berlin.de/diverse/doc/ISO_3166.html
https://www.baeldung.com/java-8-localization




Given a double-precision number, , denoting an amount of money, use the NumberFormat class'
getCurrencyInstance method to convert  into the US, Indian, Chinese, and French currency formats.
Then print the formatted values as follows:

US: formattedPayment
India: formattedPayment
China: formattedPayment
France: formattedPayment
where  is  formatted according to the appropriate Locale's currency.

Note: India does not have a built-in Locale, so you must construct one where the language
is en (i.e., English).

Input Format

A single double-precision number denoting .

Constraints

Output Format

On the first line, print US: u where  is  formatted for US currency.
On the second line, print India: i where  is  formatted for Indian currency.
On the third line, print China: c where  is  formatted for Chinese currency.
On the fourth line, print France: f, where  is  formatted for French currency.

Sample Input

12324.134
Sample Output

US: $12,324.13
India: Rs.12,324.13
China: ￥12,324.13
France: 12 324,13 €
Explanation

Each line contains the value of  formatted according to the four countries' respective currencies.


*/

import java.util.*;
import java.text.*;
import java.util.Locale;


public class JavaCurrencyFormatter {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double payment = scanner.nextDouble();
        scanner.close();

        Locale usLocale = Locale.US;
        NumberFormat usCurrency = NumberFormat.getCurrencyInstance(usLocale);
        String us = usCurrency.format(payment);

        NumberFormat formatter = NumberFormat.getCurrencyInstance(new Locale("en", "IN"));
        String india = formatter.format(payment);

        Locale chinaLocale = Locale.CHINA;
        NumberFormat chinaCurrency = NumberFormat.getCurrencyInstance(chinaLocale);
        String china = chinaCurrency.format(payment);

        Locale franceLocale = Locale.FRANCE;
        NumberFormat franceCurrency = NumberFormat.getCurrencyInstance(franceLocale);
        String france = franceCurrency.format(payment);


        System.out.println("US: " + us);
        System.out.println("India: " + india);
        System.out.println("China: " + china);
        System.out.println("France: " + france);
    }
}
