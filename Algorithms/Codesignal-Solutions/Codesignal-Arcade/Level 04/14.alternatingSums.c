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

*/

// Arrays are already defined with this interface:
// typedef struct arr_##name {
//   int size;
//   type *arr;
// } arr_##name;
//
// arr_##name alloc_arr_##name(int len) {
//   arr_##name a = {len, len > 0 ? malloc(sizeof(type) * len) : NULL};
//   return a;
// }
//
//
arr_integer solution(arr_integer a) {

}
