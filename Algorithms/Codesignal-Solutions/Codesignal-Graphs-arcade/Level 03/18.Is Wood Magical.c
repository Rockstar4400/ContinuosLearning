/*
NOT LIKED

Not long ago you got lost in the nearby woods when walking with your friend. You managed to get out of it,
 but no thanks to you: your friend was the one who drew the map of the woods and managed to find a way home. 
 That embarrassed you quite a lot, so you decided to go out there to the other woods, get lost there and make your way home without any help.

The first part of your plan went smoothly, and now you're completely lost in unknown woods. You're on your 
own but for the map wmap you drew, and now you simply need to make it home, preferably before it gets too dark. 
To make things more interesting, you decided to find something unusual about the map you drew. Since you like 
even numbers even more than getting lost in the woods, you want to check if the map contains cycles only of even length.
 You firmly believe that such woods are magical, so you'll have something to tell your friend when you make it out safely.

Given the number of meadows in the woods n and the map representing their connections wmap, check if this 
map contains only cycles of even length.

Example

For n = 5 and wmap = [[1, 2], [1, 3], [1, 4], [0, 2], [4, 0]], the output should be
solution(n, wmap) = true.



There is only one cycle: 1 - 4 - 0 - 2 and its length is 4, which is an even number.

For n = 5 and wmap = [[1, 2], [1, 3], [1, 4], [0, 2], [4, 0], [1, 0]], the output should be
solution(n, wmap) = false.



There is a cycle 1 - 4 - 0, which length is 3 - an odd number.

Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] integer n

The number of vertices on the map.

Guaranteed constraints:
1 ≤ n ≤ 105.

[input] array.array.integer wmap

Edges drawn on the map. wmap[i] for each valid i contains two elements and represents a road that connects wmap[i][0] and wmap[i][1].
It is guaranteed that between any two vertices there is no more than one edge.

Guaranteed constraints:
0 ≤ wmap.length ≤ 96917,
wmap[i].length = 2,
0 ≤ wmap[i][j] < n.

[output] boolean

true if there are only cycles with even length in the map and false otherwise.

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
