let arr = [2,3,-1,5,7,9,10,15,95]
let start = 0;
arr.forEach(element => {
    start += element
});
console.log(`sum of Array ${start}`);




// In Functional way--> Book wise
function sum_Array(array) 
{
    let sum = 0

    for (let i = 0; i < arr.length; i++)
    {
        sum += array[i]
    }

    console.log(sum);
}
sum_Array(arr)