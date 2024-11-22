/*
NOT LIKED

You are the leader of a tribe living on a remote archipelago. It consists of several islands connected by bridges. All the bridges of your archipelago are narrow, so people often run into each other and fall into the water. To end this once and for all, you decided to make the traffic on all bridges go one-way.

You issued the corresponding decree as soon as this brilliant idea came to your mind, but unfortunately there is a problem: for some people some islands are now unreachable, which is quite frustrating for your subjects. To measure frustration of your tribe, you'd like to calculate the number of pairs (aborigine, island) such that the aborigine can't reach the island.

Given the number of people on each island crowd and the map of the bridges, find frustrations of the aborigines.

Example
For

bridges = [[1],
           [2],
           [1]]
and crowd = [4, 1, 2],
the output should be solution(bridges, crowd) = 3.

Here's how your archipelago looks like:



All the aborigines from the 1st and 2nd islands can't reach the 0th island.

Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] array.array.integer bridges

Adjacency list representing your archipelago.

Guaranteed constraints:
1 ≤ bridges.length ≤ 1000,
0 ≤ bridges[i].length ≤ 15,
0 ≤ bridges[i][j] < bridges.length.

[input] array.integer crowd

crowd[i] is the number of people stuck on the ith island (0-based).

Guaranteed constraints:
crowd.length = bridges.length,
1 ≤ crowd[i] ≤ 40.

[output] integer

Frustration of your tribe.

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
int solution(arr_arr_integer bridges, arr_integer crowd) {

}
