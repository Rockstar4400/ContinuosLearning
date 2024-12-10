#include <stdio.h>

void swap_double(double a[static 2]){
    double tmp = a[0];
    a[0] = a[1];
    a[1] = tmp;
}

int main(void) {
    double E[] = {[3] = 42.0,[2] = 37.0,};
    double F[] = {22.0,17.0,1,0.5,};

    double A[2] = {1.0,2.0};
    swap_double(A);
    printf("A[0] = %f, A[1] = %f\n", A[0], A[1]);
}
