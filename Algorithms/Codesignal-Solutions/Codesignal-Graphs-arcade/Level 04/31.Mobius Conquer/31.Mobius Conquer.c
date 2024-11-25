/*
NOT LIKED

Little Ratiorg was tired of being bullied by other bots and mighty CodeFighters, so he joined the Ninja Bots Training camp. Any bot that manages to solve all the challenges becomes an ultimate master of algorithms, and that is exactly what Ratiorg wants.

It's been several weeks, and Ratiorg is starting to boast about his newly obtained skills, which infuriates one of his fellow trainees. The angry bot decided to challenge Ratiorg to a Mobius Conquer battle to find out who's the strongest once and for all.

In the Mobius Conquer battle the players fight for positions on a Möbius strip, created from a rectangular field by giving it a half-twist, and then joining the ends of the strip along its height to form a loop. Both sides of the field are divided into cells, some of which are marked as impassable (note that player positions are not considered impassable). A player is said to control a cell if the cell is closer to him in terms of shortest paths on the strip.

The Mobius Conquer battle is almost over: ratiorg and his enemy have both reached their final positions. The only thing to do now is to determine the winner. Given the coordinates of both players, coordinates of the impassableCells and the size of the field, calculate the number of cells controlled by each player.

Example

For field = [4, 3], ratiorg = [0, 0, 0], enemy = [1, 3, 2], and

impassableCells = [[0, 0, 1], [0, 1, 1], [0, 2, 1], [0, 2, 2],
                   [1, 1, 0], [1, 2, 1], [1, 3, 0]]
the output should be
solution(field, ratiorg, enemy, impassableCells) = [7, 6].

Here's what each side of the field looks like:



And here's what the Möbius strip obtained from it looks like:




Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] array.integer field

Array of two integers, the size of the field. The first element is its height, and the second one is its width.

Guaranteed constraints:
field.length = 2,
1 ≤ field[i] ≤ 100.

[input] array.integer ratiorg

Ratiorg's position as an array of three integers. The first integer defines the side of the field (either 0 or 1), the second one defines the row, and the last one defines the column (both 0-based).

Note, that the row and the column of the second side of the field is defined assuming that the first side of the field was flipped vertically.

Guaranteed constraints:
ratiorg.length = 3,
0 ≤ ratiorg[0] ≤ 1,
0 ≤ ratiorg[1] < field[0],
0 ≤ ratiorg[2] < field[1].

[input] array.integer enemy

The enemy's position in the same format as ratiorg. It is guaranteed that ratiorg ≠ enemy.

Guaranteed constraints:
enemy.length = 3,
0 ≤ enemy[0] ≤ 1,
0 ≤ enemy[1] < field[0],
0 ≤ enemy[2] < field[1].

[input] array.array.integer impassableCells

Array of impassable cells, where each cell is given in the same format as ratiorg and enemy. It is guaranteed that all impassable cells are unique, and that no impassable cell coincides with ratiorg or enemy.

Guaranteed constraints:
0 ≤ impassableCells.length < 2 · field[0] · field[1],
impassableCells[i].length = 3,
0 ≤ impassableCells[i][0] ≤ 1,
0 ≤ impassableCells[i][1] < field[0],
0 ≤ impassableCells[i][2] < field[1].

[output] array.integer

Array of two integers, where the first integer is the number of cells controlled by Ratiorg, and the second is the number of cells controlled by his enemy.

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
arr_integer solution(arr_integer field, arr_integer ratiorg, arr_integer enemy, arr_arr_integer impassableCells) {

}
