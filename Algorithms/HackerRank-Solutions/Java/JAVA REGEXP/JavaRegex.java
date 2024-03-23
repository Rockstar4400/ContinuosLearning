//import java.util.regex.Matcher;
//import java.util.regex.Pattern;
import java.util.Scanner;

public class JavaRegex {

    static boolean checkRegexp(String IP){
        boolean result = false;

        if(IP.matches("(\\d{1,3}\\.){3}\\d{1,3}")){
            String[] number = IP.split("\\.", 4);
            for(var x=0;x < number.length;x++){
                if(Integer.parseInt(number[x]) >= 0 
                && Integer.parseInt(number[x]) <= 255){
                    result = true;
                    continue;
                }else{
                    result = false;
                    break;
                }
            }
        }

        return result;
    }

    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);
        while(scan.hasNext()){
            String IP = scan.next();
            System.out.println(checkRegexp(IP));
        }
        scan.close();
    }
}