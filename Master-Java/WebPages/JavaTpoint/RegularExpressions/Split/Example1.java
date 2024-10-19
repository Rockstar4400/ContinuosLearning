import java.util.regex.Pattern;

public class Example1 {
    public static void main(String[] args) {
        String REGEXP = ":";
        String INPUT = "boo:and:foo";
        Pattern pattern = Pattern.compile(REGEXP);
        String[] results = pattern.split(INPUT);

        for(String result:results){
            System.out.println(result);
        }
    }
}
