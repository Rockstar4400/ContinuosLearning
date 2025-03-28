/*
After long years of sharpening your programming skills and honing your physique you finally made it: as a member of the ProProgrammers team you've entered Fort Boyard!

Your team has successfully completed several challenges so far, and one of your teammates is ready to face the next one. In this challenge the participant finds himself in a rectangular labyrinth, and his goal is to carry the rod from the top left corner of the labyrinth to the bottom right corner. This rod is not exactly the lightest thing you can imagine, so the participant would naturally want do it as fast as possible.

You decided to determine in advance if it's possible to complete this challenge, and if it is, find the minimal number of moves required to carry the rod through the labyrinth. The labyrinth can be represented as a rectangular matrix some cells of which are marked as blocked, and the rod can be represented as a 1 × 3 rectangle. The rod can't collide with the blocked cells or the walls, so it's impossible to move it into position in which one of its cells coincides with the blocked cell or the wall. The goal is thus to move the rod into position in which one of its cells is in the bottom right cell of the labyrinth.

There are 5 types of moves that the participant can perform: move the rod one cell down or up, to the right or to the left, or to change its orientation from vertical to horizontal and vice versa. The rod can only be rotated about its center, and only if the 3 × 3 area surrounding it is clear from the obstacles or the walls.

The rod is initially positioned horizontally, and its left cell lies in [0, 0].

Example

For

labyrinth = [['.', '.', '.', '.', '.', '.', '.', '.', '.'],
             ['#', '.', '.', '.', '#', '.', '.', '.', '.'],
             ['.', '.', '.', '.', '#', '.', '.', '.', '.'],
             ['.', '#', '.', '.', '.', '.', '.', '#', '.'],
             ['.', '#', '.', '.', '.', '.', '.', '#', '.']]
the output should be
solution(labyrinth) = 11.

You can see one of the possible optimal paths in the image below:


For

labyrinth = [['.', '.', '.', '.', '.', '.', '.', '.', '.'],
             ['#', '.', '.', '.', '#', '.', '.', '#', '.'],
             ['.', '.', '.', '.', '#', '.', '.', '.', '.'],
             ['.', '#', '.', '.', '.', '.', '.', '#', '.'],
             ['.', '#', '.', '.', '.', '.', '.', '#', '.']]
the output should be
solution(labyrinth) = -1.

This example is similar to the previos one except one '#', so you can check it on the image above.

Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] array.array.char labyrinth

A rectangular array of chars representing the labyrinth, where labyrinth[i][j] = '.' if the corresponding cell is empty and labyrinth[i][j] = '#' if the corresponding cell is blocked.

Guaranteed constraints:
3 ≤ labyrinth.length ≤ 1000,
3 ≤ labyrinth[i].length ≤ 1000.

[output] integer

The minimal number of moves required to carry the rod to the end of labyrinth or -1 if it's impossible.

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
int solution(arr_arr_char labyrinth) {

}
