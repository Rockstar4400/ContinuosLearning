import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Example1 {
    public static void main(String[] args) {
        Pattern pattern;
        Matcher matcher;
        String text = "I love you so much! However, I cannot marry you because you are not a human!";
        String searchString = "not";
        pattern = Pattern.compile(searchString, Pattern.CASE_INSENSITIVE);
        matcher = pattern.matcher(text);
        int count = 0;
        while (matcher.find()) {
            count++;
        }
        System.out.println("The word was found: " + count + " times");

    }
}
