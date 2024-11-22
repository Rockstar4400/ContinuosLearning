/*
NOT LIKED

After long years of sharpening your programming skills and honing your physique you finally made it: as a member of the ProProgrammers team you've entered Fort Boyard!

Your team has successfully completed several challenges so far, and one of your teammates is ready to face the next one. In this challenge the player must move a barrel from one end of an n × m maze to the other where the key is locked in a vice. A tool that releases the key is connected to the barrel. The maze consists of n · m - 3 boxes, and these boxes and the barrel should be moved so that the key can be freed. The boxes and the barrel are really heavy, so you decided to help your teammate to plan his moves.

Given the size of the maze and boxes positions, find the minimum number of moves required to complete the challenge.

Example

For n = 3, m = 3, and
boxes = [[0, 2], [2, 2], [1, 0], [2, 0], [1, 1], [2, 1]],
the output should be
solution(n, m, boxes) = 8.

This is how one of the possible solutions looks like:


Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] integer n

An integer, the number of rows in the maze.

Guaranteed constraints:
1 ≤ n < 10.

[input] integer m

An integer, the number of columns in the maze.

Guaranteed constraints:
1 ≤ m ≤ 50 / n.

[input] array.array.integer boxes

An array of coordinates of all boxes in the maze. For each valid i boxes[i][0] stands for the row and boxes[i][1] stands for the column (both 0-based) of the (i + 1)th box.

Guaranteed constraints:
boxes.length = n × m - 3,
boxes[i].length = 2,
0 ≤ boxes[i][0] < n,
0 ≤ boxes[i][1] < m.

[output] integer

The minimal number of moves required to move the barrel from the top left cell of the maze to the bottom right cell. It's guaranteed that it's always possible.

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
int solution(int n, int m, arr_arr_integer boxes) {

}
