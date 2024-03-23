 
/*

HackerRank: Introduction - Java output formatting

Source help:
http://alvinalexander.com/programming/printf-format-cheat-sheet

Java's System.out.printf function can be used to print formatted output.
The purpose of this exercise is to test your understanding of formatting output using printf.

To get you started,a position of the solution is porvided for you in the editor;
you must format and print the input to complete the solution.

Input Format:

Every line of input will contain a String followed by an integer.
Each String will have a maximun of 10 alphabetic characters,and each integer will be in the
inclusive range from 0 to 999.

Output Format:

In each line of output there should be two columns:
The first column contains the String and is left justifies using exactly 15 characters.
The second column contains the integer, expressed in exactly 3 digits; if the original input has
less than three digits, you must pad your output's leading digits with zeroes.

Sample Input:

java 100
cpp 65
python 50

Sample Output:

================================
java           100 
cpp            065 
python         050 
================================

Explanation:

Each String is left-justified with trailing whitespace through the first 15
characters. The leading digit of the integer is the 16th character, and each
integer that was less than 3 digits now has leading zeroes.


*/ 
import java.util.Scanner; 
 
public class HRINTRODUCTIONJAVAOUTPUTFORMATTING {
    
    public static void main(String[] args) {
    	
    	Scanner sc = new Scanner(System.in);
    	System.out.println("================================");
    	for (int i = 0;i < 3;i++){
    		
    		String s1 = sc.next();
    		int x = sc.nextInt();
    		
    		System.out.printf("%-15s",s1);
    		System.out.printf("%03d",x);
    		System.out.printf("\n");
    		}
    		System.out.println("================================");
		sc.close();
    }
}
/*
 
A summary of printf format specifiers
Here�s a quick summary of the available printf format specifiers:

%c	character
%d	decimal (integer) number (base 10)
%e	exponential floating-point number
%f	floating-point number
%i	integer (base 10)
%o	octal number (base 8)
%s	a string of characters
%u	unsigned decimal (integer) number
%x	number in hexadecimal (base 16)
%%	print a percent sign
\%	print a percent sign

*/