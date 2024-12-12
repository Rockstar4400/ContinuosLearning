#include <stdio.h>

void double_swapE1(double* p0, double* p1){
    double tmp = *p0;
    *p0 = *p1;
    *p1 =tmp;
    printf("Function double_swapE1: a= %f, b= %f\n", *p0, *p1);
}

void double_swapE2(double p0[static 1], double p1[static 1]) {
    double tmp = p0[0];
    p0[0] = p1[0];
    p1[0] = tmp;
    printf("Function double_swapE2: a= %f, b= %f\n", *p0, *p1);
}


int main(void) {

    double a = 1.3;
    double b = 3.1;

    printf("Values defined: a= %f, b= %f\n", a, b);
    double_swapE1(&a,&b);
    double_swapE2(&a,&b);

    return 0;
}
