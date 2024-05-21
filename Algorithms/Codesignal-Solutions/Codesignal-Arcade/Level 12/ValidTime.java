
/*
*
* Code signals - Arcade - 53. Valid Time
*
* Check if the given string is a correct time representation of the 24-hour clock.
*
*
Example

For time = "13:58", the output should be
solution(time) = true;
For time = "25:51", the output should be
solution(time) = false;
For time = "02:76", the output should be
solution(time) = false.

*/

import java.util.ArrayList;
import java.util.Iterator;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class ValidTime {

    public static boolean solution(String time) {

        Integer x = 0;
        Integer y = 0;
        String r1 = "^\\d{2}";
        String r2 = "\\d{2}$";
        Pattern p1 = Pattern.compile(r1);
        Pattern p2 = Pattern.compile(r2);
        ArrayList l1 = new ArrayList();
        ArrayList l2 = new ArrayList();

        Matcher m1 = p1.matcher(time);
        while (m1.find()) {
            l1.add(m1.group());
        }
        Iterator it1 = l1.iterator();
        while(it1.hasNext()){
            x = Integer.parseInt((String) it1.next());
            //System.out.println(x);
        }
        Matcher m2 = p2.matcher(time);
        while (m2.find()) {
            l2.add(m2.group());
        }
        Iterator it2 = l2.iterator();

        while(it2.hasNext()){
            y = Integer.parseInt((String) it2.next());
            //System.out.println(y);
        }

        if(x <= 23 && y <= 59)
            return true;
        else
        return false;
    }


    public static void main(String[] args) {
        System.out.println(solution("13:58")); // True
        System.out.println(solution("25:51")); // False
        System.out.println(solution("02:76")); // False
        System.out.println(solution("24:00")); // False
        System.out.println(solution("00:60")); // True
    }
}
