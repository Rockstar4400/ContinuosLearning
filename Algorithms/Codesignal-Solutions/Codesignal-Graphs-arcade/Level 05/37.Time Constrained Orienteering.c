/*

NOT LIKED

Not long ago you saw an orienteering competition on TV and immediately wanted to try it yourself. You've joined an orienteering club and started preparing for the upcoming competitions. You liked participation so much that you decided to organize your very own competition, and an unusual one.

In this race the participants should find such a path from start to finish that they will spend no more than T minutes on each road. When a participant leaves a location, the time on their stopwatch is set to T, and the countdown begins. If they can't make it to the next location in T seconds, they lose the race.

You have already picked a location for the start, but not yet settled for the finish. To decide which location to choose, for each of the n locations you'd like to calculate the minimum value of T that makes it possible to complete the race from start to this location.

Given the start location, the number of locations n and the roads connecting them, return the number of different minimum possible value of T for every finish location.

Example

For n = 5, start = 3, and

roads = [[1, 2, 3],
         [2, 3, 1],
         [2, 4, 2],
         [3, 5, 4],
         [4, 5, 3]]
the output should be
solution(n, start, roads) = 4.

The minimum possible values of T for locations from 1 to n are 3, 1, 0, 2 and 3 respectively, 4 distinct values in total.

Here's how the locations are connected:


Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] integer n

The number of locations.

Guaranteed constraints:
2 ≤ n ≤ 105.

[input] integer start

The location you picked as a start of the race.

Guaranteed constraints:
1 ≤ start ≤ n.

[input] array.array.integer roads

A two-dimensional array representing the roads. Each road is given in the format [loc1, loc2, t], which means that it takes t minutes to reach loc2 from loc1 (both given 1-based).
It is guaranteed that every two locations are connected by roads.

Guaranteed constraints:
1 ≤ roads.length ≤ 5 · 104,
roads[i].length = 3,
1 ≤ roads[i][0], roads[i][1] ≤ n,
0 ≤ roads[i][2] ≤ 105.

[output] integer

The number of different possible values of T for the races that start at the start and end at the finish for every finish location from 1 to n.

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
int solution(int n, int start, arr_arr_integer roads) {

}
