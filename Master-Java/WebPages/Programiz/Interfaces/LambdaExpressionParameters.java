
import java.lang.FunctionalInterface;

@FunctionalInterface
interface MyInterface2{
    String reverse(String n);
}

public class LambdaExpressionParameters {
    public static void main(String[] args) {
        
        MyInterface2 ref = (str) -> {
            String result = "";
            for (int i = str.length()-1; i >= 0 ; i--)
            result += str.charAt(i);
            return result;
        };

        System.out.println(ref.reverse("Lambda"));
    }
}