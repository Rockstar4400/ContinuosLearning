
/*
Sam's house has an apple tree and an orange tree that yield 
an abundance of fruit. 
Using the information given below, determine the number 
of apples and oranges that land on Sam's house.

In the diagram below:

The red region denotes the house, where  
is the start point, and  is the endpoint. 
The apple tree is to the left of the house, and the orange 
tree is to its right.
Assume the trees are located on a single point, where the 
apple tree is at point , and the orange tree is at point .
When a fruit falls from its tree, it lands  units of distance 
from its tree of origin along the -axis. *A negative value of 
means the fruit fell  units to the tree's left, and a positive 
value of  means it falls  units to the tree's right. *
Apple and orange(2).png

Given the value of  for  apples and  oranges, determine how 
many apples and oranges will fall on Sam's house (i.e., in the 
inclusive range )?

For example, Sam's house is between  and . The apple tree is 
located at  and the orange at . There are  apples and  
oranges. Apples are thrown  units distance from , and  
units distance. Adding each apple distance to the position 
of the tree, they land at . Oranges land at . One apple and 
two oranges land in the inclusive range  so we print

1
2
Function Description

Complete the countApplesAndOranges function in the editor 
below. It should print the number of apples and oranges that
 land on Sam's house, each on a separate line.

countApplesAndOranges has the following parameter(s):

s: integer, starting point of Sam's house location.
t: integer, ending location of Sam's house location.
a: integer, location of the Apple tree.
b: integer, location of the Orange tree.
apples: integer array, distances at which each apple falls
 from the tree.
oranges: integer array, distances at which each orange falls
 from the tree.
Input Format

The first line contains two space-separated integers denoting 
the respective values of  and .
The second line contains two space-separated integers denoting
 the respective values of  and .
The third line contains two space-separated integers denoting
 the respective values of  and .
The fourth line contains  space-separated integers denoting 
the respective distances that each apple falls from point .
The fifth line contains  space-separated integers denoting
 the respective distances that each orange falls from point .
 */

import java.io.*;
import java.util.*;
import java.util.stream.*;
import static java.util.stream.Collectors.toList;

class Result {

    /*
     * Complete the 'countApplesAndOranges' function below.
     *
     * The function accepts following parameters:
     *  1. INTEGER s
     *  2. INTEGER t
     *  3. INTEGER a
     *  4. INTEGER b
     *  5. INTEGER_ARRAY apples
     *  6. INTEGER_ARRAY oranges
     */

    public static void countApplesAndOranges(int s, int t, int a, int b, 
    List<Integer> apples, List<Integer> oranges) {
    // Write your code here
    int counter_apples = 0;
    int counter_oranges = 0;

    for(int apple : apples){
        apple = apple + a;
        if(apple >= s && apple <= t){
            counter_apples++;
        }
    }

    for(int orange : oranges){
        orange = orange + b;
        if(orange >= s && orange <= t){
            counter_oranges++;
        }
    }
    System.out.println(counter_apples);
    System.out.println(counter_oranges);
    }
}

public class AppleOrange {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = 
        new BufferedReader(new InputStreamReader(System.in));

        String[] firstMultipleInput = 
        bufferedReader.readLine()
        .replaceAll("\\s+$", "")
        .split(" ");

        int s = Integer.parseInt(firstMultipleInput[0]);

        int t = Integer.parseInt(firstMultipleInput[1]);

        String[] secondMultipleInput = 
        bufferedReader.readLine()
        .replaceAll("\\s+$", "")
        .split(" ");

        int a = Integer.parseInt(secondMultipleInput[0]);

        int b = Integer.parseInt(secondMultipleInput[1]);

        List<Integer> apples = 
        Stream.of(bufferedReader.readLine()
        .replaceAll("\\s+$", "")
        .split(" "))
            .map(Integer::parseInt)
            .collect(toList());

        List<Integer> oranges = 
        Stream.of(bufferedReader.readLine()
        .replaceAll("\\s+$", "")
        .split(" "))
            .map(Integer::parseInt)
            .collect(toList());

        Result.countApplesAndOranges(s, t, a, b, apples, 
        oranges);

        bufferedReader.close();
    }
}
