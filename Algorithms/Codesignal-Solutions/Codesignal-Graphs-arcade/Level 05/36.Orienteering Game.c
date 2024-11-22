/*
Not long ago you saw an orienteering competition on TV and immediately wanted to try it yourself. You've joined an orienteering club and started preparing for the upcoming competitions.

You've just came home from one particularly exhausting competition and decided to relax by playing a board game which all qualified participants (including you, of course) got as a reward. In this game your objective is to navigate your way on the board from the start located in the upper-left corner to the finish located in the bottom-right corner in as little time as possible.

The game board is a rectangle divided into equal cells. Each cell contains a number denoting the time you should wait in this cell before advancing to the next one. From each cell you can move only to the neighboring one, i.e. the one directly below, above, to the left or to the right of your current position.

Given the game board find the minimum time required to reach the finish from the start.

Example

For

board = [[42, 51, 22, 10,  0 ],
         [2,  50, 7,  6,   15],
         [4,  36, 8,  30,  20],
         [0,  40, 10, 100, 1 ]]
the output should be
solution(board) = 140.

Example

Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] array.array.integer board

The game board of size n × m. The start is located at board[0][0] and the finish is at board[n - 1][m - 1].

Guaranteed constraints:
1 ≤ board.length ≤ 250,
1 ≤ board[i].length ≤ 250,
0 ≤ board[i][j] ≤ 100.

[output] integer

The minimum time required to reach the finish from the start.

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
int solution(arr_arr_integer board) {

}
