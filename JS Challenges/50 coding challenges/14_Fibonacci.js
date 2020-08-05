function Fibonacci(n) {
    let num = [0,1]
    if (n >= 2) {
        let newer = (n-1) + (n-2)
        num.push(newer)
    }
    return num
}

console.log(Fibonacci(10));