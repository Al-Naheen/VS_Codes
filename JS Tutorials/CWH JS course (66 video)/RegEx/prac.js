// console.log("naheen");

// let reg;
// reg = /harry/g; // g means global
// let str = "I am taught by code with harry. harry bhai is great"
// console.log(reg.exec(str));

// console.log(str.search(reg));




console.log("This is tutorial 46");
let reg = /harry/;
reg = /harry/g;
reg = /harry/i; // i means case insensitive
reg = /harry/ig;

// console.log(reg);
// console.log(reg.source);

let s = "This is great code with Harry and also harry, harry, HarrY bhai";


// Functions to match expressions
// 1. exec() - This function will return an array for match or null for no match
// let result = reg.exec(s);
// console.log(result);
// result = reg.exec(s);
// console.log(result); //---> multiple exec-por por 2ta exec ke console.log korle(nicher While Loop)

//Important
let result = reg.exec(s);
do {
    console.log(result);
    console.log(result[0]);
    console.log(result.index);
    console.log(result.input);
    console.log(result.groups);
    console.log(result.length);
    result = reg.exec(s);
} while (result !== null)

//IF use--> Tahle (index, input) na thakay je Error houar kotha oita hobe na
// if (result) {
//     console.log(result);
//     console.log(result.input);
//     console.log(result.index);
//     console.log(result.groups);
//     console.log(result.length);
//     console.log(result[0]);
// }




// 2. test() - Returns true or false
let result2 = reg.test(s);
// console.log(result2); //--> This will only print true if the "reg" is there in the string "s"

// 3. match() - return an array or null(Exec theke different Multiple Match r khetre)
// let result3 = reg.match(s) ---> This is wrong!!
let result3 = s.match(reg) // ---> This is right
console.log(result3);

// 4. search() - Returns index of first match else -1
// let result4 = reg.search(s) ---> This is wrong!!
let result4 = s.search(reg) // ---> This is right
// console.log(result4);

// 5. replace() - Returns new replaced string with all the replacements (if no flag is given, first match will be replaced)

let result5 = s.replace(reg, 'SHUBHAM');
// console.log(result5);
