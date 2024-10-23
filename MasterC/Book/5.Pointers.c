
#include <stdio.h>

int main() {

    int x = 1, y = 2, z[10];
    printf("x = %d ,y = %d\n", x, y);
    int *ip; /* Initializing: ip is a pointer to int */
    ip = &x; /* ip now points to x address */
    printf("ip = &x = %p memory address\n", ip);
    y = *ip; /* y is now ip value */
    printf("y = *ip = %d\n", y);
    *ip = 0; /* x is equal 0 */
    printf("*ip = 0 equals to %d\n", *ip);
    printf("x = 0 because ip was equals to %d too\n", x);
    (*ip)++; /* increasing value of ip and x */
    printf("(*ip)++ = increased by 1, *ip = %d\n", *ip);
    printf("x = %d because ip was increased\n", x);
    printf("&ip = %p ip memory address\n", &ip);
    *ip++; /* increasing value of memory address of ip */
    printf("*ip++ = without the parentheses ->\n");
    printf("the memory address increase instead the value %p\n", ip);
    printf("*ip = %d the value of ip won't be increased\n", *ip);
    ip = &z[0]; /* ip now points to z[0] */
    printf("ip = &z[0] = memory address updated %p\n", ip);
    int *iq; /* initializing iq */
    iq = ip; /* equaling iq to ip */
    printf("iq = %p memory address equals to ip %p\n", iq, ip);

    //getchar(); // pause screen
    return 0;
}