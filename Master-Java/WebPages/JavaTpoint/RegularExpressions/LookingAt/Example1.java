import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

// Source code: https://medium.com/stackera/java-regex-part-5-matches-lookingat-find-8033fa9cdebc

public class Example1 {
    public static void main(String[] args) {
        boolean flag;
        Scanner sc = new Scanner(System.in);
        Pattern pattern;
        Matcher matcher;
        do {
            String namePatter = "David";
            pattern = Pattern.compile(namePatter);

            System.out.println("Enter your name: ");
            String name = sc.nextLine();
            matcher = pattern.matcher(name);

            flag = matcher.lookingAt();
            if(!flag)
                System.out.println("Invalid Input!");
        }while (!flag);
        System.out.println("Valid input");
    }
}
