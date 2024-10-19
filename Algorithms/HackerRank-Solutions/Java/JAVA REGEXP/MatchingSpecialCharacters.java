import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class MatchingSpecialCharacters {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Pattern pat = Pattern.compile("^[123]{1}+[120]{1}+[xs0]{1}+[30aA]{1}+[xsu]{1}+[\\.\\,]{1}$");
        Matcher mat = pat.matcher(sc.nextLine());
        System.out.println(mat.find());
    }
}
//123120xs030Aaxsu., false