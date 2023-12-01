let savedNotesTitle = [];
let savedNotesText = [];
let deletedNotesTitle = [];
let deletedNotesText = [];
loadFromLocalStorage();

function init() {
  let finishedNote = document.getElementById("finishedNotesContainer");
  finishedNote.innerHTML = "";
  renderNotes();
}

function saveNote() {
  let resetForm = document.getElementById("NoteForm");
  let valueTitle = document.getElementById("noteTitle").value;
  let valueNoteText = document.getElementById("NoteText").value;
  savedNotesTitle.push(valueTitle);
  savedNotesText.push(valueNoteText);
  saveInLocalStorage();
  loadFromLocalStorage();
  init();
  resetForm.reset();
}

function deleteNotes(i) {
  deletedNotesTitle.push(savedNotesTitle[i]);
  deletedNotesText.push(savedNotesText[i]);
  savedNotesTitle.splice(i,1);
  savedNotesText.splice(i,1);
  saveInLocalStorage();
  init();
}

function saveInLocalStorage() {
  let NoteTitle = JSON.stringify(savedNotesTitle);
  localStorage.setItem("savedTitle", NoteTitle);
  let NoteText = JSON.stringify(savedNotesText);
  localStorage.setItem("savedText", NoteText);
  let trashNoteTitle = JSON.stringify(deletedNotesTitle);
  localStorage.setItem("deletedTitle",trashNoteTitle);
  let trashNoteText = JSON.stringify(deletedNotesText);
  localStorage.setItem("deletedText", trashNoteText)
}

function loadFromLocalStorage() {
  let loadTitle = localStorage.getItem("savedTitle");
  let loadText = localStorage.getItem("savedText");
  let loadDeletedTitle = localStorage.getItem("deletedTitle")
  let loadDeletedText = localStorage.getItem("deletedText")
  if (loadTitle && loadText) {
    savedNotesTitle = JSON.parse(loadTitle);
    savedNotesText = JSON.parse(loadText);
  }
  if (loadDeletedTitle && loadDeletedText) {
    deletedNotesTitle = JSON.parse(loadDeletedTitle);
    deletedNotesText = JSON.parse(loadDeletedText);
  }
}

function toggleTrashCan() {
  let trashCan = document.getElementById('trascan');
  if (trashCan.style.display == 'none') {
    trashCan.style.display = 'block';
  } else {
    trashCan.style.display = 'none';
  }
}

function renderNotes() {
  for (let i = 0; i < savedNotesTitle.length; i++) {
    let finishedNote = document.getElementById("finishedNotesContainer");
    let NoteTitle = savedNotesTitle[i];
    let NoteText = savedNotesText[i];
    finishedNote.innerHTML += `
    <div id="finishedNote">
            <div class="newNoteHeader">
            <h1>${NoteTitle}</h1>
            <img src="./img/icons/trash-solid.svg" class="smallTrashIcon" onclick="deleteNotes(${i})">
            </div>
            <p>${NoteText}</p>
        </div>
    `;
  }
}
