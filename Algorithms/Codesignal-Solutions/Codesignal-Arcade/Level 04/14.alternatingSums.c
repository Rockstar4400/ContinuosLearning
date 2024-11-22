/*

Several people are standing in a row and need to be divided into
two teams. The first person goes into team 1, the second goes into
team 2, the third goes into team 1 again, the fourth into team 2,
and so on.

You are given an array of positive integers - the weights of the
people. Return an array of two integers, where the first element
is the total weight of team 1, and the second element is the total
weight of team 2 after the division is complete.

Example

For a = [50, 60, 60, 45, 70], the output should be
solution(a) = [180, 105].

Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] array.integer a

Guaranteed constraints:
1 ≤ a.length ≤ 105,
45 ≤ a[i] ≤ 100.

[output] array.integer

[C] Syntax Tips

// Prints help message to the console
// Returns a string
char * helloWorld(char * name) {
    char * answer = malloc(strlen(name) + 8);
    printf("This prints to the console when you Run Tests");
    strcpy(answer, "Hello, ");
    strcat(answer, name);
    return answer;
}
 
Best solution:
arr_integer solution(const arr_integer a) {
 arr_integer solution = alloc_arr_integer(2);
    for (uint32_t i = 0; i < a.size; ++i)
    {
        solution.arr[i%2] += a.arr[i];
    }
    return solution;
}

*/

#include <stdio.h>
#include <stdlib.h>

typedef struct arr_integer {
    int size;
    int *arr;
} arr_integer;

arr_integer alloc_arr_integer(int len) {
    arr_integer a = {len, len > 0 ? malloc(sizeof(int) * len) : NULL};
   return a;
 }

arr_integer solution(const arr_integer a) {
    struct arr_integer result = alloc_arr_integer(2);
    result.arr[0] = 0;
    result.arr[1] = 0;
    for (int i = 0; i < a.size; i++){
     if(i % 2 == 0){
        result.arr[0] += a.arr[i];
     } else{
         result.arr[1] += a.arr[i];
     }
    }

    printf("[%d, %d]\n", result.arr[0], result.arr[1]);

    return result;
}

int main(void)
{
//    int arr01[] = {50, 60, 60, 45, 70};
//    size_t size = sizeof(arr01)/sizeof(arr01[0]);
//    struct arr_integer test01 = { size, &arr01 };
    //solution(test01);

    int arr02[] = {80};
    size_t size2 = sizeof(arr02)/sizeof(arr02[0]);
    struct arr_integer test02 = { size2, &arr02 };
    solution(test02);
}
/*
Test cases:

1.a: [50, 60, 60, 45, 70] = [180, 105]
2.a: [100, 50] = [100, 50]
3.a: [80] = [80, 0]
4.a: [100, 50, 50, 100] = [150, 150]
5.a: [100, 51, 50, 100] = [150, 151]

*/