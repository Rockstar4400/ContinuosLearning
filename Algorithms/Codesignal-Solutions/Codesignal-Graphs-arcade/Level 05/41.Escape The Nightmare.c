/*
NOT LIKED

Not long ago you saw an orienteering competition on TV and immediately wanted to try it yourself. You've joined an orienteering club and started preparing for the upcoming competitions.

For the past few days you weren't able to get a good sleep because of one particular nightmare. In this nightmare you find yourself on a right star pyramid at coordinates start, and the only way to escape this nightmare is to reach the finish in the shortest possible amount of time (i.e. by the shortest path) moving along the edges of this pyramid. Tired of restless nights, you decided to put an end to it.

Given the coordinates of start and finish located on the edges of a right start pyramid, pyramid's height h and the distance d between the center of the star at the pyramid's base and it's vertices, find the length of the shortest path from start to finish along the edges of said pyramid.

The base of the pyramid is a regular octagram centered at (0, 0, 0) with two vertices on x axis and two vertices on y axis. The pyramid's apex is directly above (0, 0, 0) at the height h. Each pyramid's edge either belongs to the base or is connecting pyramid's apex with the base.
It's guaranteed that both start and finish belong to the pyramid's edge.

Here is how the given pyramid looks like:

Pyramid

Example

For h = 4, d = 2, start = [-1, 0, 2], and finish = [2, 0, 0], the output should be
solution(h, d, start, finish) = 6.7082039325.

Example

Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] integer h

The height of the right star pyramid.

Guaranteed constraints:
1 ≤ h ≤ 1000.

[input] integer d

The distance between (0, 0, 0) and star vertices.

Guaranteed constraints:
1 ≤ d ≤ 1000.

[input] array.integer start

Three-dimensional coordinates of the start point given in the format [x, y, z].
It's guaranteed that the point lies on the pyramid edge.

Guaranteed constraints:
start.length = 3,
-max(d, h) ≤ start[i] ≤ max(d, h).

[input] array.integer finish

Three-dimensional coordinates of the finish point given in the format [x, y, z].
It's guaranteed that the point lies on the pyramid edge.

Guaranteed constraints:
finish.length = 3,
-max(d, h) ≤ finish[i] ≤ max(d, h).

[output] float

The length of the shortest path between start and finish. Your answer will be considered correct if its absolute error doesn't exceed 10-5.

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
double solution(int h, int d, arr_integer start, arr_integer finish) {

}
