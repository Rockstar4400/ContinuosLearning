import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Example1 {
    public static void main(String[] args) {
        Pattern p = Pattern.compile("[1-9]+");
        //Regular expression
        Matcher m = p.matcher("131Hello232word7876");
        // Creating the target string buffer
        StringBuffer sb = new StringBuffer();
        while (m.find()) {
            m.appendReplacement(sb, "-");//calling method
            System.out.println("Start :  "+m.start()+" End : "+m.end());
        }
        m.appendTail(sb);
        System.out.println(sb.toString());
    }
}
