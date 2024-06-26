import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Example1 {
    public static void main(String[] args) {
        boolean flag;
        Scanner sc = new Scanner(System.in);
        Pattern pattern;
        Matcher matcher;
        do {
            String namePattern = "[a-zA-Z\\s]+";
            pattern = Pattern.compile(namePattern);

            System.out.print("Enter next name: ");
            String name = sc.nextLine();
            matcher = pattern.matcher(name);

            flag = matcher.matches();
            if(!flag)
                System.out.println("Invalid Input!");
        }while (!flag);
            System.out.println("Valid input");
    }
}
