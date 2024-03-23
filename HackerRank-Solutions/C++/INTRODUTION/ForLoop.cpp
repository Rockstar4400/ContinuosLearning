/*

HackerRank - Introduction - For loop

A for loop is a programming language statement which allow code to be
repeatedly executed.

The syntax for this is

for (<expression_1>; <expression_2> ; <expression_3>)
    <statement>

Input Format
You will be given two positive integers, a and b (a<= b), separated by a newline.

Output Format
For each integer n in the interval[a,b]

-If 1 <= n <= 9, then print the English representation of it in lowercase.That
is "one" for 1, "two" for 2, and so on.

-Else if n > 9 and it is an even number, then print "even"

-Else if n > 9  and it is an odd number, then print "odd"


*/

#include <iostream>
using namespace std;

int main(){
    int a,b;
    cin >> a >> b;

    for(int i = a; i <= b; i++){
        if(i == 1){
            cout << "one" << '\n';
        }else
        if(i == 2){
            cout << "two" << '\n';
        }else
        if(i == 3){
            cout << "three" << '\n';
        }else
        if(i == 4){
            cout << "four" << '\n';
        }else
        if(i == 5){
            cout << "five" << '\n';
        }else
        if(i == 6){
            cout << "six" << '\n';
        }else
        if(i == 7){
            cout << "seven" << '\n';
        }else
        if(i == 8){
            cout << "eight" << '\n';
        }else
        if(i == 9){
            cout << "nine" << '\n';
        }else
        if(i > 9){
            if(i % 2 == 0){
                cout << "even" << '\n';
            }else
            if(i % 2 > 0){
                cout << "odd" << '\n';
            }
            }
        }
return 0;
}

