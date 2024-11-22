/*
NOT LIKED

Your company uses local network consisting of n computers some pairs of which are connected by wires. Each wire has its specific speed of data transmission which is the same for both directions. Your boss wants to cut down on the expenses and leave only n - 1 wires. His only concern is that the network should still be connected, so he is willing to get rid of a random wire.

It pains you to see such a waste: efficiency is at stake! In order to explain your boss how wrong his decision is, you'd like to find the sums of speeds of data transmission along each edge of the most optimal scheme with n - 1 wires, and for the second optimal one. The difference between them should convince your boss how important efficiency is, so that is what the function you need to implement should find.

Example

For n = 4
and

wires = [[1, 2, 1], 
         [1, 4, 3], 
         [2, 3, 3],
         [2, 4, 2],
         [3, 4, 4]]
the output should be
solution(n, wires) = 1.

The most optimal scheme contains wires between three pairs of computers (1 and 2, 2 and 4, and 2 and 3), with the total speed equal to 6. The second optimal scheme contains wires between computers 1 and 2, 2 and 4, and 3 and 4, summing up to the total speed of 7.



Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] integer n

The number of computers.

Guaranteed constraints:
3 ≤ n ≤ 100.

[input] array.array.integer wires

A two-dimensional array representing the wires. Each element of this array is given in the format [comp1, comp2, speed] and represents a wire that connects comp1 to comp2 (both given 1-based) and has a transmission speed of speed.

It is guaranteed that there are at least two different connected schemes with n - 1 wires.

Guaranteed constraints:
3 ≤ wires.length ≤ n * (n - 1) / 2,
wires[i].length = 3,
1 ≤ wires[i][0], wires[i][1] ≤ n,
0 ≤ wires[i][2] ≤ 1000.

[output] integer

The difference between the sums of speeds of data transmission along each edge for the most optimal scheme and for the second optimal scheme.

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
int solution(int n, arr_arr_integer wires) {

}
