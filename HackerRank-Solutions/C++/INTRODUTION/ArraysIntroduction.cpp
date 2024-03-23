
/*

HackerRank: C++ - Introduccion: Array Introduccion

Task:
You'll be given an array of N integers and you have to print the integer in the reverse order.

Input format:
The first line of the input contains N, where N is the nuber of inters. The next
line contains N integers separated by a space.

Constraints

1 <= N  <= 1000
1 <= Ai <= 10000, where Ai is the ith integer in the array.

Output Format:
Print the N integers if the array in the reserve order in a single
line separated by a space.

Sample input:
4
1 4 3 2

Sample output:
2 3 4 1

*/

#include <iostream>
using namespace std;

int main() {

	int A [10000], N;
	int i, j;
	int	TEMP;

	cin >> N;

	// Insert data in array
	for (i = 0; i < N ; i++){
		cin >> A [i];
	}

	// Reverse the array
	for (i = 0, j = N - 1; i < N / 2; i++, j--){
		TEMP  = A [i];
		A [i] = A [j];
		A [j] = TEMP;
	}

	// Print Array reverse
	for (int i = 0; i< N; i++){
		cout << A [i] << " ";
	}

	return 0;
}

/*
Other alternative:

int N;
cin >> N;
vector<int> A(N);

for (int i = 0; i < N; i++) {
cin >> A[i];
}

std::reverse(A.begin(), A.end());

for (std::vector<int>::iterator it = A.begin(); it != A.end(); ++it){
std::cout << *it << ' ';
}
system("pause");
return 0;

*/
