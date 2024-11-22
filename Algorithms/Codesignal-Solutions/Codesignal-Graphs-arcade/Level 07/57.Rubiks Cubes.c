/*
NOT LIKED
After long years of sharpening your programming skills and honing your physique you finally made it: as a member of the ProProgrammers team you've entered Fort Boyard!

Unfortunately it looks like something went horribly wrong: although you collected the treasure of the Fort, you cannot get out of there! You asked a crazed Professor (inhabitant of the Fort) to help you out, and he showed you the gates that lead to the exit. It turned out that opening the gates is a challenge itself, and you will be allowed to leave the Fort only if you manage to complete it from the first try. Moreover, the Master Of The Fort is after you because of your outstanding performance, so you don't have that much time.

Two of your teammates are given Rubik's Cubes, one cube for each player. The gates that will open only when the cubes have the same configuration, and only if this configuration is obtained in the minimum possible number of moves. Each move each of the players is allowed to rotate one of the layers of their cube. There are two additional conditions that should be met. Firstly, it's not possible to rotate the cubes, since it will open the tigers' cages in the room where the other teammates are waiting. Secondly, each move a layer can be rotated only 90°.

Given initial cubes configurations, return the minimum number of moves required to obtain the same configuration on both cubes. The time is short, so you can make only 2 moves.

Example

For

firstCube = [[0, 0, 0, 0], [1, 1, 1, 1], [2, 2, 2, 2], 
             [3, 3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5]]
and

secondCube = [[5, 0, 3, 0], [1, 4, 1, 2], [5, 5, 2, 2],
              [3, 4, 3, 4], [0, 2, 0, 4], [3, 1, 5, 1]]
the output should be
solution(firstCube, secondCube) = 1.

Here is what the first cube looks like:



And here is what the second cube looks like:



If the first teammate rotates the upper layer to the left and the second teammate rotates the left layer backwards, both of them will get the following configuration:



Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] array.array.integer firstCube

An array representing the colors on the sides of the first cube. firstCube[0] and firstCube[1] stand for the upper and lower sides respectively, firstCube[2] and firstCube[3] - for right and left sides, firstCube[4] and firstCube[5] - for front and back sides. Each of these 6 arrays contains 4 elements. It's guaranteed that firstCube contains 4 elements of each color. Here is how this arrays' elements are placed on each side (on the picture there are indices of corresponding arrays):

 

Guaranteed constraints:
firstCube.length = 6,
firstCube[i].length = 4,
0 ≤ firstCube[i][j] ≤ 5.

[input] array.array.integer secondCube

An array representing the colors on the sides of the second cube in the same format as for the first cube.

Guaranteed constraints:
secondCube.length = 6,
secondCube[i].length = 4,
0 ≤ secondCube[i][j] ≤ 5.

[output] integer

The number of moves required to obtain the same configurations on the Rubik's cubes if it is not greater than 2, and -1 otherwise.

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
int solution(arr_arr_integer firstCube, arr_arr_integer secondCube) {

}
