/*
You are the leader of a tribe living on a remote archipelago that consists of several islands connected by bidirectional bridges. Vegetarianism is the main trend of young aborigines of your tribe, and as an old-school man you are certainly not impressed. You decided to show teenagers how exciting hunting could be.

Every year antelopes migrate from island a to island b (antelopes are not stupid, so they have chosen such a and b that there is at least one path between them). Your troops have prepared a trap, and now you should chose on one of the islands of your archipelago to set it. Migration is a rare event that doesn't last long, so you have only one chance to do this right. All the conversations about lousy vegetables really annoy you, so you want to make sure that the trap will be set in such way that antelopes will definitely fall into it.

Given the number of islands, the bridges configuration and information about islands a and b, find all the islands lying on every path from a to b. Note, that islands a and b shouldn't be included in the answer, since you won't be able to set a trap unnoticed there and the antelopes will be scared away.

Example

For islands = 4,

bridges = [[0, 1],
           [1, 2],
           [2, 0],
           [2, 3]]
a = 0, and b = 3, the output should be
solution(islands, bridges, a, b) = [2].

Here's an image showing the bridges between the islands:



Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] integer islands

The number of islands in your archipelago.

Guaranteed constraints:
2 ≤ islands ≤ 2000.

[input] array.array.integer bridges

A list of bidirectional bridges representing your archipelago.
For each i bridges[i] has the format [island1, island2] and represents a bridge connecting island1 and island2.
There are at most one bridge between each pair of islands.
There is no bridge connecting some island to itself.

Guaranteed constraints:
1 ≤ bridges.length ≤ 3000,
bridges[i].length = 2,
0 ≤ bridges[i][j] < islands.

[input] integer a

0-based index of the island where the antelopes start their migration.

Guaranteed constraints:
0 ≤ a < islands.

[input] integer b

0-based index of the island where the antelopes end their migration.

Guaranteed constraints:
0 ≤ b < islands,
a ≠ b.

[output] array.integer

The list of all the islands lying on every path from a to b sorted in increasing order by their indices.

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
arr_integer solution(int islands, arr_arr_integer bridges, int a, int b) {

}
