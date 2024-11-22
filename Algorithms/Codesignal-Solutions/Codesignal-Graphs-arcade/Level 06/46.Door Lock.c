/*

NOT LIKED

In order to protect your office from intruders, your boss decided to install a high-tech lock on the door. The lock represents a large cube with some points floating inside. When the correct pin is entered, the points start to connect to each other by rays of light until they form a single connected structure with rays of the minimum possible total length. When this happens, the lock opens.

Your boss likes interesting challenges, but is not very fond of solving them himself. This is why he asked you, his most (or least?) favorite employee, to solve the challenge he came up with. Given the set of points, he wants you to find the optimal structure that opens the lock. Since there can be several optimal structures, your task is to return the minimum total length of all the rays in one of such structures.

Example

For points = [[0, 0, 0], [1, 1, 1], [1, -1, 1], [-1, 1, 1], [-1, -1, -1]],
the output should be
solution(points) = 6.9282032303.

The best way is to connect point [0, 0, 0] with all other points.

Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] array.array.integer points

An array of points floating in the cube. The ith point is represented by its coordinates in 3D space: points[i][0] for x, points[i][1] for y and points[i][2] for z.

Guaranteed constraints:
1 ≤ points.length ≤ 2500,
points[i].length = 3,
-5000 ≤ points[i][j] ≤ 5000.

[output] float

The total length of the rays in an optimal structure. Your answer will be considered correct if its absolute error doesn't exceed 10-5.

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
double solution(arr_arr_integer points) {

}
