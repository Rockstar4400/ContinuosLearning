/*
Little Ratiorg was tired of being bullied by other bots and mighty CodeFighters, so he joined the Ninja Bots Training camp. Any bot that manages to solve all the challenges becomes an ultimate master of algorithms, and that is exactly what Ratiorg wants.

It's been several weeks, and Ratiorg already feels how much stronger he has become. However, Ratiorg is about to face his first really exciting challenge: the Electric Field. It works like this: the bot stays in the top left corner of a rectangular grid. In one move he can walk to one of the nearest cells (directly above, below, to the left or to the right of his current position). Ratiorg's goal is to get to the bottom right corner in the least possible number of moves. However, it's not as simple as it seems: there are electric wires running through the grid. If Ratiorg steps on a wire, his microchips will be burnt to a crisp, so Ratiorg, prudent bot that he is, wants to do his best to avoid them.

You want to give Ratiorg a hint by telling him the least possible number of moves required to get to the destination. Given the grid and the wires, return the minimum number of moves required to get to the bottom right corner from the top left corner. If it's not possible to get there, return -1 instead.

Example

For grid = [4, 8] and

wires = [[1, 0, 1, 3], [3, 1, 3, 2], [4, 1, 4, 3], [4, 2, 4, 4],
         [1, 3, 3, 3], [2, 1, 7, 1], [2, 2, 7, 2], [5, 3, 8, 3]]
the output should be
solution(grid, wires) = 26.

Check out the image below for better understanding. The wires are colored red, and the path Ratiorg should take is colored green.



Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] array.integer grid

Array of two elements, where the first element is the height and the second element is the width of the field.

Guaranteed constraints:
grid.length = 2,
1 ≤ grid[i] ≤ 100.

[input] array.array.integer wires

Array of electric wires located on the grid. Each wire is given in the format [x1, y1, x2, y2], where (x1, y1) is position of the first endpoint and (x2, y2) is position of the second endpoint. x represents the x coordinate on the axis that runs along the width of the grid, and y represents the y coordinate on the axis that runs along the height of the grid.

It is guaranteed that for each i either wires[i][0] = wires[i][2] or wires[i][1] = wires[i][3], but not simultaneously.
The wires can intersect and overlap.

Guaranteed constraints:
0 ≤ wires.length ≤ 100,
wires[i].length = 4,
0 ≤ wires[0], wires[2] ≤ grid[1].length,
0 ≤ wires[1], wires[3] ≤ grid[0].length.

[output] integer

The minimum number of moves required to get from the top left to the bottom right corner of the grid without stepping on the wires, or -1 if it's impossible to get there.

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
int solution(arr_integer grid, arr_arr_integer wires) {

}
