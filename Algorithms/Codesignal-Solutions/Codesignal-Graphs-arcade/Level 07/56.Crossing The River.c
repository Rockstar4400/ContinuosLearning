/*
After long years of sharpening your programming skills and honing your physique you finally made it: as a member of the ProProgrammers team you've entered Fort Boyard!

Unfortunately it looks like something went horribly wrong: although you collected the treasure of the Fort, you cannot get out of there! The gates are locked, and you have no idea how to unlock them. Desperate, you turned to the Professor, a slightly crazy but helpful inhabitant of the Fort. He promised to help you, but only if you solve his challenge.

In this challenge you won't have to do anything yourself: instead you will have to make several trained animals do the job. The animals are standing on one side of a river bank, and you should make them cross the river in the minimum possible amount of time using a single frail boat.

Here's the tricky part: although the animals are well-trained, they're still wild beasts with wild instincts. Some pairs of animals just can't stand one another, and if they are left alone (i.e. without at least a single other animal watching them) either on the same side of the river or on the boat, they will definitely lose it and start fighting. The Professor most certainly won't be impressed, and you will end up stuck in the Fort with him. Note, that the animals won't have time to fight when they go aboard the boat or leave it; they will only start to do so if they spend at least one minute together.

The boat is quite old and very delicate: it can only move with no more than two animals, and it obviously can't move by itself. Given the information about the animals, return the minimum amount of time required to make them cross the river, or -1 if it's impossible to do so.

Example

For

animals = [[ 3, -1,  4],
            [-1,  2, -1],
            [ 4, -1,  1]]
the output should be
solution(animals) = 14.

Let's assume that the given three animals are a dog (d), a cat (c) and a mouse (m), respectively. A cat can't be left alone neither with the mouse nor with the dog. To make the animals cross the river you will have to apply the following strategy:

d c m --------- ..., initial position;
c     --d m---> ..., 4 minutes
c     --------- d m
c     <---m---- d, 1 minute
c m   --------- d note that cat and mouse end up on the same bank, but not for long enough to start fighting
m     ----c---> d, 2 minutes
m     --------- c d
m     <---d---- c, 3 minutes
m d   --------- c
...   ---m d--> c m d 4 minutes.
Thus, it will take 4 + 1 + 2 + 3 + 4 = 14 minutes for the animals to cross the river.

For

animals = [[3, -1, -1],
            [-1, 2, -1],
            [-1, -1, 1]]
the output should be
solution(animals) = -1.

The animals just can't stand each other, so there's no way to make them cross the river.

Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] array.array.integer animals

A square matrix that represents the animals.

For each valid i and j (i ≠ j) animals[i][j] is either greater than 0 and represents the number of minutes it takes for the ith and the jth animals to cross the river in one boat, or is equal to -1, which means that the animals can't stand one another. It is guaranteed that animals[i][j] = animals[j][i].

For each valid i animals[i][i] is guaranteed to be greater than 0. This value denotes the number of minutes it takes the ith animal to cross the river alone.

Guaranteed constraints:
1 ≤ animals.length ≤ 10,
animals[i].length = animals.length,
-1 ≤ animals[i][j] ≤ 100.

[output] integer

The minimum amount of time required to make the animals cross the river or -1 if it's impossible to do so.

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
int solution(arr_arr_integer animals) {

}
