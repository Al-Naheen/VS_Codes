console.log("I am tut 25");

let heading = document.getElementById('heading')

heading.addEventListener('click', (e)=>{
    e.preventDefault()
    heading.innerHTML=`<textarea id='textArea'>`
})

let element = document.getElementById("textArea");
 
//If it isn't "undefined" and it isn't "null", then it exists.
if(typeof(element) != 'undefined' && element != null){
    document.getElementsByTagName('body').addEventListener('blur', ()=>{
        document.getElementById('textArea').innerHTML=`<h1>Mara khao`
    })
} else{
    alert('Element does not exist!');
}