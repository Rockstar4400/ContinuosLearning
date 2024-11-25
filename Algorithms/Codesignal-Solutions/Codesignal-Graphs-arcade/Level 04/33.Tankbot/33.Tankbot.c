/*
Little Ratiorg was so tired of being bullied by other bots and mighty CodeFighters that he decided to join the Ninja Bots Training camp. It is known that any bot that manages to solve all the challenges becomes an ultimate master of algorithms, and that is exactly what Ratiorg is aiming at.

His training is now officially over, and Ratiorg is ready to get back to CodeSignal and show who's the boss. To make his appearance more imposing, Ratiorg is planning to take a tank and drive it back home. However, the bot will have to travel through the forest covered in trees so strong that they can hold back even a tank, so not every tank can make it through this forest.

Since Ratiorg finished the trainings as the best student, he can pick any tank he likes. There are a lot of tanks of all possible sizes. All available tanks are square, can only move in one of the four directions (leftwards, rightwards, downwards or upwards), and can't move over the trees.

The Ninja Bots Training camp is located at the top left corner of the forest, and CodeFigts bots camp is located at its bottom right corner. Given the map of the forest, find the maximum size of the tank Ratiorg can take in order to get from the training camp to the CodeFigths bot camp.

Example

For

forest =  [[true, true, true,  true],
           [true, true, false, true],
           [true, true, true,  true],
           [true, true, true,  true]]
the output should be
solution(forest) = 2.



For

forest = [[false, true, true],
          [true,  true, true]]
the output should be
solution(forest) = 0.

There is a tree right at the entrance of the Training Camp, so there's no way to get out of there by tank.



Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] array.array.boolean forest

A rectangular matrix of booleans which represents grid of the forest. true represents a free cell, and false represents a cell with a tree on it.

Guaranteed constraints:
2 ≤ forest.length ≤ 120,
2 ≤ forest[0].length ≤ 120.

[output] integer

The maximum length of the tank Ratiorg can take. If there is no way to get home by tank, return 0 instead.

O(log(min(forest.length, forest[0].length)) · forest.length · forest[0].length · min(forest.length, forest[0].length)2)

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
int solution(arr_arr_boolean forest) {

}
