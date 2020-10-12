console.log('Welcome to my 1st project');

let addBtn = document.getElementById('addBtn')
let noteCard = document.getElementsByClassName('noteCard')
let notes = localStorage.getItem('notes')
let addTxt = document.getElementById('addTxt')



// Clicking Add Button
addBtn.addEventListener('click', function (e) {
    e.preventDefault()

    if (notes === null) {
        notesObj = []
    } else {
        notesObj = JSON.parse(notes)
    }

    notesObj.push(addTxt.value)
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = '';
    console.log(notesObj);
    showNotes()
})



// Show in Card
function showNotes() {
    if (notes === null) {
        notesObj = []
    } else {
        notesObj = JSON.parse(notes)
    }
    let html = ''
    notesObj.forEach((elem, index) => {
        html += `
        
            <div class="noteCard mx-2 my-2 card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">Note: ${index + 1}</h5>
                  <p class="card-text">${elem}</p>
                  <button class="btn btn-danger">Delete Note</button>
                </div>
              </div>
        `
    });
    let notesElm = document.getElementById('notes')
    if (notes.length != 0) {
        notesElm.innerHTML = html;
    }
}