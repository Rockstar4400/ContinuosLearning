#include <time.h>
#include <stdio.h>
#include <stdbool.h>

bool leapyear(unsigned year){
    return !(year%4)&&((year%100)||!(year%400));
}

#define DAYS_BEFORE                             \
(int const[12]){                                \
[0] = 0, [1] = 31, [2] = 59, [3] = 90,          \
[4] = 120, [5] = 151, [6] = 181, [7] = 212,     \
[8] = 243, [9] = 273, [10] = 304, [11] = 334,   \
}

struct tm time_set_yday(struct tm t){
    t.tm_yday += DAYS_BEFORE[t.tm_mon] + t.tm_yday - 1;
}

int main(void){

}