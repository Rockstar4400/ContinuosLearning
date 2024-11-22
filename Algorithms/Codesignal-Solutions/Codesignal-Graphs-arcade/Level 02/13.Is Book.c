/*
You decided to create an automatic image recognizer that will determine the object in the image based on its contours. The main recognition system is already implemented, and now you need to start the teaching process.

Today you want to teach your program to recognize book patterns, which means that you need to implement a function that, given the adjacency matrix representing the contour, will determine whether it's a book or not.

A book consists of a base and may have any number of pages.
The book's base consists of a single edge connecting two nodes, and it is a common edge for all the pages. Besides that, every page has only one node connected to both sides of the base.
Here is an example of a book:

Book

Given the object's contour as an undirected graph represented by its adjacency matrix adj determine whether it's a book or not.

Example

For

adj = [[false, true, true, true],
       [true, false, true, true],
       [true, true, false, false],
       [true, true, false, false]]
the output should be
solution(adj) = true.

Here's how the given graph looks like:

Example

Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] array.array.boolean adj

An adjacency matrix of an undirected graph.

Guaranteed constraints:
2 ≤ adj.length < 100,
adj[i].length == adj.length.

[output] boolean

true if the given contour is a book, false otherwise.

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
