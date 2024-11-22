/*
NOT LIKED

Not long ago you saw an orienteering competition on TV and immediately wanted to try it yourself. You've joined an orienteering club and started preparing for the upcoming competitions. You liked participation so much decided to organize your very own competition, and an unusual one.

In this race the participants should find such a path from start to finish that they will spend no more than T minutes on each road. When a participant leaves a location, the time on their stopwatch is set to T, and the countdown begins. If they can't make it to the next location in T seconds, they lose the race.

You haven't yet chosen locations for the start and for the finish. To decide which locations to chose, for each ordered pair of locations (a, b) you'd like to calculate the minimum value of T that makes it possible to complete the race that starts at a and finishes at b.

Given the number of locations n and one-way roads connecting them, for every start and every finish locations return the minimum possible value of T.

Example

For n = 3 and

roads = [[0, 1, 100000],
         [5, 0, 2],
         [4, -1, 0]]
the output should be

solution(n, roads) = [[0, 1, 2],
                      [4, 0, 2],
                      [4, 4, 0]]
Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] integer n

The number of locations.

Guaranteed constraints:
2 ≤ n ≤ 120.

[input] array.array.integer roads

A two-dimensional array of roads represented by an adjacency matrix. Each element roads[i][j] is either a non-negative integer (that means that there exists a road from location i to location j and it takes roads[i][j] minutes to traverse it), or -1 if there is no road in that direction.

Guaranteed constraints:
roads.length = n,
roads[i].length = n,
-1 ≤ roads[i][j] ≤ 105,
roads[i][i] = 0.

[output] array.array.integer

A square matrix of length n, where the element at the ith row and the jth column is the minimum possible value of T for the race that starts at the ith location and ends at the jth location. If there is no such T, it should be equal to -1 instead.

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
arr_arr_integer solution(int n, arr_arr_integer roads) {

}
