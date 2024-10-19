import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class MatchOneOrMore {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Pattern ma = Pattern.compile("^[0-9]+[A-Z]+[a-z]+$");
        Matcher pa = ma.matcher(sc.nextLine());
        System.out.println(pa.find());
    }
}
//123QWRasd = true