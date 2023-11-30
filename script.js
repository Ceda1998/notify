let savedNotesTitle = [];
let savedNotesText = [];
let deletedNotesTitle = [];
let deletedNotesText = [];

function init() {
  console.log("loaded");
  let finishedNote = document.getElementById("finishedNote");
  finishedNote.innerHTML += renderNewNote();
}

function saveNote() {
  console.log("saved");
  let resetForm = document.getElementById("NoteForm");
  let valueTitle = document.getElementById("noteTitle").value;
  let valueNoteText = document.getElementById("NoteText").value;
  savedNotesTitle.push(valueTitle);
  savedNotesText.push(valueNoteText);
  resetForm.reset();
}

function saveInLocalStorage() {

}

function loadFromLocalStorage() {

}

function renderNewNote() {
    let finishedNote = document.getElementById('finishedNote');
    finishedNote.innerHTML = '';

    for (let i = 0; i < savedNotesTitle.length; i++) {
        finishedNote.innerHTML += `
        <div id="finishedNote">
                <h1>${savedNotesTitle}</h1>
                <p>${savedNotesText}</p>
            </div>
        `;  
    }
}
