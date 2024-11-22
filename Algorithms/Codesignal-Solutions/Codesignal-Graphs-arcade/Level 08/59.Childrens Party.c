/*
NOT LIKED

You are the leader of a tribe living on a remote island covered by a rectangular grid. Your tribe consists of several families, with a single child in each family. Each cell is occupied by exactly one family. Today is a special day: a children's party is organized! The ultimate game was prepared to keep the children entertained. At the very beginning of the game, all children of the island have to form several teams. Members of the same team should be able to communicate with each other, so every child of a team should be able to reach every other child of this team. A child can move from one cell to another if these two cells are adjacent (they have a common side). Children are strictly prohibited to go beyond the island.

Because of the wild animals living on your island, it is not always safe to move from a cell to one of the adjacent ones: hungry beasts are watching the paths between them closely, hoping to spot a child and attack them. For each cell you know the paths the animals are watching, with respect to this cell. The children are also aware of the dangerous paths and won't take them into consideration when splitting into teams.

Given the masks of the directions the animals are watching, find the minimum possible number of teams the children can form.

Example

For

directions = [[13, 14,  9],
              [4,   1,  5],
              [7,  10, 11]]

the output should be solution(directions) = 1.

Here's an image showing which paths are not safe:



Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] array.array.integer directions

A rectangular matrix. directions[i][j] is the mask representing the paths the animals at the cell (i, j) are watching, where i represents the row and j represents the column, both 0-based.

If the kth bit of directions[i][j] is equal to 0, the children can move from this cell in the kth direction (0-based), where directions are numbered as follows: right, down, left, up.

Guaranteed constraints:
1 ≤ directions.length < 100,
1 ≤ directions[i].length < 99,
0 ≤ directions[i][j] ≤ 15.

[output] integer

The minimum number of teams the children can form.

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
int solution(arr_arr_integer directions) {

}
