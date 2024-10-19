import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Example1 {
    public static void main(String[] args) {
        String REGEX = "(Geeks)";

        Pattern pattern = Pattern.compile(REGEX);
        String STR = "GeeksForGeeks Geeks for For Geeks Geek";

        Matcher matcher = pattern.matcher(STR);

        System.out.println("Does this matcher has transparent bounds"
                + matcher.hasTransparentBounds());
    }
}
