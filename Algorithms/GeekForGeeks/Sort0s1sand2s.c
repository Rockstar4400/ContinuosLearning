//{ Driver Code Starts

#include <stdio.h>
#include <stdlib.h>
#include <string.h>


// } Driver Code Ends
// User function Template for C

// Function to sort an array of 0s, 1s, and 2s
void sort012(int arr[], int n) {
    // code here
}


//{ Driver Code Starts.

void printArray(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

int main() {
    char ts[1001];
    fgets(ts, sizeof(ts), stdin);
    int t = atoi(ts);
    while (t--) {
        char *line = NULL;
        size_t len = 0;
        long read = getline(&line, &len, stdin);

        int *nums = (int *)malloc(1000000 * sizeof(int));
        int n = 0;
        char *token = strtok(line, " ");
        while (token != NULL) {
            nums[n++] = atoi(token);
            token = strtok(NULL, " "); // Get the next token
        }
        int arr[n];
        for (int i = 0; i < n; i++) {
            arr[i] = nums[i];
        }
        // char ch;
        // scanf("%c", &ch);
        // getchar();
        // Check if the array is sorted using the previously 
        // defined function
        sort012(arr, n);
        printArray(arr, n);

        printf("%s\n", "~");
        free(nums); // Free memory from nums array
        free(line); // Free memory from input line
    }

    return 0; // Return 0 to indicate successful execution
}