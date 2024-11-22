/*
Wandering in the woods, you noticed a squirrel sitting in node A of a tree. It didn't look like it was going to sit there forever though: there was a delicious nut in node B, and the squirrel looked determined to reach it by moving via the branches of the tree. You grabbed your camera to take a picture of the squirrel in node C (that's the only node that would make the picture perfect), but was too late: the smart rodent had already made it to node B.

There are still a lot of nuts on the tree, and it seems that the squirrel is going to try and take them all. Looks like the squirrel is smart enough to follow only the shortest paths along the tree branches, which means you can now predict when the right opportunity to take a perfect picture arises. Given configuration of the tree and a bunch of triples consisting of numbers A, B and C, for each triple return true if the squirrel will run through node C on its path from A to B, and false otherwise.

It is guaranteed that each node has no more than 5 branches.

Example

For

tree = [1, 2,
        1, 3,
        2, 4,
        3, 5,
        3, 6]
and

triples = [[4, 6, 3],
           [1, 4, 2],
           [5, 6, 1]]
the output should be
solution(tree, triples) = [true, true, false].

Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] array.integer tree

An array of integers of even length, where a pair (tree[i], tree[i + 1]) for every even i corresponds to the branch in a tree that goes from node tree[i] to tree[i + 1], both 1-based.

Guaranteed constraints:
tree.length = 2 · (max(tree) - 1),
1 ≤ tree[i] ≤ 10000.

[input] array.array.integer triples

Triples of three integers in the format [A, B, C], where A stands for the initial squirrel position, B stands for its destination and C stands for the node at which the perfect picture can be taken, all 1-based.

Guaranteed constraints:
1 ≤ triples.length ≤ 10000,
triples[i].length = 3,
1 ≤ triples[i][j] ≤ n.

[output] array.boolean

Array of the same length as triples, where the ith element is true if and only if it will be possible to take a perfect picture in the situation corresponding to the ith triple.

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
arr_boolean solution(arr_integer tree, arr_arr_integer triples) {

}
