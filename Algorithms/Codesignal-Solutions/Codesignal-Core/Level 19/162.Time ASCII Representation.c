/*
NO LIKED

John has always liked analog clocks more than digital ones. He's been dreaming about turning his digital clock into an analog one for as long as he can remember, and now he met you, a great programmer, so his dream is about to come true.

The screen of his digital clock is a simple 17 × 17 rectangle of pixels. It always shows four digits: the first two stand for hours and second two for minutes (John's clock uses the 24-hour format). Each digit is located in a 17 × 4 rectangle, with the leftmost column always empty, and the other three columns filled according to this pattern with the proper scaling:



After the first two digits there is a separating column containing one symbol ':' at its center.

Now John asks you to make his clock show time in the format similar to analog clocks. Here's how: an analog clock can be represented as a circle (the clock's borders) and two segments (the clock's hands). To show it on the 17 × 17 screen, you should light the pixels on it so that the pixel with coordinates (x, y) is enabled if and only if the minimal distance to the circle or one of the segments is less than sqrt(0.5).

John wants you to implement the function that changes the digital representation to the analog one as described above. Given a 17 × 17 rectangle dtime representing digital time representation, return the analog representation of the same time.

Please note that for the early prototype you have to develop, both of the clock's hands should have the same length.

Example

For


dtime = [
  ['.', '*', '*', '*', '.', '.', '*', '.', '.', '.', '*', '*', '*', '.', '*', '*', '*'],
  ['.', '*', '.', '*', '.', '.', '*', '.', '.', '.', '.', '.', '*', '.', '*', '.', '*'],
  ['.', '*', '.', '*', '.', '.', '*', '.', '.', '.', '.', '.', '*', '.', '*', '.', '*'],
  ['.', '*', '.', '*', '.', '.', '*', '.', '.', '.', '.', '.', '*', '.', '*', '.', '*'],
  ['.', '*', '.', '*', '.', '.', '*', '.', '.', '.', '.', '.', '*', '.', '*', '.', '*'],
  ['.', '*', '.', '*', '.', '.', '*', '.', '.', '.', '.', '.', '*', '.', '*', '.', '*'],
  ['.', '*', '.', '*', '.', '.', '*', '.', '.', '.', '.', '.', '*', '.', '*', '.', '*'],
  ['.', '*', '.', '*', '.', '.', '*', '.', '.', '.', '.', '.', '*', '.', '*', '.', '*'],
  ['.', '*', '.', '*', '.', '.', '*', '.', ':', '.', '*', '*', '*', '.', '*', '.', '*'],
  ['.', '*', '.', '*', '.', '.', '*', '.', '.', '.', '.', '.', '*', '.', '*', '.', '*'],
  ['.', '*', '.', '*', '.', '.', '*', '.', '.', '.', '.', '.', '*', '.', '*', '.', '*'],
  ['.', '*', '.', '*', '.', '.', '*', '.', '.', '.', '.', '.', '*', '.', '*', '.', '*'],
  ['.', '*', '.', '*', '.', '.', '*', '.', '.', '.', '.', '.', '*', '.', '*', '.', '*'],
  ['.', '*', '.', '*', '.', '.', '*', '.', '.', '.', '.', '.', '*', '.', '*', '.', '*'],
  ['.', '*', '.', '*', '.', '.', '*', '.', '.', '.', '.', '.', '*', '.', '*', '.', '*'],
  ['.', '*', '.', '*', '.', '.', '*', '.', '.', '.', '.', '.', '*', '.', '*', '.', '*'],
  ['.', '*', '*', '*', '.', '.', '*', '.', '.', '.', '*', '*', '*', '.', '*', '*', '*']
]
the output should be


solution(dtime) = [
  ['.', '.', '.', '.', '*', '*', '*', '*', '*', '*', '*', '*', '*', '.', '.', '.', '.'],
  ['.', '.', '.', '*', '*', '.', '.', '.', '.', '.', '.', '.', '*', '*', '.', '.', '.'],
  ['.', '.', '*', '*', '.', '.', '.', '.', '.', '.', '.', '.', '.', '*', '*', '.', '.'],
  ['.', '*', '*', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '*', '*', '*', '.'],
  ['*', '*', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '*', '.', '.', '*', '*'],
  ['*', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '*', '.', '.', '.', '.', '*'],
  ['*', '.', '.', '.', '.', '.', '.', '.', '.', '.', '*', '.', '.', '.', '.', '.', '*'],
  ['*', '.', '.', '.', '.', '.', '.', '.', '.', '*', '.', '.', '.', '.', '.', '.', '*'],
  ['*', '.', '.', '.', '.', '.', '.', '.', '*', '.', '.', '.', '.', '.', '.', '.', '*'],
  ['*', '.', '.', '.', '.', '.', '.', '.', '*', '.', '.', '.', '.', '.', '.', '.', '*'],
  ['*', '.', '.', '.', '.', '.', '.', '.', '*', '.', '.', '.', '.', '.', '.', '.', '*'],
  ['*', '.', '.', '.', '.', '.', '.', '.', '*', '.', '.', '.', '.', '.', '.', '.', '*'],
  ['*', '*', '.', '.', '.', '.', '.', '.', '*', '.', '.', '.', '.', '.', '.', '*', '*'],
  ['.', '*', '*', '.', '.', '.', '.', '.', '*', '.', '.', '.', '.', '.', '*', '*', '.'],
  ['.', '.', '*', '*', '.', '.', '.', '.', '*', '.', '.', '.', '.', '*', '*', '.', '.'],
  ['.', '.', '.', '*', '*', '.', '.', '.', '*', '.', '.', '.', '*', '*', '.', '.', '.'],
  ['.', '.', '.', '.', '*', '*', '*', '*', '*', '*', '*', '*', '*', '.', '.', '.', '.']
]
(Enabled pixels are painted red to make them more visible).

Here is the geometrical representation of an analog clock showing time 01:30. Enabled pixel are painted red.



Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] array.array.char dtime

Digital time representation, where dtime[x][y] is equal to '*' if the pixel with coordinates (x, y) is enabled and '.' otherwise. It is guaranteed that the given time is correct, and that dtime[8][8] = ':'.

Guaranteed constraints:
dtime.length = 17,
dtime[i].length = 17.

[output] array.array.char

Representation of the same time on the same rectangle, but in an analog clock format.

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
arr_arr_char solution(arr_arr_char dtime) {

}
