import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Example1 {
    public static void main(String[] args) {
        Pattern p = Pattern.compile("dog",Pattern.CASE_INSENSITIVE);
        //Regular expression
        Matcher m = p.matcher("'Let the dog come out of the bag'.To disclose a secret(Dog)**");
        // Creating the target string buffer
        StringBuffer sb = new StringBuffer();
        while (m.find()) {
            m.appendReplacement(sb, "cat");//calling method System.out.println(sb.toString());
        }
        m.appendTail(sb);
        System.out.println(sb.toString());
    }
}