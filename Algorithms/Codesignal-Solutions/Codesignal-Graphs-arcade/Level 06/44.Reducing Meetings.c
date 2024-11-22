/*
You've just become a director of a big company. As it turned out, the company favors one-on-one meetings, which is why there are so many of them each week. Each meeting has an integer efficiency value that shows how much profit it gives the company. In order to make your employees chat less and work more, you'd like remove some one-on-one's from the weekly schedule and leave as few meetings as possible. Of course, there are some restrictions:

it should still be possible to deliver information from any employee to any other one (probably, it'll take a bunch of meetings to deliver a piece of information from one worker to the other one);
there should be as few meetings left as possible;
the total efficiency should be the maximum possible. The total efficiency equals the sum of efficiencies of all one-on-one's left.
Given the number of people in the company n and the list of current one-on-one meetings with their efficiency values, find the best total efficiency of the reduced scheme.

Example

For n = 4 and meetings = [[0, 1, 3], [1, 2, 2], [3, 0, 1], [3, 2, 5]],
the output should be
solution(n, meetings) = 10.

The best way to reduce meetings is to remove the 3rd (1-based) meeting from the list.



Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] integer n

The number of people working in your company.

Guaranteed constraints:
1 ≤ n ≤ 100.

[input] array.array.integer meetings

Information about the meetings. For each valid i, meetings[i] contains three numbers: meetings[i][0] and meetings[i][1] stand for ids of the employees between which the meeting is hold and meetings[i][2] stands for the efficiency of this meeting.
It is guaranteed that there is no more than one meeting between each pair of workers, and that initially it is possible to deliver information from any colleague to any other one.

Guaranteed constraints:
n - 1 ≤ meetings.length ≤ n · (n - 1) / 2,
meetings[i].length = 3,
0 ≤ meetings[i][0], meetings[i][1] < n,
0 ≤ meetings[i][2] ≤ 100,
meetings[i][0] ≠ meetings[i][1].

[output] integer

The best total efficiency of the reduced meetings scheme.

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
int solution(int n, arr_arr_integer meetings) {

}
