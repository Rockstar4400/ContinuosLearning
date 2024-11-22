/*
You are the leader of a tribe living on a remote archipelago. Your tribe has recently decided to find a new, more comfortable and less remote place for everybody and moved to a new archipelago. It's a new and unexplored place that can hide many dangers, so you started off by drawing its map. You got a map of n islands and several bridges connecting them. Of course, not all the islands are necessarily connected: there may be no route from one island to another even through other islands.

Since you're just exploring the archipelago, there are not enough bridges yet, and its connectivity is not perfect. You define the connectivity as the number of unsafe bridges on the archipelago, and call a bridge unsafe if removing it disconnects some pair of previously connected islands. More formally, an unsafe bridge is such a bridge that removing it increases the number of pairs of islands (v, u) such that u is unreachable from v.

You decided to build some new bridges to connect more islands of your new home. To begin with, you drew a plan containing a list of newBridges that you're going to build in the exact given order. Since you're short of resources after all the moving, you'd like to make sure that building each new bridge is really necessary. Given the number of islands n and the existing bridges, find the sum of connectivities of the archipelago after building each bridge from newBridges consequentially modulo 109 + 7 (hopefully this value will be descriptive enough).

Example

For n = 6, bridges = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]], and
newBridges = [[2, 4], [1, 3], [3, 5], [0, 5]], the output should be
solution(n, bridges, newBridges) = 6.

After building the 1st bridge connectivity will be equal to 3;
After building the 2nd bridge connectivity will be equal to 2;
After building the 3rd bridge connectivity will be equal to 1;
After building the 4th bridge connectivity will be equal to 0.
So, the summary connectivity is 3 + 2 + 1 + 0 = 6.

Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] integer n

The number of islands in the archipelago.

Guaranteed constraints:
2 ≤ n ≤ 105.

[input] array.array.integer bridges

Information about the bridges connecting the islands in the archipelago. For each valid i, bridges[i] contains two numbers bridges[i][0] and bridges[i][1] that stand for the ids of the islands the ith bridge connects.
It is guaranteed that there is no more than one bridge between each pair of islands.

Guaranteed constraints:
0 ≤ bridges.length ≤ 105,
bridges[i].length = 2,
0 ≤ bridges[i][0], bridges[i][1] < n,
bridges[i][0] ≠ bridges[i][1].

[input] array.array.integer newBridges

Information about the bridges you're going to build. For each valid i, newBridges[i] contains two numbers newBridges[i][0] and newBridges[i][1] that stand for the ids of the islands the ith new bridge will connect.
It is guaranteed that you will not try to build already existing bridge.

Guaranteed constraints:
0 ≤ newBridges.length ≤ 105,
newBridges[i].length = 2,
0 ≤ newBridges[i][0], newBridges[i][1] < n,
newBridges[i][0] ≠ newBridges[i][1].

[output] integer

The sum of connectivities of the archipelago after building each bridge from newBridges consequentially modulo 109 + 7.

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
int solution(int n, arr_arr_integer bridges, arr_arr_integer newBridges) {

}
