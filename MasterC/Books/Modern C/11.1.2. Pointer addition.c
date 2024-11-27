#include <stdio.h>

double sumAll_E3(size_t len, double const* a){
    double ret = 0.0;
    for (size_t i = 0; i < len; ++i) {
        ret += *(a + i);
    }
    return ret;
}

double sumAll_E4(size_t len, double const* a){
    double ret = 0.0;
    for (double const* p = a; p < a+len; ++p) {
        ret += *p;
    }
    return ret;
}

double sumAll_E5(size_t len, double const* a){
    double ret = 0.0;
    for (double const*const i = a+len; a < i; ++a) {
        ret += *a;
    }
    return ret;
}

int main(void) {

    double A[7] = {0,1,2,3,4,5,6,};
    double SumE1 = sumAll_E3(7, &A[0]);
    printf("Function SumAll_E3: %f\n", SumE1);
    double SumE2 = sumAll_E4(7, &A[0]);
    printf("Function SumAll_E4: %f\n", SumE2);
    double SumE3 = sumAll_E5(7, &A[0]);
    printf("Function SumAll_E5: %f\n", SumE3);

    return 0;
}
