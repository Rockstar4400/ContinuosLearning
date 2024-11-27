#include <stdio.h>
#include <math.h>

double sumAll_Sub01(size_t len, double const* a){
    double ret = 0.0;
    double const* p = a+len-1;
    do {
        ret += *p;
        --p;
    } while (p > a);
    return ret;
}

double sumAll_Sub01_ext(size_t len, double const* a){
    double ret = 0.0;
    double const* p = a+len-1;
    do {
        if(isinf(*p)){
            fprintf(stderr,
                    "element \\%tu of array at \\%p is infinite\n",
                    p-a,        // Pointer difference!
                    (void*)a); // Prints the pointer value
            return *p;
        }
        ret += *p;
        --p;
    } while (p > a);
    return ret;
}

int main(void) {

    double A[7] = {0,1,2,3,4,5,6,};
    double SumE1 = sumAll_Sub01(7, &A[0]);
    printf("Function sumAll_Sub01: %f\n", SumE1);
    double SumE2 = sumAll_Sub01_ext(7, &A[0]);
    printf("Function sumAll_Sub01_ext: %f\n", SumE2);

    return 0;
}
