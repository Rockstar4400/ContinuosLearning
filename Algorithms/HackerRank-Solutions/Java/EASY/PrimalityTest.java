
/*
A prime number is a natural number greater than  
whose only positive divisors are  and itself. For example,
 the first six prime numbers are , , , , , and .

Given a large integer, , use the Java BigInteger class'
isProbablePrime method to determine and print whether it's prime or not prime.

Input Format

A single line containing an integer,  (the number to be checked).

Constraints

 contains at most  digits.
 */

import java.io.*;
import java.math.BigInteger;

public class PrimalityTest {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        String n = bufferedReader.readLine();
        
        System.out.println(new BigInteger(n).isProbablePrime(1) ? "prime" : "not prime");
        bufferedReader.close();
    }
}
