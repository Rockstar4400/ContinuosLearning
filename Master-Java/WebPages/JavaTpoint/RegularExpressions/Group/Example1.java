import java.util.regex.Matcher;
import java.util.regex.Pattern;

// Source code: https://medium.com/stackera/java-regex-part-6-group-and-subgroup-2985dc2d42d4

public class Example1 {
    public static void main(String[] args) {
        Pattern pattern;
        Matcher matcher;
        String searchString;
        String text;
        text = "Monday 12-9-2013";
        searchString = "((\\w+) \\d{1,2})-(\\d{1,2})-(\\d{4})";
        pattern = Pattern.compile(searchString, Pattern.CASE_INSENSITIVE);
        matcher = pattern.matcher(text);

        while (matcher.find()){
            System.out.println("group 0: " + matcher.group(0));

            System.out.println("group 1: " + matcher.group(1));
            System.out.println("group 2: " + matcher.group(2));
            System.out.println("group 3: " + matcher.group(3));
            System.out.println("group 4: " + matcher.group(4));
        }
    }
}
