
// Source Help: https://en.cppreference.com/w/c/memory/malloc
#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int *p1 = malloc(4*sizeof(int));    // Allocates enough for an array of 4 bits
    int *p2 = malloc(sizeof(int[4]));   // same, naming the type directly
    int *p3 = malloc(4*sizeof *p3);     // same, without repeating the type name!

    if(p1) {
        for(int i = 0; i < 4; ++i)  // populate the array
            p1[i] = i * i;
        for(int j = 0; j < 4; ++j)  // print it back out
            printf("p1[%d] == %d\n", j, p1[j]);
    }
    free(p1);
    free(p2);
    free(p3);

    system("pause");
    return 0;

}
