/*
Little Ratiorg was tired of being bullied by other bots and mighty CodeFighters, so he joined the Ninja Bots Training camp. Any bot that manages to solve all the challenges becomes an ultimate master of algorithms, and that is exactly what Ratiorg wants.

Facing his first challenge, Ratiorg is placed at the start position of a rectangular grid filled with digits from 0 to 9. With each move, Ratiorg can either jump to the adjacent cell (the one above, below, to the left or to the right of his current position), or teleport to any cell that has number x written on it, where x is the number written on the cell Ratiorg is currently standing on. Ratiorg will be able to move on to the next challenge if he manages to get to the finish cell in the minimum possible number of moves.

Although the little bot is sure that he can handle the challenge, you don't want to leave him alone! Back Ratiorg up by implementing a function that given the grid, start and finish, will calculate the minimum number of moves required to get from start to finish.

Example

For

grid = [[0, 1, 4, 2, 3],
        [1, 4, 2, 8, 2],
        [2, 2, 3, 4, 9],
        [8, 7, 2, 2, 3]]
start = [0, 0], and finish = [3, 4], the output should be
solution(grid, start, finish) = 4.

Here's one of the shortest paths Ratiorg can take:


Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] array.array.integer grid

A rectangular grid filled with digits in range [0...9].

Guaranteed constraints:
1 ≤ grid.length ≤ 300,
1 ≤ grid[0].length ≤ 300,
0 ≤ grid[i][j] ≤ 9.

[input] array.integer start

Ratiorg's initial position as an array of two elements, where the first element is row index, and the second one is column index.

Guaranteed constraints:
start.length = 2,
0 ≤ start[0] < grid.length,
0 ≤ start[1] < grid[0].length.

[input] array.integer finish

Ratioarg's destination in the same format as start.

Guaranteed constraints:
finish.length = 2,
0 ≤ finish[0] < grid.length,
0 ≤ finish[1] < grid[0].length.

[output] integer

The minimum number of moves required to get from start to finish.

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
int solution(arr_arr_integer grid, arr_integer start, arr_integer finish) {

}
