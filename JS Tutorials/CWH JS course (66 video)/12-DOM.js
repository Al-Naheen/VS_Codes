console.log('Welcome to tut 12.js');

//Document.etc(not specifically HTML tags...It contains Some Special Features)
let a = document;
a = document.all; //Line e shob Elements
a = document.body;
a = document.forms[0]; //1st Tag


//HTML collection ke Array te Convert--> have to Practice
Array.from(a).forEach(function(element){
    console.log(element);
})


a = document.links[0]; // <a href> Tag return...
a = document.links[0].href; //http:


// H.W.
// use document.images and document.scripts and print the list of images and scripts on an html page
console.log(a);
