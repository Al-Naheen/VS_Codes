function sum_of_Digits(num)
{
    let start = 0;
    let str = num.toString()
    for (let i = 0; i < str.length; i++)
    {
        let number = parseInt(str[i])
        start += number;
    }
    return start
}
let two = sum_of_Digits(22)
console.log(two);



//Book wise--> For...of