

import java.lang.FunctionalInterface;

@FunctionalInterface
interface MyInterface{
    double getPiValue();
}

public class LambdaExpression {
    public static void main(String[] args) {
        MyInterface myI;

        myI = () -> 3.1415;

        System.out.println(myI.getPiValue());
    }
}