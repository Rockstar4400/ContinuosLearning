

/*
 You are given a 2D matrix of dimension  and a positive 
 integer . You have to rotate the matrix  times and print 
 the resultant matrix. Rotation should be in anti-clockwise 
 direction.

Rotation of a  matrix is represented by the following figure. 
Note that in one rotation, you have to shift elements by one
 step only.

matrix-rotation

It is guaranteed that the minimum of m and n will be even.

As an example rotate the Start matrix by 2:

    Start         First           Second
     1 2 3 4       2  3  4  5      3  4  5  6
    12 1 2 5  ->   1  2  3  6 ->   2  3  4  7
    11 4 3 6      12  1  4  7      1  2  1  8
    10 9 8 7      11 10  9  8     12 11 10  9
Function Description

Complete the matrixRotation function in the editor below.

matrixRotation has the following parameter(s):

int matrix[m][n]: a 2D array of integers
int r: the rotation factor
Prints
It should print the resultant 2D integer array and 
return nothing. Print each row on a separate line as 
space-separated integers.

Input Format

The first line contains three space separated integers, , ,
 and , the number of rows and columns in , and the required 
 rotation.
The next  lines contain  space-separated integers 
representing the elements of a row of .

 */

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class MatrixLayerRotation {

        public static void matrixRotation(List<List<Integer>> matrix, int r) {
        // Write your code here
            int m = matrix.size();
            int n = matrix.get(0).size();

            if(Math.min(m, n) % 2 == 0){
                
                
            }
        }

        public static void main(String[] args) throws IOException {
            BufferedReader bufferedReader = 
            new BufferedReader(new InputStreamReader(System.in));
    
            String[] firstMultipleInput = 
            bufferedReader.readLine()
            .replaceAll("\\s+$", "")
            .split(" ");
    
            int m = Integer.parseInt(firstMultipleInput[0]);
    
            int n = Integer.parseInt(firstMultipleInput[1]);
    
            int r = Integer.parseInt(firstMultipleInput[2]);
    
            List<List<Integer>> matrix = new ArrayList<>();
    
            for (int i = 0; i < m; i++) {
                String[] matrixRowTempItems = bufferedReader
                .readLine().replaceAll("\\s+$", "")
                .split(" ");
    
                List<Integer> matrixRowItems = new ArrayList<>();
    
                for (int j = 0; j < n; j++) {
                    int matrixItem = Integer.parseInt(matrixRowTempItems[j]);
                    matrixRowItems.add(matrixItem);
                }
    
                matrix.add(matrixRowItems);
            }
    
            MatrixLayerRotation.matrixRotation(matrix, r);
    
            bufferedReader.close();
        }
}
