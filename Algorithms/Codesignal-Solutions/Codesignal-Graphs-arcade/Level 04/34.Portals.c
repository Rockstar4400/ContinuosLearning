/*
NOT LIKED

Little Ratiorg was so tired of being bullied by other bots and mighty CodeFighters that he decided to join the 
Ninja Bots Training camp. It is known that any bot that manages to solve all the challenges becomes an ultimate 
master of algorithms, and that is exactly what Ratiorg is aiming at.

Ratiorg has already improved his physical strength considerably, and now it's time to hone his mental skills. As it 
turned out, the bot has what it takes to be a great magician: he has what appears to be an infinite source of mana 
somewhere inside his little mechanical body. In the next challenge, Ratiorg will have to use it. The bot is standing 
in the top left corner of the rectangular grid, some cells of which are impassable. His goal is to make it to the 
bottom right corner in no more than maxTime seconds.

Ratiorg can move between two passable cells if they share a common side, and each move takes 1 second. He can also set 
an arbitrary number of portals into passable cells; moreover, he can even set them remotely and instantly, i.e. there's 
no need to reach the cell to set a portal there, and setting a portal takes no time. Ratiorg can instantly move between 
any pair of cells with portals. However, setting a portal to the cell at (x, y) costs manacost[x][y] mana points.

Given the maxTime and the manacost matrix, calculate the minimum amount of mana Ratiorg will have to use to finish the 
challenge in time.

Example

For maxTime = 4 and

manacost = [[1, -1, -1],
            [5, -1, -1],
            [4,  6,  8]]
the output should be solution(maxTime, manacost) = 0.

The cheapest way to get to the bottom right corner takes 4 seconds and doesn't require any portals.

For maxTime = 3 and

manacost = [[1, -1, -1],
            [5, -1, -1],
            [4,  6,  8]]
the output should be
solution(maxTime, manacost) = 5.

The best plan is to set portals into the top left and the bottom left corners (the total manacost equals 1 + 4 = 5). After that, you can reach the bottom left corner instantly and then make two moves rightwards in 2 seconds.

Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] integer maxTime

A non-negative integer, the maximum number of seconds you can spend to get to the bottom right corner.

Guaranteed constraints:
0 ≤ maxTime ≤ 200.

[input] array.array.integer manacost

A rectangular matrix. If manacost[x][y] > 0, then the cell (x, y) is passable and it costs manacost[x][y] mana points to set a portal into it. Otherwise cost[x][y] = -1, and the cell (x, y) is impassable.

It is guaranteed that both the top left corner (manacost[0][0]) and the bottom right corner (manacost[manacost.length - 1][manacost[0].length - 1]) are passable.

Guaranteed constraints:
1 ≤ manacost.length ≤ 300,
1 ≤ manacost[0].length ≤ 300,
-1 ≤ manacost[i][j] ≤ 1000.

[output] integer

The minimum number of mana points required to get to the bottom right corner.

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
int solution(int maxTime, arr_arr_integer manacost) {

}
