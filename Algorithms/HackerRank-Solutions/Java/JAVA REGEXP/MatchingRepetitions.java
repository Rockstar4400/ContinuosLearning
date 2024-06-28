import java.util.regex.Pattern;
import java.util.regex.Matcher;
import java.util.Scanner;
public class MatchingRepetitions {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Pattern pa = Pattern.compile("^[a-zA-Z02468]{0,40}[93571\\s]{5,5}$");
        Matcher ma = pa.matcher(sc.nextLine());
        System.out.println(ma.find());
    }
}
