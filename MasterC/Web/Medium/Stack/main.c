#include <stdio.h>
#include <stdlib.h>
#include "Methods.h"

/*
 * Source help: https://medium.com/@noransaber685/understanding-the-stack-data-structure-in-c-introduction-implementation-and-examples-8d3fb03de809
 */

int main()
{
    int choice;
    printf("LINKED LIST IMPLEMENTATION USING STACKS\n\n");

    do
    {
        printf("1. Insert\n2. Delete\n3. Display\n4. Exit\n\n");
        printf("Enter your choice:\n");
        scanf("%d", &choice);

        switch (choice)
        {
            case 1:
                push();
                break;
            case 2:
                pop();
                break;
            case 3:
                display();
                break;
            case 4:
                exit(0);
            default:
                printf("Sorry, invalid choice!\n");
                break;
        }
    } while (choice != 4);
    system("PAUSE");
    return 0;
}
