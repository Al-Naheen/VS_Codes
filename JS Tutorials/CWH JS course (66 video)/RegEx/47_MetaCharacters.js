console.log('This is tutorial 47');

let regex = /harrsdfgy/



// Lets look into some metacharacter symbols--> 6

regex = /^harrdc/; // ^ means expression will match if string starts with
regex = /harry$/; // $ at the end of the string means "string ends with"
regex = /h.rry/; //matches any one character
regex = /h*rry/; //matches any 0 or more characters..h/* er ager character gula match na korleo hobe...
regex = /ha?rryi?t/; //? after character means that character is optional(slight differences in American and British English)
regex = /h\*rry/


let str = "h*rry means codewith"; // 

let result = regex.exec(str);
console.log("The result from exec is ", result);


if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}
