/*
Once upon a time, in a kingdom far, far away, there lived a King Byteasar II. There was nothing special about him or his kingdom. As a mediocre ruler, he preferred hunting and feasting over doing anything about his kingdom's prosperity.

Luckily, his adviser, the wise magician Bitlin, worked for the kingdom's welfare day and night. However, since there was no one to advise him, he completely forgot about one important thing: the roads! Over the years most of the two-way roads built by Byteasar's predecessors were forgotten and no longer traversable. Only a few roads can still be used.

Bitlin wanted each pair of cities to be connected, but couldn't find a way to figure out which roads are missing. Desperate, he turned to his magic crystal ball for help. The crystal showed him a programmer from the distant future: you! Now you're the only one who can save the kingdom. Given the existing roads and the number of cities in the kingdom, you should use the most modern technologies and find out which roads should be built again to connect each pair of cities. Since the crystal ball is quite old and meticulous, it will only transfer the information if it is sorted properly.

The roads to be built should be returned in an array sorted lexicographically, with each road stored as [cityi, cityj], where cityi < cityj.

Example

For cities = 4 and roads = [[0, 1], [1, 2], [2, 0]],
the output should be
solution(cities, roads) = [[0, 3], [1, 3], [2, 3]].

See the image below: the existing roads are colored black, and the ones to be built are colored red.


Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] integer cities

The number of cities in the kingdom.

Guaranteed constraints:
1 ≤ cities ≤ 100.

[input] array.array.integer roads

Array of roads in the kingdom. Each road is given as a pair [cityi, cityj], where 0 ≤ cityi, cityj < cities and cityi ≠ cityj. It is guaranteed that no road is given twice.

Guaranteed constraints:
0 ≤ roads.length ≤ 5000,
roads[i].length = 2,
0 ≤ roads[i][j] < cities.

[output] array.array.integer

A unique array of roads that should be built sorted as described above. There's no need to build looping roads, i.e. roads that lead back from a city to itself.

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
arr_arr_integer solution(int cities, arr_arr_integer roads) {

}
