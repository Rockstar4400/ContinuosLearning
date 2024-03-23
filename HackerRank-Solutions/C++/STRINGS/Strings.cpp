/*
C++ provides a nice alternative data type to manipulate strings, and the data type is
conveniently called string.Some of ts widely used features are the following:

-Declaration:
string a = "abc";

-Size:
int len = a.size()

-Concatenate two strings:
string a  = "abc";
string b = "def";
string c = a + c; //c = "abcdef"

Input Format
You are gicen two strings, a and b, separated by a new line. Each string will consist
of lowed case Latin characters ('a'-'z').

Output Format
In the first line print two space-separated integers, representing the length
of a and b repectively.
In the second line print the string produced by concatenating a and b(a+b).
In the third line print two string separated by a space, a' and b'. a' and b'
are the same as a and b, respectively, except
that their first characters are swapped.

Sample input
abcd
ef

Sample output
4 2
abcdef
ebcd af

*/


#include <string>
#include <iostream>
using namespace std;

int main(){

    string a,b;
    cin >> a >> b;

    cout << a.size() << " "  << b.size() << '\n';
    cout << a + b << '\n';
    cout << b.substr(0,1) + a.substr(1,a.size()) << " "
    << a.substr(0,1) + b.substr(1,b.size()) ;


return 0;
}
