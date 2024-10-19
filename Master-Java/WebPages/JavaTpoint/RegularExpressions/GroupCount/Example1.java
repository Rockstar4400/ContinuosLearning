import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Example1 {
    public static void main(String[] args) {
        String REGEX = "(a*b)(foo)";
        String INPUT = "aabfooaabfooabfoob";

        Pattern pattern =  Pattern.compile(REGEX);

        Matcher matcher = pattern.matcher(INPUT);

        if(matcher.find()){
            System.out.println("Group Count: " + matcher.groupCount());
        }
    }
}
