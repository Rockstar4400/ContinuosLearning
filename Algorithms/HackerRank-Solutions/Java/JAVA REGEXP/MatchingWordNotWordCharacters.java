import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class MatchingWordNotWordCharacters {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Pattern pattern = Pattern.compile("\\w{3}[\\W]+\\w{10}[\\W]+\\w{3}");
        Matcher matcher = pattern.matcher(sc.nextLine());

        System.out.println(matcher.find());

    }
}
