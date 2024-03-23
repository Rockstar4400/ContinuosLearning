
/*

Source help:
https://www.programiz.com/java-programming/library/string/compareto


We define the following terms:

Lexicographical Order, also known as alphabetic or dictionary order,
orders characters as follows:
For example, ball < cat, dog < dorm, Happy < happy, Zoo < ball.

A substring of a string is a contiguous block of characters in the string.
For example, the substrings of abc are a, b, c, ab, bc, and abc.
Given a string, , and an integer, ,
 complete the function so that it finds the lexicographically smallest
 and largest substrings of length .

Input Format

The first line contains a string denoting .
The second line contains an integer denoting .

Constraints

 consists of English alphabetic letters only (i.e., [a-zA-Z]).
Output Format

Return the respective lexicographically smallest and largest
substrings as a single newline-separated string.

Sample Input 0

welcometojava
3
Sample Output 0

ava = 97 + 118 + 97 = 312
wel = 119 + 101 + 108 = 328

met = 109 + 101 + 116 = 326
Explanation 0

String  has the following lexicographically-ordered substrings of length :

We then return the first (lexicographically smallest) substring
and the last (lexicographically largest) substring as two newline-separated
values (i.e., ava\nwel).

The stub code in the editor then prints ava as our first line of output
and wel as our second line of output.
*/

import java.util.Scanner;

public class JavaSubstringComparisons {

    public static String getSmallestAndLargest(String s, int k) {
        String smallest = "";
        String largest = "";
        String[] DiffStrings = new String[1000];
        int inc = 0;

        for (int x = 0; x < s.length() + 1 - k ; x++) {
            String sb = s.substring(x, x + k);
            for (String com : DiffStrings) {
                if (!sb.equals(com)) {
                    DiffStrings[inc] = sb;
                    inc++;
                    break;
                }
            }
        }

        smallest = DiffStrings[0];
        for (int i = 0; i < DiffStrings.length-1; i++) {
            if(DiffStrings[i] != null) {
                String small = DiffStrings[i];
                if (smallest.compareTo(small) > 0) {
                    smallest = small;
                }
            }
        }

        largest = DiffStrings[0];
        for (int i = 0; i < DiffStrings.length-1; i++) {
            if(DiffStrings[i] != null) {
                String small = DiffStrings[i];
                if (largest.compareTo(small) < 0) {
                    largest = small;
                }
            }
        }

        return smallest + "\n" + largest;
    }


    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String s = scan.next();
        int k = scan.nextInt();
        scan.close();

        System.out.println(getSmallestAndLargest(s, k));
    }
}
