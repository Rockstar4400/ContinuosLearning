import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class JavaAlternation {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Pattern pat = Pattern.compile("^(Mr\\.|Mrs\\.|Ms\\.|Dr\\.|Er\\.)[a-zA-Z]+[a-zA-Z]$");
        Matcher mat = pat.matcher(sc.nextLine());
        System.out.println(mat.find());
    }
}
