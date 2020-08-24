/* Practice
let nag = ['hagfu', 88 , 99 , 'matha']
let hagu = JSON.stringify(nag);
let matha = JSON.parse(hagu)
console.log(matha);
*/

// If user adds a note, add it to the localStorage
let addBtn = document.getElementById('addBtn');
let search = document.getElementById('search');
let dlt = document.getElementById('delete');

addBtn.addEventListener('click', (e) => {
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
    showNotes();

})

// Function to show elements from localStorage
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
      <div class="noteCard mx-2 my-2" style="width: 18rem;">
      <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text">${element + 1}</p>
          <button class="btn btn-primary" id="delete">Delete Note</button>
      </div>
  </div> `;
    })
}
