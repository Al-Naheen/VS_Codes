function prime(num) {
    if (num < 2) {
        return false
    }
    for (let i = 2; i < num; i++) {
        if (num%i == 0){
            return false
        }
    }
    return true
}
console.log(prime(11));
console.log(prime(10));
console.log(prime(9));
console.log(prime(2));
console.log(prime(7));
console.log(prime(13));



// 1st Attempt
// if (num > 1) {
//     for (let dividor = Number; dividor > 1, dividor < num; dividor++) {
//         if (num % dividor != 0) {
//             console.log(true);
//         }
//     }
// }




// Book Wise