
import java.util.Comparator;
import java.util.stream.*;

/*

    LEVEL 12 - LONGESTWORD

    Help source: 
    https://stackoverflow.com/questions/26725296/finding-the-longest-string-in-an-array-of-strings
    https://www.guru99.com/java-string-replace-method.html

    Define a word as a sequence of consecutive English letters.
     Find the longest word from the given string.

    Example

    For text = "Ready, steady, go!", the output should be
    solution(text) = "steady".

    Input/Output

    [execution time limit] 3 seconds (java)

    [input] string text

    Guaranteed constraints:
    4 ≤ text.length ≤ 50.

    [output] string

    The longest word from text. It's guaranteed that there 
    is a unique output. 

  */

  class longestword {

    public static String longestDigitsMethod (String text) {
      String rChar = text.replaceAll( "[^a-zA-Z\\s.]", " ");
      String[] splited = rChar.split("\\s+");

      String longest = Stream.of(splited)
      .max(Comparator.comparingInt(String::length)).get();

      return longest;
    }
    public static void main(String[] args) {

        System.out.println(longestDigitsMethod("Ready, steady, go!"));
        System.out.println(longestDigitsMethod("Ready[[[, steady, go"));
        System.out.println(longestDigitsMethod("ABCd"));
        System.out.println(longestDigitsMethod("To be or not to be"));
        System.out.println(longestDigitsMethod("You are the best!!!!!!!!!!!! CodeFighter ever!"));

        System.out.println(longestDigitsMethod("To be_asdas or not to be123")); // not
    }
  }