console.log('Welcome to tutorial 14');
/*
element selectors:
1. Single element selector
2. Multi element selector
*/



// 1. Single element selector
let element = document.getElementById('myfirst');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
element.style.color = 'red';
element.innerText = 'Harry is a good boy'; // HTML Tag nai
element.innerHTML = '<b>Harry is a good boy</b>'; 
// console.log(element.innerText);

let sel = document.querySelector('#myfirst');
sel = document.querySelector('.child');  // 1st element 
sel = document.querySelector('div');  // 1st ta
// sel = document.querySelectorAll('div');  //For ALL Elements
sel.style.color = 'green';
console.log(sel)



// 2. Multi element selector
let elems = document.getElementsByClassName('child');

// elems = document.getElementsByClassName('container');
// console.log(elems[0].getElementsByClassName('child'));

elems = document.getElementsByTagName('div');
console.log(elems)




// Array.from ke--> Traditional For Loop die
for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element);
   element.style.color = 'blue'; 
}

//Normal Foreach--> HTML elements e use hoy na. tai Array.From().forEach()
// Array.from(elems).forEach(element => {
//     console.log(element);
//    element.style.color = 'blue'; 
// });
// console.log(elems[0].getElementsByClassName('child'))
