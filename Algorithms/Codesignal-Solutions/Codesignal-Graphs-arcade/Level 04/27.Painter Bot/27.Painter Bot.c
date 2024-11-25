/*

NOT LIKED

Little Ratiorg was tired of being bullied by other bots and mighty CodeFighters, so he joined the Ninja Bots Training camp. Any bot that manages to solve all the challenges becomes an ultimate master of algorithms, and that is exactly what Ratiorg wants.

Ratiorg aced the very first challenge, and is ready to begin the second. The little bot is given a canvas, each pixel of which has some color. Ratiorg should apply several flood fill operations to the canvas, and show the resulting image to the judges. Each flood fill operation is given as an array of three elements [x, y, color], where (x, y) is the coordinates of the pixel to which the operation is applied, and color is the color with which the pixel and its area should be painted. The area that should be painted along with the initial pixel is defined as follows:

Initially, only the pixel to which the operation was applied should be painted.
Consider all pixels that are adjacent to the initial one (i.e. directly above, below, to the left or to the right of it). If the difference between the color of this pixel and the color of the initial one is not greater than d, this pixel should also be painted.
For each pixel painted on this step consider all its neighbors in the same manner.
Your task is to help the judges check Ratiorg's performance. Given canvas, operations and the value of d, return the state of the image after all operations have been applied.

Example

For

canvas = [[0, 1, 5, 2, 4, 2, 6],
          [5, 2, 4, 6, 2, 0, 0],
          [3, 3, 3, 7, 8, 3, 2],
          [2, 1, 1, 0, 0, 0, 0]]
operations = [[0, 0, 10], [1, 3, 3]], and d = 3,
the output should be

solution(canvas, operations, d) = [[10, 10,  3,  2,  4, 10, 6 ],
                                   [ 5, 10,  3,  3, 10, 10, 10],
                                   [10, 10, 10,  3,  3, 10, 10],
                                   [10, 10, 10, 10, 10, 10, 10]]
Here's how the canvas should be painted:


Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] array.array.integer canvas

A rectangular matrix representing the canvas.

Guaranteed constraints:
1 ≤ canvas.length ≤ 100,
1 ≤ canvas[0].length ≤ 100,
0 ≤ canvas[i][j] ≤ 255.

[input] array.array.integer operations

Operations to be performed. Each operation is given in the format [x, y, color], where (x, y) is the coordinates of the initial pixes (0-based indices of row and column, respectively) and color is the fill color.

Guaranteed constraints:
0 ≤ operations.length ≤ 100,
operations[i].length = 3,
0 ≤ operations[i][0] < canvas.length,
0 ≤ operations[i][1] < canvas[0].length,
0 ≤ operations[i][2] ≤ 255.

[input] integer d

The value that defines the flood fill area.

Guaranteed constraints:
0 ≤ d ≤ 255.

[output] array.array.integer

The final state of the canvas.

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
arr_arr_integer solution(arr_arr_integer canvas, arr_arr_integer operations, int d) {

}
