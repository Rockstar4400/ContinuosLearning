/*
NO LIKED

During your most recent trip to Codelandia you decided to buy a brand new CodePlayer, a music player that (allegedly) can work with any possible media format. As it turns out, this isn't true: the player can't read lyrics written in the LRC format. It can, however, read the SubRip format, so now you want to translate all the lyrics you have from LRC to SubRip.

Since you are a pro programmer (no noob would ever get to Codelandia!), you're happy to implement a function that, given lrcLyrics and songLength, returns the lyrics in SubRip format.

Example

For

lrcLyrics = ["[00:12.00] Happy birthday dear coder,",
             "[00:17.20] Happy birthday to you!"]
and songLength = "00:00:20", the output should be

solution(lrcLyrics, songLength) = [
  "1",
  "00:00:12,000 --> 00:00:17,200",
  "Happy birthday dear coder,",
  "",
  "2",
  "00:00:17,200 --> 00:00:20,000",
  "Happy birthday to you!"
]
Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] array.string lrcLyrics

Lyrics in LRC format. Each string has the format [MM:SS.xx] <song_line>, (note the whitespace character after the time) where:

MM:SS.xx is the lyrics time (it is guaranteed that the elements of lrcLyrics are sorted in ascending order of this time);
0 ≤ int(xx) ≤ 99;
0 ≤ int(SS) ≤ 59;
0 ≤ int(MM) ≤ 99;
<song_line> is the corresponding lyrics line.
Guaranteed constraints:
1 ≤ lrcLyrics.length ≤ 50,
1 ≤ lrcLyrics[i].length ≤ 100.

[input] string songLength

The length of the song in the format "HH:MM:SS". It is guaranteed that it is greater than the last time in lrcLyrics.

Guaranteed constraints:
0 ≤ int(HH) ≤ 2,
0 ≤ int(MM) ≤ 59,
0 ≤ int(SS) ≤ 59.

[output] array.string

The given lyrics in the SubRip format. For each line in the lrcLyrics, three new lines should be generated:

the first line is the 1-based lyrics line number;
the second line should be in the format HH1:MM1:SS1,xxx1 --> HH2:MM2:SS2,xxx2, where:
HH1:MM1:SS1,xxx1 the time the row starts;
HH2:MM2:SS2,xxx2 when the next lyrics should appear, or the length of the song if it's the last lyrics line;
the last line is the lyrics text itself.
Each pair of consecutive three-lines groups should be separated by a single empty string.

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
arr_string solution(arr_string lrcLyrics, char * songLength) {

}
