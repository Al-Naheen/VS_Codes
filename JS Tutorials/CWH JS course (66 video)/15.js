console.log('Welcome to tutorial 15');

let cont = document.querySelector('.no');
cont = document.querySelector('.container');
console.log(cont.childNodes);  //Comments, Text(Spaces)
console.log(cont.children);  //Pure DOM Elements--> BETTER

let nodeName = cont.childNodes[1].nodeName;
let nodeType = cont.childNodes[1].nodeType;
// console.log(nodeName)
// console.log(nodeType)

// Node types
// 1. Element
// 2. Attribute
// 3. Text Node
// 8. Comment
// 9. document
// 10. docType




let container = document.querySelector('div.container');

// console.log(container.children[1].children[0].children); //Traverse--> Ektar moddhe arekta then arekta....
// console.log(container.firstChild);
// console.log(container.firstElementChild.nodeName);
// console.log(container.lastChild);
// console.log(container.lastElementChild);

// console.log(container.children);
console.log(container.childElementCount); // Count of child elements

console.log(container.firstElementChild.parentNode.parentNode.parentNode.parentNode);
console.log(container.firstElementChild.nextSibling);  //Baaal
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);  //Chaining--> Traverse