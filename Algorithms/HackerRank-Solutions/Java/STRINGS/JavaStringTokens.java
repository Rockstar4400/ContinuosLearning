
/*


Given a string, s , matching the regular expression [A-Za-z !,?._'@]+, split the string into tokens. We define a token to be one or more consecutive English alphabetic letters. Then, print the number of tokens, followed by each token on a new line.

Note: You may find the String.split method helpful in completing this challenge.

Input Format

A single string, s.

Sample Input

He is a very very good boy, isn't he?
Sample Output

10
He
is
a
very
very
good
boy
isn
t
he

We consider a token to be a contiguous segment of alphabetic characters.
There are a total of  such tokens in string ,
and each token is printed in the same order in which it appears in string .
*/

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.regex.Pattern;

public class JavaStringTokens {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Pattern pattern = Pattern.compile("[\\W\\_]+");
        String[] results = pattern.split(sc.nextLine());

        List<String> list = new ArrayList<String>(Arrays.asList(results));
        list.removeAll(Arrays.asList("", null));

        System.out.println(list.size());
        for (String result:list) {
            System.out.println(result);
        }
    }
}
//He is a very very good boy, isn't he?
// 10

//Hello, thanks for_ attempting@ this. problem! Hope it will help you to learn java@ Good luck and have a nice day?

//            YES      leading spaces        are valid,    problemsetters are         evillllll
// 8