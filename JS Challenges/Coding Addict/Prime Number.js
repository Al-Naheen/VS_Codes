let prime1 = (num) => {
    if (num < 2) {
        return false;
    }
    //Modulus Operator--> %
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true;
}
console.log(prime1(33));
console.log(prime1(5));
console.log(prime1(3));
console.log(prime1(14));