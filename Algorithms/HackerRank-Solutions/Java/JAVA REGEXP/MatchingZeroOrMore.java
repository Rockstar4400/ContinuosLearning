import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class MatchingZeroOrMore {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Pattern pa = Pattern.compile("^[\\d]{2,}[a-z]*[A-Z]*$");
        Matcher ma = pa.matcher(sc.nextLine());
        System.out.println(ma.find());
    }
}
