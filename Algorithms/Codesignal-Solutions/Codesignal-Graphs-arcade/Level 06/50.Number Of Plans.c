/*
You're working in a big delivery company that has to handle a lot of orders on a daily basis. To optimize the delivery process your boss gave you a plan of the city containing n buildings and some streets connecting them, and asked to build an optimal delivery plan for the couriers. The plan should contain several streets connecting all the buildings in such way that each building is reachable from any other one, and should have the minimum total length of all the streets in it among all possible plans.

Since this task is too simple for you, you'd like to make it a bit more challenging. You know that using the same delivery plan every time is boring for many couriers, so you'd like to find all possible different optimal plans. To begin with, you'd like to calculate the number of such plans for the given n and streets. Since this number can be very big, return it modulo 109 + 7.

Example

For n = 4 and streets = [[0, 1, 1], [0, 3, 2], [1, 2, 2], [2, 3, 2]],
the output should be
solution(n, streets) = 3.



There are 3 possible optimal delivery plans with the total streets length equal to 5:

0 -- 1, 0 -- 3, 1 -- 2;
0 -- 1, 1 -- 2, 2 -- 3;
0 -- 1, 0 -- 3, 2 -- 3.
Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] integer n

The number of buildings in the city.

Guaranteed constraints:
1 ≤ n ≤ 50.

[input] array.array.integer streets

Information about the streets connecting the buildings in the city. For each valid i, streets[i] contains three numbers: streets[i][0] and streets[i][1] stand for the ids of the buildings the ith street connects, and streets[i][2] stands for the length of this street.
It is guaranteed that each building is reachable by streets from any other one and that there is no more than one street between each pair of buildings.

Guaranteed constraints:
n - 1 ≤ streets.length ≤ n · (n - 1) / 2,
streets[i].length = 3,
0 ≤ streets[i][0], streets[i][1] < n,
0 ≤ streets[i][2] ≤ 100,
streets[i][0] ≠ streets[i][1].

[output] integer

The number of optimal delivery plans you can find given the plan of the city modulo 109 + 7.

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
int solution(int n, arr_arr_integer streets) {

}
