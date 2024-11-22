/*
Not long ago you discovered a wonderful tree in the nearby woods that made you very curious about the greenery around you. You went to the nearby woods and drew various plants in your notebook. The plants in the woods have various structures: some of them even contain loops!

Anyway, for now you are interested only in trees. You came up with a brand new property: you call a tree a caterpillar if there exists a path in it, such that each vertex of a tree either belongs to this path or is connected to one of its vertices by a single edge. To find out more about them, you would like to write a program that will find all interesting trees in the structures you drew in your notebook.

The plants you drew consist of n vertices and are connected by several edges. Calculate the number of regular trees and caterpillar trees in the structures you drew in your notebook.

Example

For n = 21 and

edges = [[0, 1], [1, 2], [2, 3], [2, 4], [4, 5], [4, 6], [4, 7],
         [4, 8], [4, 9], [4, 10], [10, 11], [11, 12], [11, 13],
         [11, 14], [14, 15], [14, 16], [14, 17], [14, 18], [14, 19]]
the output should be solution(n, edges) = [2, 2].



There are two connected components and both of them are trees and caterpillar trees.

For n = 22 and

edges = [[0, 1], [1, 2], [2, 3], [2, 4], [4, 5], [4, 6], [4, 7],
         [4, 8], [4, 9], [4, 10], [10, 11], [11, 12], [11, 13],
         [11, 14], [14, 15], [14, 16], [14, 17], [14, 18], [14, 19], [13, 20]]
the output should be solution(n, edges) = [2, 1].



The first connected component is a tree, but not a caterpillar tree, because vertex 20 is not directly connected to the central path.

Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] integer n

The number of vertices in the structures drawn in your notebook.

Guaranteed constraints:
1 ≤ n ≤ 105.

[input] array.array.integer edges

Edges drawn in the notebook. edges[i] for each valid i contains two elements and represents an edge that connects edges[i][0] and edges[i][1].
It is guaranteed that between any two vertices there is no more than one edge.

Guaranteed constraints:
0 ≤ edges.length ≤ 105,
edges[i].length = 2,
0 ≤ edges[i][j] < n.

[output] array.integer

Array of two integers, where the first represents the number of trees in your woods and the second represents the number of caterpillar trees in it.

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
arr_integer solution(int n, arr_arr_integer edges) {

}
