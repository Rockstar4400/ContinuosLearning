/*
 
Two strings, a and b , are called anagrams if they contain all the same characters
 in the same frequencies. For this challenge, the test is not case-sensitive. 
 For example, the anagrams of CAT are CAT, ACT, tac, TCA, aTC, and CtA.

Function Description

Complete the isAnagram function in the editor.

isAnagram has the following parameters:

string a: the first string
string b: the second string
Returns

boolean: If  and  are case-insensitive anagrams, return true. Otherwise, 
return false.

*/

import java.util.Arrays;
import java.util.Scanner;

public class JavaAnagram {

    static boolean isAnagram(String a, String b) {

        boolean result = false;
        if(a.length() == b.length()){
            char order1[] = a.toLowerCase().toCharArray();
            char order2[] = b.toLowerCase().toCharArray();
            Arrays.sort(order1);
            Arrays.sort(order2);

            for(var x = 0; x < a.length(); x++){
                
                if(order1[x] == order2[x]){
                    result = true;
                    continue;
                }
                else{
                    result = false;
                    break;
                }
            }
        }
        return result;
    }

    public static void main(String[] args) {
    
        Scanner scan = new Scanner(System.in);
        String a = scan.next();
        String b = scan.next();
        scan.close();
        boolean ret = isAnagram(a, b);
        System.out.println( (ret) ? "Anagrams" : "Not Anagrams" );
    }
}