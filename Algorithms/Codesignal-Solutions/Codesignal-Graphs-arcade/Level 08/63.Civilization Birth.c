/*
You are the leader of a tribe living on a remote archipelago. It looks like your tribe is lagging behind the most modern civilizations, so it's about time you start to get closer to them. In order to do this, you decided to start enforcing new laws.

As a smart ruler, you came up with all the laws yourself and numbered them from 1 to count in the order of decreasing importance. You're also a generous leader, so you allowed the aborigines to chose the laws that should be enacted. Each aborigines chose two laws that most important to them, and voted either for or against them.

Fairness is also one of your many good traits, so you want to satisfy every aborigine on your island. An aborigine will be satisfied if at least one of his proposals is taken, i.e. either one of the laws he voted for is enacted, or one of those he voted against is not enacted.

Given the votes array denoting aborigines' votes and the number of laws count, implement a function that will determine which laws should be enacted to satisfy the entire tribe. If there are several solutions, choose the one with the first law (the most important one) enacted. If there are still several options, chose the one with the first law enacted, and so on.

Example

For count = 2 and

votes = [[ 1,  2],
         [ 1, -2],
         [-2, -1]]
, the output should be
solution(count, votes) = [1, 0].

The first aborigine wants the first and the second law be enacted. The second aborigine wants the first law be enacted and doesn't want the second law be enacted. The third aborigine doesn't want the first and and the second laws be enacted. The optimal solution is thus to enact the first law and leave out the second law.

Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] integer count

The number of laws.

Guaranteed constraints:
1 ≤ count ≤ 150.

[input] array.array.integer votes

votes[i] is the array of wishes of the ith aborigine.
votes[i][j] is positive if the ith aborigine wants the law with number abs(votes[i][j]) to be enacted and negative otherwise.

Guaranteed constraints:
1 ≤ votes.length ≤ 150,
votes[i].length = 2,
1 ≤ abs(votes[i][j]) ≤ count.

[output] array.integer

Array of count numbers. The ith number should be 1 if the ith law should be enacted and 0 otherwise.
If there is no solution, return an array of size count filled with -1.

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
arr_integer solution(int count, arr_arr_integer votes) {

}
