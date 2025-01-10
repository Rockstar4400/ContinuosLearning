#include <stdlib.h>
#include <stdio.h>

int main(){
    int* ptr;
    int n, i;

    printf("Enter number of elements: \n");
    scanf("%d",&n);
    printf("Entered number of elements: %d\n", n);

    ptr = (int*) malloc(n * sizeof (int));

    if(ptr == NULL){
        printf("Memory not allocated.\n");
        exit(0);
    }else{
        printf("Memory sucessfully allocated using malloc.\n");

        for(i = 0;i <n; ++i){
            ptr[i] = i + 1;
        }

        printf("The elements of the array are: \n");
        for (i = 0; i < n; ++i){
            printf("%d, ", ptr[i]);
        }
        printf("\n");
        return system("pause");
    }
}