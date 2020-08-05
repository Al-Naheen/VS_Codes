// quick quiz
// create a heading element with text as "Go to CodeWithHarry" and create an a tag outside it with href = "https://www.codewithharry.com"


// 1. Link
let link = document.createElement("a")
link.setAttribute('href','https://www.codewithharry.com')
link.setAttribute('target', '_blank')
// 2. H2 Tag
let created = document.createElement('h2')
let txt = document.createTextNode('Go to CodeWithHarry')
created.appendChild(txt)
// 3. H2 to link(Nesting)
link.innerHTML = created.outerHTML  //New--> outerHTML, textContent..
console.log(link);
// 4. DOM Manupulation
let heading = document.getElementById('heading');
heading.appendChild(link)