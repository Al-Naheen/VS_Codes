console.log("Welcome to tutorial 24");

// 1. New Date
let today = new Date();
// console.log([today]);
// console.log(typeof today);
let otherDate = new Date('8-4-2003 04:54:08:09');
// otherDate = new Date('June 13 1976');
// otherDate = new Date('09/16/1976');
console.log(otherDate);

// 2. Get
let a;
a = otherDate.getDay(); // sun-mon-tue-wed-thur
a = otherDate.getDate();
a = otherDate.getMinutes();
a = otherDate.getSeconds();
a = otherDate.getHours();
a = otherDate.getTime(); //1 Jan,1970(Seconds e)
a = otherDate.getMilliseconds();
a = otherDate.getMonth();
console.log(a);

// 3. Set
otherDate.setDate(23);
otherDate.setMonth(0);
otherDate.setFullYear(1900); //GMT change hoy(+0553)
otherDate.setMinutes(2);
otherDate.setHours(1);
otherDate.setSeconds(3);
console.log(otherDate);