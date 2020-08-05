let arr = [1,3,9,15,90]
let start = 0

//ForEach
arr.forEach(element => {
    start+= element
});
let Aver= start/arr.length;
console.log(Aver);


// //Book Wise
// function aver(array) {  
//     for (let i = 0; i < array.length; i++) {
//         start+= array[i]
//     }
//     console.log(start/array.length);
// }
// aver([1,9,3,90,15])