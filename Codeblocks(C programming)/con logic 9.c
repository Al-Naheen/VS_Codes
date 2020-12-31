#include<stdio.h>
int main()
{
    char ch='m';

    if(ch>='a'&& ch<='z')
    {
        prientf("%c is lower case\n", ch);
    }
    else if(ch>='A' && ch<='Z')
    {
        prientf("%c is upper case\n", ch);
    }
    return 0;
}
