console.log("This is tutorial 46");
let reg = /harry/; // This is a regular expression literal in js
reg = /harry/g; // g means global
// reg = /harry/i; // i means case insensitive

// console.log(reg);
// console.log(reg.source);

function abcmath(a, b, c) {
    let start = 0;
    for (let i = 1; i <= b; i++) {
        start += (a * i * 2);
    }
    return start % c;
}

let result = abcmath(1,2,3)
console.log(result);


//Recursive...
function fac(int) {
    let start = 1;
    for (let i = 1; i <= int; i++) {
        if (int>1) {
            for (let i = 1; i <= int; i++) {
                start*i
            }
        }
        else{
            return start
        }
    }
    console.log(start);
}
fac(4)