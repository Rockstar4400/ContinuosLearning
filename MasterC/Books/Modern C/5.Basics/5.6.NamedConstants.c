#include <stdio.h>

enum  {e_magpie, e_raven, e_jay, cor_num};
enum  {m_magpie, m_raven, m_jay, macro_num};
char const*const bird[cor_num] = {
        [e_raven]  = "raven",
        [e_magpie] = "magpie",
        [e_jay]    = "jay",
};

#define COR_NAME                    \
(char const*const[macro_num]){      \
[m_raven] = "raven",                \
[m_magpie] = "magpie",              \
[m_jay] = "jay",                    \
}

int main(void){
    printf("ENUMS:\n");
    for (int i = 0; i < cor_num; i++)
        printf("%s\n", bird[i]);
    printf("\n");
    printf("MACRO:\n");
    for(unsigned i = 0;i < macro_num; ++i)
        printf("%s\n", COR_NAME[i]);
}