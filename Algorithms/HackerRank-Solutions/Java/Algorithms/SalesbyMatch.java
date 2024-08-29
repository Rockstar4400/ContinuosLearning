/*
There is a large pile of socks that must be paired by color. Given an array of integers representing the color
of each sock, determine how many pairs of socks with matching colors there are.

 */

import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

public class SalesbyMatch {
    public static int sockMerchant(int n, List<Integer> ar) {
        int PairCount = 0;
        int[] ar2 = new int[n];
        for (int i = 0; i < n; i++) {
            int i1 = ar.get(i);
            ar2[i] = i1;
        }

        for (int i = 0; i < n; i++) {
            //System.out.println("Iteration" + i);
            for (int j = n-1; j > i; j--) {
                //System.out.println(ar2[j]);
                if(ar.get(i) == ar2[j]){
                    ar2[j] = 0;
                    PairCount++;
                    break;
                }
            }
        }

        return PairCount;
    }

    public static void main(String[] args) {
        List<Integer> intArray1 = Arrays.asList(10, 20, 20, 10, 10, 30, 50, 10, 20);
        List<Integer> intArray2 = Arrays.asList(1, 1, 3, 1, 2, 1, 3, 3, 3, 3);
        System.out.println(sockMerchant(9,intArray1));
        System.out.println(sockMerchant(10,intArray2));
    }
}
