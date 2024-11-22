/*
NO LIKED

Once upon a time, in a kingdom far, far away, there lived a King Byteasar VIII. The king went down in history as a great warrior, since he managed to defeat a longtime enemy that had been capturing the kingdom's cities for more than a century. When the war was over, most of the cities were almost completely destroyed, so Byteasar decided to create new cities by merging them.

The king decided to merge each pair of cities cityi, cityi+1 for i = 0, 2, 4, ... if they were connected by one of the two-way roads running through the kingdom.

Initially, all information about the roads was stored in the roadRegister. Your task is to return the roadRegister after the merging is performed, assuming that after merging the cities re-indexation is done in such way that any city formed from cities a and b (where a < b) receives index a, and all the cities with numbers i (where i > b) get numbers i - 1.

Example

For

roadRegister = [
  [false, true,  true,  false, false, false, true ],
  [true,  false, true,  false, true,  false, false],
  [true,  true,  false, true,  false, false, true ],
  [false, false, true,  false, false, true,  true ],
  [false, true,  false, false, false, false, false],
  [false, false, false, true,  false, false, false],
  [true,  false, true,  true,  false, false, false]
]
the output should be

solution(roadRegister) = [
  [false, true,  true,  false, true ],
  [true,  false, false, true,  true ],
  [true,  false, false, false, false],
  [false, true,  false, false, false],
  [true,  true,  false, false, false]
]
Here's how the cities were merged:


Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] array.array.boolean roadRegister

Since cartography was not properly developed in the kingdom, the registers were used instead. A register is stored as a square matrix, with its size equal to the number of cities in the kingdom. If roadRegister[i][j] = true, then there is a road between the ith and the jth cities; the road doesn't exist otherwise.

It is guaranteed that there are no looping roads, i.e. roads that lead back to the same city it originated from.

Guaranteed constraints:
1 ≤ roadRegister.length ≤ 100,
roadRegister[0].length = roadRegister.length,
roadRegister[i][j] = roadRegister[j][i], i ≠ j,
roadRegister[i][i] = false.

[output] array.array.boolean

The roadRegister after all the cities are merged.

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
arr_arr_boolean solution(arr_arr_boolean roadRegister) {

}
