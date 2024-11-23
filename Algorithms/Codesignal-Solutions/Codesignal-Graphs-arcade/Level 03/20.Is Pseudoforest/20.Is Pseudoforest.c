/*
You and your friend are walking in the woods. You are gathering mushrooms and catching butterflies, and your friend is drawing a map of the woods: he is a very cautious person, who doesn't want to get lost. When you get tired of running around, you decide to check out the map your friend has drawn so far, and it strikes you: looks like the woods you're walking in represent a pseudoforest!

Since you're a programmer and think in terms of algorithms, you need to write a function that, given a map, determines whether it is a pseudoforest or not. The map your friend drew represents a graph wmap of n vertices. A map is called pseudoforest if each of its connected components contains no more than one cycle.

Example

For n = 7 and wmap = [[0, 1], [1, 2], [2, 3], [3, 1], [3, 4], [5, 6]], the output should be
solution(n, wmap) = true.



One of the connected components contains only one cycle (1 - 2 - 3), and the other one has no cycles at all.

For n = 7 and wmap = [[0, 1], [1, 2], [2, 3], [3, 1], [3, 4], [4, 0], [5, 6]], the output should be
solution(n, wmap) = false.



There are three cycles in one of the connected components:

1 - 2 - 3;
1 - 3 - 4 - 0;
0 - 1 - 2 - 3 - 4.
Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] integer n

Number of vertices in a map.

Guaranteed constraints:
1 ≤ n ≤ 105.

[input] array.array.integer wmap

Edges drawn on the map. wmap[i] contains two elements and represents one edge for each valid i.
It is guaranteed that between any two vertices there is no more than one edge.

Guaranteed constraints:
0 ≤ wmap.length ≤ 105,
wmap[i].length = 2,
0 ≤ wmap[i][j] < n,
wmap[i][0] ≠ wmap[i][1].

[output] boolean

true if wmap represents a pseudoforest and false otherwise.

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
bool solution(int n, arr_arr_integer wmap) {

}
