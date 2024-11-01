/* jsdec pseudo code output */
/* Z:\Repositorios\ContinuosLearning\MasteringC\Practices\Pointers.o @ 0x0 */
#include <stdint.h>
 
uint64_t entry0 (void) {
    /* [00] -r-x section size 176 named .text */
    main ();
    *(var_1ch) = 1;
    *(var_ch) = 2;
    rax = var_1ch;
    *(var_18h) = rax;
    rax = *(var_18h);
    rdx = *(var_18h);
    rax = 0x000000d0;
    rcx = rax;
    printf ();
    rax = *(var_18h);
    eax = *(rax);
    *(var_ch) = eax;
    eax = *(var_ch);
    edx = *(var_ch);
    rax = 0x000000d4;
    rcx = rax;
    printf ();
    rax = *(var_18h);
    *(rax) = 0;
    rax = *(var_18h);
    eax = *(rax);
    edx = *(rax);
    rax = 0x000000d4;
    rcx = rax;
    printf ();
    rax = var_48h;
    *(var_18h) = rax;
    rax = *(var_18h);
    rdx = *(var_18h);
    rax = 0x000000d0;
    rcx = rax;
    printf ();
    getchar ();
    eax = 0;
    return rax;
}