/*

NOT LIKED

Not long ago your best programmer retired. He was the best programmer in the town, and now there is no one in the company who can take his place. As a director and a former programmer, you decided to take his place for a while.

Your company is really big and has n its very own servers and a lot of wires of different lengths connecting them. Of course, the information can be delivered from any server to any other one. Now you should remove some of the wires so that:

information can still be delivered from any server to any other one;
the total length of the remaining wires is as small as possible.
Years of office work did leave their mark, so you're not sure if you can handle the task right away. To begin with, you decided to start off by finding k wires of the minimal length that will definitely be left after you remove some of the excessive wires. This little cheat helped you to write a script that returns a list of wires that should be removed.

However, it turned out that removing excessive wires is no yet possible because of other more pressing matters, so you keep putting the task off. The problem is, when the time passes, some of the wires break down and are replaced by the new ones. Each time such an update occurs, you have to recalculate the result. You're naturally not too happy about this, so you would like to write a program that will do the job for you.

Given the list of updates containing the information about the wires replacements, for each update calculate the total length of the k shortest wires that shouldn't be removed as excessive according to the constraints above.

Example

For n = 4, wires = [[0, 1, 1], [1, 2, 2], [2, 3, 3], [3, 0, 4]],
k = 3, and updates = [[0, 1, 5], [3, 0, 2]], the output should be
solution(n, wires, k, updates) = [9, 7].

Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] integer n

The number of servers in the company.

Guaranteed constraints:
1 ≤ n ≤ 105.

[input] array.array.integer wires

Information about the wires connecting the servers. For each valid i, wires[i] contains three numbers: wires[i][0] and wires[i][1] stand for ids of the servers which this wire connects and wires[i][2] stands for the length of this wire.
It is guaranteed that there is no more than one wire between each pair of servers, and that initially it is possible to deliver information from any server to any other one.

Guaranteed constraints:
n - 1 ≤ wires.length ≤ min(n * (n - 1) / 2, 105),
wires[i].length = 3,
0 ≤ wires[i][0], wires[i][1] < n,
0 ≤ wires[i][2] ≤ 105,
wires[i][0] ≠ wires[i][1].

[input] integer k

The number of the shortest wires that won't be removed as excessive and information about which you would like to have after each update.

Guaranteed constraints:
0 ≤ k ≤ min(10, n - 1).

[input] array.array.integer updates

Information about wires updates. For each valid i, updates[i] contains three numbers: updates[i][0] and updates[i][1] stand for ids of the servers which this wire connects and updates[i][2] stands for the new length of this wire.
It is guaranteed that the updates are always applied to one of the existing wires.

Guaranteed constraints:
0 ≤ updates.length ≤ 104,
updates[i].length = 3,
0 ≤ updates[i][0], updates[i][1] < n,
0 ≤ updates[i][2] ≤ 105,
updates[i][0] ≠ updates[i][1].

[output] array.integer

For each update, find the total length of the shortest k wires after excessive wires are removed.

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
arr_integer solution(int n, arr_arr_integer wires, int k, arr_arr_integer updates) {

}
