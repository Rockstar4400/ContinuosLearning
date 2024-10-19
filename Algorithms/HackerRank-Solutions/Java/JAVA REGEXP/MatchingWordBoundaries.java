
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class MatchingWordBoundaries {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Pattern pt = Pattern.compile("\\b[a-zA-Z]+\\b");
        Matcher mt = pt.matcher(sc.nextLine());
        System.out.println(mt.find());
    }
}
