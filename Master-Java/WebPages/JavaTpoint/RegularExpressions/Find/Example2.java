import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Example2 {
    public static void main(String[] args) {
        Pattern pattern;
        Matcher matcher;
        String text = "I love you 34 so much! However, 24 I cannot marry 45 you because 4 you are not a human!";
        String searchString = "\\d";
        pattern = Pattern.compile(searchString, Pattern.CASE_INSENSITIVE);
        matcher = pattern.matcher(text);
        int count = 0;
        while (matcher.find()) {
            count++;
        }
        System.out.println("Found: " + count + " times");
    }
}
