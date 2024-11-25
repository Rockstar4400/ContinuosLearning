/*
NOT LIKED

You've been studying trees a lot lately, and became an expert in caterpillar trees. 
Now that you know everything about them, you're ready to climb one. However, in order to climb 
such tree you need a special ladder that you call a mobius ladder.

A mobius ladder is a slightly modified proper ladder. Firstly, let's define what proper ladder 
is: a proper ladder is a ladder that can be represented by a graph containing two chains of vertices 
with n vertices in each one, where the ith vertex of the first chain is connected to the ith vertex 
of the second chain. For example, a proper ladder with 8 vertices looks like this:



A mobius ladder is a proper ladder with two more connections: the first vertex of the first chain is 
connected to the last vertex of the second chain, and last vertex of the first chain is connected 
to the first vertex of the second chain. For example, here is a mobius ladder with 8 vertices:



You found a ladder that can be represented by n vertices in the attic. Now you need to check if it 
is a mobius ladder, to make sure it can be used to climb a caterpillar tree.

Example

For n = 6 and ladder = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0]], the output should be
solution(n, ladder) = false.



For n = 8 and

ladder = [[0, 1], [0, 2], [0, 7], [1, 3], [1, 6], [2, 3],
          [2, 4], [3, 5], [4, 5], [4, 6], [5, 7], [6, 7]]
the output should be solution(n, ladder) = true.

This is the test from the description:



For n = 10 and

ladder = [[0, 1], [0, 3], [0, 7], [0, 9], [1, 2],
          [1, 4], [1, 8], [2, 3], [2, 5], [2, 9],
          [3, 4], [3, 6], [4, 5], [4, 7], [5, 6],
          [5, 8], [6, 7], [6, 9], [7, 8], [8, 9]]
the output should be solution(n, ladder) = false.



Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] integer n

An even integer, the number of vertices that represent your ladder.

Guaranteed constraints:
2 ≤ n ≤ 5 · 104.

[input] array.array.integer ladder

Edges of the ladder drawn in the plan. ladder[i] for each valid i contains two elements and represents an edge that connects ladder[i][0] and ladder[i][1].
It is guaranteed that between any two vertices there is no more than one edge.

Guaranteed constraints:
0 ≤ ladder.length ≤ 75000,
ladder[i].length = 2,
0 ≤ ladder[i][j] < n.

[output] boolean

true if the given ladder represents a mobius ladder, false otherwise.

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
bool solution(int n, arr_arr_integer ladder) {

}
