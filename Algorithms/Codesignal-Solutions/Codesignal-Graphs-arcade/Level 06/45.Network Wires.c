/*
NOT LIKED

As a director of a large company, you try to do your best to make the working environment as efficient as possible. However, it's difficult to do so when even the hardware used in the office is not efficient: there are too many wires connecting your employees' computers.

Naturally, you decided to minimize their number by getting rid of some wires. There's only one constraint: if it is possible to deliver information from one computer to another one using the wires, it should still be possible to do so after the renovation. You would also like to minimize the total wires length, because the longer the wires, the more it possible for you to trip over them at some point.

Given the plan of your n office computers and the wires connecting them, find the minimum resulting length of the wires after removing some of them according to the constraints above.

Example

For n = 7 and

wires = [[0, 1, 1], [2, 0, 2], [1, 2, 3], [3, 4, 1],
         [4, 5, 2], [5, 6, 3], [6, 3, 2]]
the output should be solution(n, wires) = 8.



The best way is to remove wires 3 and 6 (1-based).

Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] integer n

The number of computers in your office.

Guaranteed constraints:
1 ≤ n ≤ 100.

[input] array.array.integer wires

Information about the wires connecting computers. For each valid i, wires[i] contains three numbers: wires[i][0] and wires[i][1] stand for the ids of computers ith wire connects, and wires[i][2] stands for the length of this wire.
It is guaranteed that there is no more than one wire between each pair of computers.

Guaranteed constraints:
0 ≤ wires.length ≤ n · (n - 1) / 2,
wires[i].length = 3,
0 ≤ wires[i][0], wires[i][1] < n,
0 ≤ wires[i][2] ≤ 100,
wires[i][0] ≠ wires[i][1].

[output] integer

The minimum resulting length of the wires after removing some of them.

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
