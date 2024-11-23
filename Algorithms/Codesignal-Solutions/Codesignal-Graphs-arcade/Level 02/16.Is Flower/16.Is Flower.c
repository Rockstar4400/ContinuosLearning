/*
You decided to create an automatic image recognizer that will determine the object in the image based on its contours. The main recognition system is already implemented, and now you need to start the teaching process.

Today you want to teach your program to recognize flower patterns, which means that you need to implement a function that, given the adjacency matrix representing the contour, will determine whether it's a flower or not.

The flower contour consists of several (at least one) petals.
Petal contours are the same-sized (of size greater than 2) complete graphs with exactly one common vertex.
Here are some examples of the flower contours:

flowers

Given the object's contour as an undirected graph represented by adjacency matrix adj determine whether it's a flower or not.

Example

For

adj = [[false, true, true, true, true],
       [true, false, true, false, false],
       [true, true, false, false, false],
       [true, false, false, false, true],
       [true, false, false, true, false]]
the output should be
solution(adj) = true.

Here's what the given graph looks like:

Example

Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] array.array.boolean adj

An adjacency matrix of an undirected graph.

Guaranteed constraints:
2 < adj.length < 100,
adj[i].length == adj.length .

[output] boolean

true if the given contour is a flower, false otherwise.

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
bool solution(arr_arr_boolean adj) {

}
