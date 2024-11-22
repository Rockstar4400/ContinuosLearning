/*
NOT LIKED

Since you became a director of a large company, you came to know all of your n employees perfectly well. You carefully studied their relationships and came up with a list of pairs of workers who respect one another. You are sure that in a healthy environment subordinates should respect their immediate superiors, which is why you would like to change the hierarchy in the company according to the list you composed. This hierarchy should be represented by a rooted tree, and for each pair of employees a, b, a is an immediate superior of b (or the other way round) if and only if a respects b and vice versa.

Given the number of people in you company n and the respectList you created, calculate the number of different hierarchies you can create.

Example

For n = 4 and respectList = [[0, 1], [1, 2], [2, 3], [3, 0], [1, 3]],
the output should be
solution(n, respectList) = 32.

Here are all possible hierarchies:

(0 -- 1), (1 -- 2), (2 -- 3);
(1 -- 2), (2 -- 3), (3 -- 0);
(2 -- 3), (3 -- 0), (0 -- 1);
(3 -- 0), (0 -- 1), (1 -- 2);
(1 -- 0), (1 -- 2), (1 -- 3);
(3 -- 0), (3 -- 1), (3 -- 2);
(1 -- 2), (1 -- 3), (3 -- 0);
(1 -- 0), (1 -- 3), (3 -- 2).
Each of them can be rooted at any of 4 employees, so the answer equals the number of hierarchies in the list above multiplied by 4.

Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] integer n

The number of employees in your company.

Guaranteed constraints:
1 ≤ n ≤ 100.

[input] array.array.integer respectList

Information about the pairs of employees who respect one another. For each valid i, respectList[i] contains two numbers respectList[i][0] and respectList[i][1] that represent the ids of employees that respect one another (and thus can be superiors to one another).
It is guaranteed that there is no more than one dependency between each pair of employees and that respectList forms a connected graph.

Guaranteed constraints:
n - 1 ≤ respectList.length ≤ n · (n - 1) / 2,
respectList[i].length = 2,
0 ≤ respectList[i][0], respectList[i][1] < n,
respectList[i][0] ≠ respectList[i][1].

[output] integer

The number of different hierarchies that can be obtained from respectList modulo 109 + 7.

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
int solution(int n, arr_arr_integer respectList) {

}
