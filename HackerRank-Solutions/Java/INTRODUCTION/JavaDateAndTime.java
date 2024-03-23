/*

Java Date and Time

Source Help:
https://www.tutorialspoint.com/java/util/calendar_setfield4.htm

The Calendar class is an abstract class that provides methods for converting between a specific
instant in time and a set of calendar fields such as YEAR, MONTH, DAY_OF_MONTH, HOUR, and so on,
and for manipulating the calendar fields, such as getting the date of the next week.

You are given a date. You just need to write the method, , which returns the day on that date.
To simplify your task, we have provided a portion of the code in the editor.

For example, if you are given the date , the method should return  as the day on that date.

image

Input Format

A single line of input containing the space separated month, day and year, respectively, in    format.

Constraints

Output Format

Output the correct day in capital letters.

Sample Input

08 05 2015
Sample Output

WEDNESDAY
Explanation

The day on August th  was WEDNESDAY.
*/


import java.io.*;
import java.text.*;
import java.util.*;

class Result {

    public static String findDay(int month, int day, int year) {

        SimpleDateFormat formatter = new SimpleDateFormat("EEEEEE");

        Calendar calendar = Calendar.getInstance();
        calendar.set(year, month-1, day);
        Date date = calendar.getTime();

        String formatted = formatter.format(date);
        return  formatted.toUpperCase();
    }

}

public class JavaDateAndTime {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader =
                new BufferedReader(new InputStreamReader(System.in));
        //BufferedWriter bufferedWriter =
                //new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));


        String[] firstMultipleInput =
                bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");

        int month = Integer.parseInt(firstMultipleInput[0]);
        int day = Integer.parseInt(firstMultipleInput[1]);
        int year = Integer.parseInt(firstMultipleInput[2]);

        String res = Result.findDay(month, day, year);

        //bufferedWriter.write(res);
        //bufferedWriter.newLine();
        System.out.println(res);
        bufferedReader.close();
        //bufferedWriter.close();
    }
}

