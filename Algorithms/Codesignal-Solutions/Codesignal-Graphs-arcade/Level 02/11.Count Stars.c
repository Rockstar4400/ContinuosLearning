/*
NO LIKED

You decided to create an automatic image recognizer that will determine the object in the image based on its contours. The main recognition system is already implemented, and now you need to start the teaching process.

Today you want to teach your program to recognize star patterns in the image of the night sky, which means that you need to implement a function that, given the adjacency matrix representing a number of contours in the sky, will find the number of stars in it.

The graph representing some contour is cosidered to be a star if it is a tree of size 2 or if it is a tree of size k > 2 with one internal node (which is a tree root at the same time) and k - 1 leaves.
Here is an example of some stars:

Stars

Given the sky objects' contours as an undirected graph represented by its adjacency matrix adj, calculate the number of stars in it.

Example

For

adj = [[false, true, false, false, false],
       [true, false, false, false, false],
       [false, false, false, true, false],
       [false, false, true, false, false],
       [false, false, false, false, false]]
the output should be
solution(adj) = 2.

Here's what the given graph looks like:

Example

Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] array.array.boolean adj

An adjacency matrix of an undirected graph.

Guaranteed constraints:
2 < adj.length ≤ 100,
adj[i].length == adj.length.

[output] integer

The number of star contours in the sky.

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
int solution(arr_arr_boolean adj) {

}
