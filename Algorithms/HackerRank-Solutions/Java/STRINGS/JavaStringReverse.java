/*
* HACKRANK - JAVA - STRINGS - REVERSE
*
* Source:
* https://www.hackerrank.com/challenges/java-string-reverse/problem
*
* A palindrome is a word, phrase, number, or other sequence of characters which reads the same
* backward or forward.(Wikipedia)
*
Given a string A, print Yes if it is a palindrome, print No otherwise.

Constraints

A will consist at most 50 lower case english letters.
Sample Input

madam

Sample Output

Yes

*/
import java.util.*;
public class JavaStringReverse {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in); // Constructor of Scanner
        String A = sc.next(); // Input A

        for(int i = 0;i < A.length()/2;i++){ // Loop until middle of string
            if(A.charAt(i) != A.charAt(A.length() - i - 1)){ // Condition
                System.out.println("No");// Print No and exit
                System.exit(0);
            }
        }
        System.out.println("Yes"); // otherwise print Yes
        sc.close();
    }
}
