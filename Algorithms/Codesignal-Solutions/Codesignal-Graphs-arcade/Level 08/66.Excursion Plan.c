/*
You are the leader of a tribe living on a remote archipelago that consists of mn islands. As an innovative leader you decided to introduce a brand new address system. In order to do that you used the first m letters of the alphabet and came up with distinct names of length n for all the islands. The islands received new names according the their enumeration: island 0 got lexicographically smallest name, island 1 got the next name in the lexicographical order, and so on, with island with number mn - 1 having lexicographically greatest name.

To make your archipelago look perfect on the map you also reconstructed the bridges: now there is a bridge between a pair of islands (v, u) if and only if the last n - 1 letters of v's name are equal to the first n - 1 letters of u's name (for example, between abca and bcaa). The bridges are narrow, so they are only passable in one direction: from v to u.

Ambassador of a foreign tribe is visiting your archipelago, and you are planning to take the guests on the best excursion in their lives. The ideal excursion that you want to come up with visits each island exactly once, and its description (concatenated names of the islands in the order they are visited) is lexicographically smallest. Your task is to find the plan of such excursion, i.e. all the islands in the order they should be visited. Since there are many islands in your archipelago, you will need only a part of the plan at a time. Return the islands in this plan from lth to rth (0-based, both inclusive).

Example

For n = 2, m = 3, l = 0, and r = 8, the output should be
solution(n, m, l, r) = [0, 1, 3, 2, 7, 4, 5, 8, 6].



As you can see, 0 -> 1 -> 3 -> 2 -> 7 -> 4 -> 5 -> 8 -> 6 is a correct excursion plan.

Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] integer n

The length of islands names.

Guaranteed constraints:
1 ≤ n ≤ 105.

[input] integer m

The number of different letters used to build islands names.

Guaranteed constraints:
1 ≤ m ≤ 105,
1 ≤ mn + 1 · n ≤ 105.

[input] integer l

The left bound of the answer part you want to find.

Guaranteed constraints:
0 ≤ l < mn.

[input] integer r

The right bound of the answer part you want to find.

Guaranteed constraints:
l ≤ r < mn.

[output] array.integer

The part of the lexicographically smallest excursion plan, containing only islands of the optimal plan from lth to rth.

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
arr_integer solution(int n, int m, int l, int r) {

}
