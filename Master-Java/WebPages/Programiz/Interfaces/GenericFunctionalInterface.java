
import java.lang.FunctionalInterface;

@FunctionalInterface
interface GenericInterface<T>{
    T func(T t);
}

public class GenericFunctionalInterface {
    public static void main(String[] args) {
        
        GenericInterface<String> reverse =
        (str) -> {

            String result = "";
            for (int i = str.length()-1; i >= 0; i--)
            result += str.charAt(i);
            return result;
        };

        System.out.println(reverse.func("Lambda"));

    }
}
