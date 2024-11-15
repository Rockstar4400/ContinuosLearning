/*
Some file managers sort filenames taking into account case of the letters, others compare strings as if all of the letters are of the same case. That may lead to different ways of filename ordering.

Call two filenames an unstable pair if their ordering depends on the case.

To compare two filenames a and b, find the first position i at which a[i] ≠ b[i]. If a[i] < b[i], then a < b. Otherwise a > b. If such position doesn't exist, the shorter string goes first.

Given two filenames, check whether they form an unstable pair.

Example

For filename1 = "aa" and filename2 = "AAB", the output should be
solution(filename1, filename2) = true.

Because "AAB" < "aa", but "AAB" > "AA".

For filename1 = "A" and filename2 = "z", the output should be
solution(filename1, filename2) = false.

Both "A" < "z" and "a" < "z".

Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] string filename1

A non-empty string of English letters and digits.

Guaranteed constraints:
1 ≤ filename1.length ≤ 10.

[input] string filename2

A non-empty string of English letters and digits. It's guaranteed that there is no ambiguity, i.e. even being considered in the same case strings are never equal.

Guaranteed constraints:
1 ≤ filename2.length ≤ 10.

[output] boolean

true if filename1 and filename2 form an unstable pair, false otherwise.

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

bool solution(char * filename1, char * filename2) {

}
