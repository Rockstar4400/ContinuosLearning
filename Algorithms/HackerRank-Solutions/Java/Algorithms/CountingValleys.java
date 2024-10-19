import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class CountingValleys {
    public static int countingValleys(int steps, String path) {
        int value = 0;
        int count = 0;
        int valley = 0;

        for (int i = 0; i < steps; i++){

            if (path.charAt(i) == 'D'){
                count--;
            }
            else{
                count++;
            }

            value = count < 0 ? -1 : count > 0 ? 1 : value;

            if (count == 0 && value < 0){
                valley++;
                value = 0;
            }
        }
        return valley;
    }

    public static void main(String[] args) {
        System.out.println(countingValleys(8, "UDDDUDUU"));//1
        System.out.println(countingValleys(12, "DDUUDDUDUUUD"));//2
        System.out.println(countingValleys(10,"DDUDDUUDUU")); // 1
    }
}




