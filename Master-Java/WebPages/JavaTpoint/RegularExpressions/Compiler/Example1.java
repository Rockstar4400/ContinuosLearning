import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Example1 {
    public static void main(String[] args) {
        String REGEX = ".*www.*";
        String actualString = "www.geeksforgeeks.org";

        Pattern pattern = Pattern.compile(REGEX);
        Matcher matcher = pattern.matcher(actualString);

        boolean matches = matcher.matches();

        System.out.println("actualString contains REGEX = " +  matches);
    }
}
