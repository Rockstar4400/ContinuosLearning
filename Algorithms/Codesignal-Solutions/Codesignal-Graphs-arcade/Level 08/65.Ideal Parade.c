/*
You are the leader of a tribe living on an archipelago. Traditionally, each year your tribe organizes a parade to demonstrate the might of your tribal army. During this parade the procession goes from island to island via one-way bridges. The parade starts and finishes in the capital, located on island 1. Each parade has its own representation that describes the route of the parade as an array of bridges in the order they are crossed, where each bridge given by its construction year.

This year you'd like to prepare an ideal parade. The parade is ideal if the marching army traverses each bridge exactly once (although it can visit the same island multiple times) and its representation is lexicographically smallest among all such parades.

You would like the parade to go without a hitch, so you need to plan in advance the location of the parade at each given moment of time, assuming that it takes 1 unit of time to cross a bridge. Given the number of islands n and arrays of bridges and times, return the island on which the processing will be in each given moment of time, or an empty array if ideal parade is not even possible.

Example

For n = 5,

bridges = [[1, 2, 500],
            [1, 5, 1000],
            [2, 3, 2000],
            [3, 1, 2016],
            [4, 1, 1900],
            [5, 4, 2012]]
and

times = [0, 1, 2, 3, 4, 5, 6]
the output should be
solution(n, bridges, times) = [1, 2, 3, 1, 5, 4, 1];

For n = 3,

bridges = [[1, 2, 500],
            [1, 3, 1000],
            [2, 3, 2000]]
and

times = [0, 1, 2]
the output should be
solution(n, bridges, times) = [].

It's impossible to organize an ideal parade.

Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] integer n

The number of islands in your archipelago.

Guaranteed constraints:
1 ≤ n ≤ 5000.

[input] array.array.integer bridges

A two-dimensional array representing the bridges. Each element of this array is given in the format [island1, island2, year] and represents a bridge from island1 to island2 (both given 1-based), which was constructed in year.
It is guaranteed that none of the bridges were constructed in the same year.

Guaranteed constraints:
1 ≤ bridges.length ≤ 105>,
triples[i].length = 3,
0 ≤ triples[i][j] ≤ 5 · 105.

[input] array.integer times

An array representing the interesting moments of time. For each i times[i] represents the number of units of time passed after the start of the parade.

Guaranteed constraints:
1 ≤ times.length ≤ 1000,
0 ≤ times[i] ≤ bridges.length.

[output] array.integer

Array of the same length as times, where the ith element is the number of the island where the procession will be in times[i] unites of time.

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
arr_integer solution(int n, arr_arr_integer bridges, arr_integer times) {

}
