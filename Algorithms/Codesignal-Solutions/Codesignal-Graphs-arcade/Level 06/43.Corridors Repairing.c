/*
NOT LIKED

You're working in a company that is specializing in optimizing various stuff. There are n rooms in your office connected by n corridors of different lengths. Your boss has told you that the company is going to repair all the corridors in the office one by one, and now you should choose one of the corridors that will be closed for repairs first.

Of course you, being a loyal employee of such a company, are quite fond of optimizations. That is why you want to close one of the corridors so that all the rooms are still connected to each other, and the total length of all the remaining corridors is the minimum possible. You understand that there can be more than one possible option, so now you want to calculate the number of different corridors that can be closed according to the conditions above.

Example

For n = 6 and

corridors = [[0, 1, 2], [1, 2, 3], [0, 2, 2], 
             [1, 3, 1], [2, 4, 2], [0, 5, 3]]
the output should be
solution(n, corridors) = 2.



Corridors connecting rooms 0 and 1 or rooms 0 and 2 can be closed for repairing.

Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] integer n

The number of rooms in the office.

Guaranteed constraints:
3 ≤ n ≤ 104.

[input] array.array.integer corridors

Information about the corridors connecting the rooms. For each valid i, corridors[i] contains three numbers: corridors[i][0] and corridors[i][1] stand for the ids of the rooms the ith corridor connects, and corridors[i][2] stands for the length of this corridor.
It is guaranteed that each room is reachable by corridors from any other one and that there is no more than one corridor between each pair of rooms.

Guaranteed constraints:
corridors.length = n,
corridors[i].length = 3,
0 ≤ corridors[i][0], corridors[i][1] < n,
0 ≤ corridors[i][2] ≤ 100,
corridors[i][0] ≠ corridors[i][1].

[output] integer

The number of corridors that can be removed to save connectivity of the rooms while keeping the total length of the corridors the minimum possible.

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
int solution(int n, arr_arr_integer corridors) {

}
