import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class MatchingStartAndEnd {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Pattern pattern = Pattern.compile("^\\d{1}\\w{4}\\.$");
        Matcher matcher = pattern.matcher(sc.nextLine());
        System.out.println(matcher.find());
    }
}
//10aaaa. false