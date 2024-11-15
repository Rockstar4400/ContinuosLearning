//
// Created by ROCKSTAR4400 on 11/5/2024.
//

#ifndef METHODS_H
#define METHODS_H

// Global variable to store the top of the stack
struct node* temp;
// Structure definition for a node
struct node {
    int data;
    struct node* next;
};

static void push()
{
    int data;
    struct node* pointer = (struct node*)malloc(sizeof(struct node));

    if (pointer == NULL)
    {
        printf("Stack overflow\n");
    }
    else
    {
        printf("Enter the element to be inserted: ");
        scanf("%d", &data);

        if (temp == NULL)
        {
            pointer->data = data;
            pointer->next = NULL;
            temp = pointer;
        }
        else
        {
            pointer->data = data;
            pointer->next = temp;
            temp = pointer;
        }
    }
}

static void pop()
{
    if (temp == NULL)
    {
        printf("Stack underflow\n");
    }
    else
    {
        const int item = temp->data;
        struct node *pointer = temp;
        temp = temp->next;
        free(pointer);
        printf("The deleted item is %d\n", item);
    }
}

static void display()
{
    const struct node *pointer = temp;

    if (pointer == NULL)
    {
        printf("Stack underflow\n");
    }
    else
    {
        printf("The elements of the stack are:\n");

        while (pointer != NULL)
        {
            printf("'['%d\n", pointer->data);
            pointer = pointer->next;
            printf("']'");
        }
    }
}

#endif //METHODS_H

