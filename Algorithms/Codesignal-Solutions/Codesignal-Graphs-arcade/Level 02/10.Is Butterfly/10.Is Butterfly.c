/*
NO LIKED

You decided to create an automatic image recognizer that will determine the object in the image based on its contours. The main recognition system is already implemented, and now you need to start the teaching process.

Today you want to teach your program to recognize butterfly patterns, which means that you need to implement a function that, given the adjacency matrix representing the contour, will determine whether it's a butterfly or not.

The butterfly contour looks like this:

A butterfly

Given the object's contour as an undirected graph represented by adjacency matrix adj determine whether it's a butterfly or not.

Example

For

adj = [[false, true, true, false, false],
       [true, false, true, false, false],
       [true, true, false, true, true],
       [false, false, true, false, true],
       [false, false, true, true, false]]
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
adj.length == 5,
adj[i].length == 5.

[output] boolean

true if the given contour is a butterfly, false otherwise.

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
