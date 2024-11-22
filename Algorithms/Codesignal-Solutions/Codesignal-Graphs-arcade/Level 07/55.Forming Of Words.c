/*
NOT LIKED

After long years of sharpening your programming skills and honing your physique you finally made it: as a member of the ProProgrammers team you've entered Fort Boyard!

Your team has finally entered the Treasure Room, and now all that's left to do is complete the final challenge and grab the well-deserved treasure. In this challenge 4 members of your team should stand on the cells of a 5 × 4 grid filled with letters (not necessarily distinct). The letters they stand on should form a password, and the gold will appear only if the password is correct and correctly spelled.

The players took their positions and were ready to finish the challenge, when you realized that your initial hunch was wrong and that you need to form another word as fast as possible. It's not that simple:

the players can move only along the axes or stay in their cells;
moving from one cell to the neighboring one takes one second;
two players cannot stand on the same cell at the same moment.
You decided to calculate the odds of your team forming a new word in time. Knowing the newWord, calculate the minimum number of seconds your team needs to form it.

Example

For

grid = [['a', 'b', 'c', 'd'],
        ['e', 'f', 'g', 'h'],
        ['i', 'j', 'k', 'l'],
        ['m', 'n', 'o', 'p'],
        ['q', 'r', 's', 't']]
positions = [[2, 2], [0, 2], [4, 3], [2, 1]],
and newWord = "rsam",
the output should be
solution(grid, positions, newWord) = 2.

Here's one of the shortest ways to form the new word:


Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] array.array.char grid

A rectangular array representing the grid, where grid[i][j] is a lowercase English letter.

Guaranteed constraints:
grid.length = 5,
grid[i].length = 4.

[input] array.array.integer positions

An array representing the initial positions of your 4 teammates, where positions[i][0] stands for the row and positions[i][1] stands for the column (both 0-based) of the (i + 1)th teammate.

Guaranteed constraints:
positions.length = 4,
positions[i].length = 2,
0 ≤ positions[i][0] < 5,
0 ≤ positions[i][1] < 4.

[input] string newWord

A string representing the new word that you should spell. It's guaranteed that the new word can be formed by the letters of the grid.

Guaranteed constraints:
newWord.length = 4.

[output] integer

The minimal number of seconds required to obtain newWord.

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
int solution(arr_arr_char grid, arr_arr_integer positions, char * newWord) {

}
