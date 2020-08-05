// //Previous
// let html2;
// html2  = "<h1> this is heading</h1>"+
//         "<p> this is My para</p>";
// html2 = html2.concat('this', ' str2');
// document.write(html2)

//Now- Template Literal
let html = `<h2> I wanna be the very best like no one ever was. To catch them is my real test to train is my cause </h2>`
let img = `<img src="NodeTypes.png" alt="NodeTypes"></img>`
let song = `<pre> <h2>Go Corona Go go</h2>${html} <h1>Grab the Methods</h1> <br>${img}</pre>`
document.write(song)

let heading = document.getElementById('heading').innerHTML = `<pre><h1> Template Literal's practise` //ENDING TAG doesn't matter