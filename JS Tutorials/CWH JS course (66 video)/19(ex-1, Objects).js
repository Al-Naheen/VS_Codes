//Browser Console e 2nd line--> (Shift + Enter)

// let str = "alNaheen";
// let links = document.links;
// console.log(links);
// let href;
// Array.from(links).forEach(function(element) {
//   href = element.href;
//   if (href.includes(str)) {
//     console.log(href);
//   }
// });

//kono Tag r Parent/Child e Link ta ase naki oitao ber kora possible 
// Regex--> Easily ber kora jabe(pore)


let obj = {
  name : 'Naheen',
  age : 15,
  profession : 'Web Developer'
}
value = 
console.log(Array.from(Object.values(obj)));
console.log(Array.from(Object.keys(obj)));
console.log(Array.from(Object.getOwnPropertyNames(obj))); //keys
console.log(Array.from(Object.toString(obj)));
console.log(Array.from(Object.call(obj)));
// console.log(Array.from(Object.seal(obj)));
console.log(Object.isSealed(obj));  //Uporer ta Thakle--True
console.log(Object.freeze(obj)); 
console.log(Object.isFrozen(obj)); 

console.log(Object.isExtensible(obj)); 
console.log(Object.call(obj)); 