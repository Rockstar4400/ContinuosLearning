
/*
HackerRank: Introduction - Java If-Else

In this challenge, we test your knowledge of using if-else conditional statement to automate
decision-making processes.An if-else statement has the following logical flow:

	IF (A = TRUE)
	THEN B
	ELSE C
	END IF
Task:

Given an integer,n,perform the following conditional actions:

-If n is i odd, print Weirf
-If n is even and in the inclusive range 2 to 5, print Not Weird
-If n is even and in the inclusive range of 6 to 20,print Weird
-If n is even and greater than 20,print Not Weird

Complete the stub code provided in your editor to print whether or not n is weird.

Input Format:
A single line containing a positive integer,n.

Constrains:
1 <= n <= 100

Output Format:
Print Weird if the number is weird; otherwise,print Not Weird.

Sample input 1
3

Sample output 1
Weird

Sample input 2
24

Sample output 2
Not Weird

Examplanation:

Sample Case 1: n = 3
n is odd and odd numbers are weird, so we print Weird.

Sample case 1: n = 24
n > 20 and n is even, so it isn't weird. Thus, we print Not Weird.
*/
import java.util.*;

public class JavaIfElse {
    
   public static void main(String[] args) {
    	
	Scanner sc = new Scanner (System.in);
	int n = sc.nextInt();
	String ans = "";
	if(n % 2 == 1){
		ans = "Weird";
		}
		else if(n >= 6 && n <= 20){
			ans = "Weird";
		}
			else if(n >= 2 || n <= 5){
					ans = "Not Weird";
				}
					else if(n > 20){
						ans = "Not Weird";
					}
						else if( n % 2 == 0){
							ans = "Not Weird";
			}
			System.out.println(ans);
            sc.close();
		}	
        
    }
    
    
/*Other Solutions

Setter:

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        try{
        BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
        int N=Integer.parseInt(br.readLine().trim());
        if(N<1||N>100)
            throw new Exception();
        if((N&1)==1)
        {
            System.out.println("Weird");
        }
        else
        {
            if(N>=2&&N<=5)
            {
                System.out.println("Not Weird");
            }
            else if(N>=6&&N<=20)
            {
                System.out.println("Weird");
            }
            else
            {
                System.out.println("Not Weird");
            }
        }
        }
        catch(Exception e)
        {
            e.printStackTrace();
        }
    }
}

Tester:
import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {

        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();            
        String ans;
        if(n%2==1)ans = "Weird";
        else
        {
            if(n>=2 && n<=5)ans = "Not Weird";
            else if(n>=5 && n<=20)ans="Weird";
            else ans = "Not Weird";
        }
        System.out.println(ans);

    }
}
*/