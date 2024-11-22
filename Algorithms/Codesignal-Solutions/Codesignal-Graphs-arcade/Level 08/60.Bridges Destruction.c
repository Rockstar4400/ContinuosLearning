/*
You are the son of the leader of a tribe living on a remote archipelago. It consists of several islands connected by bidirectional bridges. You think your father is too old to be a leader, and would like to prove it to others. The Council of Elders will be convened tomorrow, and this is your best chance to show that the things don't go as well as they used to when your father was young.

You decided to destroy one bridge of the archipelago (they are too strong, so you don't have enough time to destroy several bridges). All elders live on the island a, and the council will take place on the island b. You want to make sure that the elders see the destruction, so you need to destroy such a bridge that lies on the path between a and b. This is your only chance, so the bridge should belong to each path between a and b.

As the first step you want to calculate the number of suitable bridges. Given the bridges configuration and information about islands a and b, return the number of bridges which destruction will definitely be noted by the elders.

Example

For

bridges = [[1, 2],
           [0],
           [0]]
a = 0, and b = 2,
the output should be solution(bridges, a, b) = 1.

Here's an image showing the bridges between the islands:



Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] array.array.integer bridges

Adjacency list representing your archipelago.
It is guaranteed that if i is present in bridges[j] then j is represent in bridges[i].
There are at most one bridge between each pair of islands.
There is no bridge connecting some island to itself.

Guaranteed constraints:
1 ≤ bridges.length ≤ 3000,
0 ≤ bridges[i].length ≤ 15,
0 ≤ bridges[i][j] < bridges.length,
0 ≤ sum(bridges[i].length) ≤ 10000.

[input] integer a

0-based index of the island where the elders live.

Guaranteed constraints:
0 ≤ a < bridges.length.

[input] integer b

0-based index of the island where the council will take place.

Guaranteed constraints:
0 ≤ b < bridges.length.

[output] integer

The number of bridges you can destroy.

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
int solution(arr_arr_integer bridges, int a, int b) {

}
