/*
Little Ratiorg was tired of being bullied by other bots and mighty CodeFighters, so he joined the Ninja Bots Training camp. Any bot that manages to solve all the challenges becomes an ultimate master of algorithms, and that is exactly what Ratiorg wants.

It's been several weeks, and Ratiorg is getting strong enough that he's making some enemies. They're starting to feel threatened, which is why they sabotaged his next challenge. Here's how they did it:

Ratiorg is about to be locked up in one of multiple rooms in a rectangular hangar. The rooms are securely locked: it is possible to leave a room only in one direction specific to this room. The problem is, the villains have messed the system up, so now there is no way to finish the challenge from certain rooms. The challenge will be over if Ratiorg successfully leaves the hangar (i.e. leaves the rectangle that represents it).

To figure out the odds of Ratiorg's success, you'd like to calculate the number of rooms, starting from which Ratiorg won't be able to finish the challenge. Implement a function that will return this number.

Example

For

hangar = [['U', 'L'],
          ['R', 'L']]
the output should be
solution(hangar) = 2.

Ratiorg won't be able to get out of the hangar if he starts from either of the bottom rooms.

Check out the image below for more context:



Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] array.array.char hangar

A non-empty rectangular matrix. The possible values of hangar[i] are:

'L' if it's possible to move to the left;
'R' if it's possible to move to the right;
'U' if it's possible to move up;
'D' if it's possible to move down.
Guaranteed constraints:
1 ≤ hangar.length ≤ 150,
1 ≤ hangar[0].length ≤ 150.

[output] integer

The number of rooms from which it's impossible to finish the challenge.

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
int solution(arr_arr_char hangar) {

}
