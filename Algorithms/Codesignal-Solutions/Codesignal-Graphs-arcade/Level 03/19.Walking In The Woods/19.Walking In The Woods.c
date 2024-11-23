/*
After you got lost in the woods the last time, you made sure to memorize the entire map, so now you can walk around without the fear. When you were studying the map, you realized that it might be impossible to visit all the meadows walking on the roads. In order to get from one set of connected meadows to the other one has to go thought the thicket of thistle.

Naturally, you don't want to struggle through the thicket too often. Given the number of meadows n and the map of the woods wmap storing the information about the roads connecting them, calculate the minimal number of times you'd have to go off the roads in order to visit all the meadows in one run.

Example

For n = 5 and wmap = [[0, 1], [2, 1], [0, 2], [3, 4]], the output should be
solution(n, wmap) = 1.



Starting from any of first three meadows, you can visit any of them, then visit meadow 3 walking through thicket, and then visit meadow 4.
Starting from any of two last meadows, you can do the same thing.

For n = 6 and wmap = [[0, 1], [2, 1], [0, 2], [3, 4]], the output should be
solution(n, wmap) = 2.



Here you need to visit one more meadow that isn't connected to any of the other ones, so you'll need to walk through the thicket one more time.

Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] integer n

The number of meadows in the woods.

Guaranteed constraints:
1 ≤ n ≤ 105.

[input] array.array.integer wmap

Edges drawn on the map. wmap[i] for each valid i contains two elements and represents a road that connects wmap[i][0] and wmap[i][1].
It is guaranteed that between any two vertices there is no more than one edge.

Guaranteed constraints:
0 ≤ wmap.length ≤ 105,
wmap[i].length = 2,
0 ≤ wmap[i][j] < n.

[output] integer

The minimal number of times you'll need to walk through the thicket to visit all the meadows.

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
int solution(int n, arr_arr_integer wmap) {

}
