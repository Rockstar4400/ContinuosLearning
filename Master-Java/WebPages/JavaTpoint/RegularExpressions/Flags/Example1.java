import java.util.regex.Pattern;

public class Example1 {
    public static void main(String[] args) {
        String REGEX = "(.*)(for)(.*)?";
        String actualString = "code of Machine";

        Pattern pattern = Pattern.compile(REGEX, Pattern.CASE_INSENSITIVE);

        int flag = pattern.flags();
        System.out.println("Pattern's match flag = " + flag);
    }
}
