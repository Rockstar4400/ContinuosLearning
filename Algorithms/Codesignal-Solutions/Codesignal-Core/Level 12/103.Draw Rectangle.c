/*
You are implementing a command-line version of the Paint app. Since the command line doesn't support colors, you are using different characters to represent pixels. Your current goal is to support rectangle x1 y1 x2 y2 operation, which draws a rectangle that has an upper left corner at (x1, y1) and a lower right corner at (x2, y2). Here the x-axis points from left to right, and the y-axis points from top to bottom.

Given the initial canvas state and the array that represents the coordinates of the two corners, return the canvas state after the operation is applied. For the details about how rectangles are painted, see the example.

Example

For

canvas = [['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
          ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
          ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
          ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
          ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']]
and rectangle = [1, 1, 4, 3], the output should be

solution(canvas, rectangle) = [['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
             					['a', '*', '-', '-', '*', 'a', 'a', 'a'],
             					['a', '|', 'a', 'a', '|', 'a', 'a', 'a'],
             					['b', '*', '-', '-', '*', 'b', 'b', 'b'],
             					['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']]
Here is the rectangle, colored for illustration:


[['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
['a', '*', '-', '-', '*', 'a', 'a', 'a'],
['a', '|', 'a', 'a', '|', 'a', 'a', 'a'],
['b', '*', '-', '-', '*', 'b', 'b', 'b'],
['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']]
Note that rectangle sides are depicted as -s and |s, asterisks (*) stand for its corners and all of the other "pixels" remain the same.

Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] array.array.char canvas

A non-empty rectangular matrix of characters.

Guaranteed constraints:
2 ≤ canvas.length ≤ 10,
2 ≤ canvas[0].length ≤ 10.

[input] array.integer rectangle

Array of four integers - [x1, y1, x2, y2].

Guaranteed constraints:
0 ≤ x1 < x2 < canvas[i].length,
0 ≤ y1 < y2 < canvas.length.

[output] array.array.char

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
arr_arr_char solution(arr_arr_char canvas, arr_integer rectangle) {

}
