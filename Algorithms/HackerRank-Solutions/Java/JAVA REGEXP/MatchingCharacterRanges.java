import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
public class MatchingCharacterRanges {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Pattern pt = Pattern.compile("^[a-z][1-9][^a-z][^A-Z][A-Z].?");
        Matcher mt = pt.matcher(sc.nextLine());
        System.out.println(mt.find());
    }
}
