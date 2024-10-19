import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class ExcludingSpecificCharacter {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        Pattern pat = Pattern.compile("^[^\\d]{1}+[^aeiou]{1}+[^bcDF]{1}+[^\\r\\n\\t\\f\\s]{1}+[^AEIOU]{1}+[^\\.\\,]{1}$");
        Matcher mat = pat.matcher(sc.nextLine());
        //^[^\d]{1}+[^a-z]{1}+[^bcDF]{1}+[^\w]{1}+[^A-Z]{1}+[^\.\,]{1}+$

        System.out.println(mat.find());
    }
}
