/*

NO LIKED

Implement the missing code, denoted by ellipses. You may not modify the pre-existing code.
A sentence is considered correct if:

it starts with a capital letter;
it ends with a full stop, question mark or exclamation point ('.', '?' or '!');
full stops, question marks and exclamation points don't appear anywhere else in the sentence.
Given a sentence, return true if it is correct and false otherwise.

Example

For sentence = "This is an example of *correct* sentence.",
the output should be
solution(sentence) = true;

For sentence = "!this sentence is TOTALLY incorrecT",
the output should be
solution(sentence) = false.

Input/Output

[execution time limit] 0.5 seconds (cpp)

[memory limit] 1 GB

[input] string sentence

A string without newline characters.

Guaranteed constraints:
2 ≤ sentence.length ≤ 100.

[output] boolean

true if the given sentence is correct, false otherwise.

[C++] Syntax Tips

// Prints help message to the console
// Returns a string
string helloWorld(string name) {
    cout << "This prints to the console when you Run Tests" << endl;
    return "Hello, " + name;
}
*/
bool solution(std::string sentence) {
  std::regex regex(...);
  return std::regex_match(sentence, regex);
}
