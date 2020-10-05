console.log('Welcome to my 1st project');

let addBtn = document.getElementById('addBtn')
let addTxt = document.getElementById('addTxt')
let noteCard = document.getElementsByClassName('noteCard')
let notes = localStorage.getItem('notes')

addBtn.addEventListener('click', function (e) {
    e.preventDefault()

    if (notes == null) {
        notesObj = []
    } else {
        notesObj = JSON.parse(notes)
    }

    notes.push(addTxt.value)
    localStorage.setItem('notes', JSON.stringify(notes));
    addTxt.value = '';
})