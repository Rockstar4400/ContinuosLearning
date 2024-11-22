/*
NOT LIKED

Not long ago you saw an orienteering competition on TV and immediately wanted to try it yourself. You've joined an orienteering club and started preparing for the upcoming competitions.

One day your club announced that it was going to organize its own orienteering competition and you decided to help.
This competition will be held in a place consisting of n different locations (numbered from 0 to n - 1) connected by one-way roads. Furthermore, each road will have a number of points assigned to it: each time a participant traverse a road, this number will be added to his score. The participant who finishes with the least number of points wins. Note, that the participant can choose to continue his path to improve his score even if he reached the finish.

The organizers of the event have already chosen where the competition will be held. The place is quite remarkable: whatever pair of locations (start, finish) is chosen, it will be impossible for any participant to gain infinitely small score. Now your task is to find the pair of locations (start, finish) with the maximum possible winning score.

Given the number of locations n and roads between them with their respective points, return array of two elements [start, finish] such that the winning score in competition with start in location start and finish in location finish is the highest among all the other competition with different start and finish locations. If there are several possible pairs, return the lexicographically smallest one.

Example

For n = 7 and

roads = [[[1, 100]],
         [[2, -100]],
         [[0, 0]],
         [[0, 3], [4, 0]],
         [[5, 1]],
         [[3, 2]],
         [[0, -100]]]
the output should be
solution(n, roads) = [1, 0].

Example

Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] integer n

The number of locations.

Guaranteed constraints:
7 ≤ n ≤ 1000.

[input] array.array.array.integer roads

Array representing the roads between the locations as an adjacency list.
roads[i][j] = [k, p] means that there is a road from location i to location k that gives p points.

Guaranteed constraints:
roads.length == n,
0 ≤ roads[i].length < 30,
sum(roads[i].length) < 10 · n,
roads[i][j].length == 2,
0 ≤ roads[i][j][0] < n,
-1000 ≤ roads[i][j][1] ≤ 1000.

[output] array.integer

An array [start, finish] such that the winning score in competition with start in location start and finish in location finish is the highest among all other competition with different start and finish locations. If there are several possible pairs, return the lexicographically smallest one.

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
arr_integer solution(int n, arr_arr_arr_integer roads) {

}
