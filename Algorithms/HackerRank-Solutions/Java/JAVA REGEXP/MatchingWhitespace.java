import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class MatchingWhitespace {
    public static void main(String[] args) {
        boolean flag;
        Scanner sc = new Scanner(System.in);
        Pattern pattern;
        Matcher matcher;

        do {
            String REGEXP = "\\S{2,3}\\s\\S{2}\\s\\S{2}";
            pattern = Pattern.compile(REGEXP);
            matcher = pattern.matcher(sc.nextLine());

            flag = matcher.lookingAt();
            if(!flag)
                System.out.println(matcher.lookingAt());
        }while (!flag);
        System.out.println(matcher.lookingAt());
    }
}
//12 11 15 true
//12 12	1ee true
//122 23 56 true
//123 123 123 false