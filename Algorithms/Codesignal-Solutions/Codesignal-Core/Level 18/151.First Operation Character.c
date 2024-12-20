/*
NO LIKED
Given a string which represents a valid arithmetic expression, find the index of the character in the given expression corresponding to the arithmetic operation which needs to be computed first.

Note that several operations of the same type with equal priority are computed from left to right.

See the explanation of the third example for more details about the operations priority in this problem.

Example

For expr = "(2 + 2) * 2", the output should be
solution(expr) = 3.

There are two operations in the expression: + and *. The result of + should be computed first, since it is enclosed in parentheses. Thus, the output is the index of the '+' sign, which is 3.

For expr = "2 + 2 * 2", the output should be
solution(expr) = 6.

There are two operations in the given expression: + and *. Since there are no parentheses, * should be computed first as it has higher priority. The answer is the position of '*', which is 6.

For expr = "((2 + 2) * 2) * 3 + (2 + (2 * 2))", the output should be solution(expr) = 28.

There are two operations which are enclosed in two parentheses: + at the position 4, and * at the position 28. Since * has higher priority than +, the answer is 28.

Input/Output

[execution time limit] 0.5 seconds (c)

[memory limit] 1 GB

[input] string expr

A string consisting of digits, parentheses, addition and multiplication signs (pluses and asterisks). It is guaranteed that there is at least one arithmetic sign in it.

Guaranteed constraints:
5 ≤ expr.length ≤ 45.

[output] integer

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
int solution(char * expr) {

}
