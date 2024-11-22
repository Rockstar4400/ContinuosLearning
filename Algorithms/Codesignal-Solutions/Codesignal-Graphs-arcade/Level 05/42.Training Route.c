/*
Not long ago you saw an orienteering competition on TV and immediately wanted to try it yourself. You've joined an orienteering club and started preparing for the upcoming competitions.

One of the most important components of an orienteering competition is running. In order to train this skill you decided to practice on your club's special training field that consists of n locations numbered from 0 to n - 1, with some of them connected by two-way roads of different lengths. There are n roads in total, and any location is reachable from another one by the roads (possibly more than one). Your coach has composed a training route for you that consists of several locations that you should visit in the exact given order. Note, that you may be required to visit some location several times on your training route.

Given the number of locations n, roads between them and the training route, find the minimum possible total length of this route.

Example

For n = 6,

roads = [[[1, 50], [3, 10], [5, 4]],
         [[0, 50], [2, 15], [3, 5]], 
         [[1, 15], [4, 55]], 
         [[0, 10], [1, 5]],
         [[2, 55]], 
         [[0, 4]]]
and route = [5, 1, 0, 2], the output should be
solution(n, roads, route) = 64.

The shortest path between locations numbered 5 and 1 is of length 19, between 1 and 0 it's 15, and between 0 and 2 it's 30. The shortest route length is thus 19 + 15 + 30 = 64.

Example

Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] integer n

The number of locations.

Guaranteed constraints:
1 ≤ n ≤ 3000.

[input] array.array.array.integer roads

Array representing the roads between the locations as an adjacency list.
roads[i][j] = [k, l] means that there is a road between location i and location k of length l.
There are exactly n roads.

Guaranteed constraints:
roads.length == n,
0 ≤ roads[i].length ≤ n - 1,
roads[i][j].length = 2,
0 ≤ roads[i][j][0] < n,
0 ≤ roads[i][j][1] ≤ 1000.

[input] array.integer route

An array of integers representing the order in which you should visit locations on your training route.

Guaranteed constraints:
2 ≤ route.length ≤ 104,
route[i] ≠ route[i + 1],
0 ≤ route[i] ≤ n - 1.

[output] integer

The minimum possible total length of the training route.

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
int solution(int n, arr_arr_arr_integer roads, arr_integer route) {

}
