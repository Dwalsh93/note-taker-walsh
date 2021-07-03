const fs = require("fs");
const path = require("path");


// to create routes I need to add app.post functions below each app.get?
// add a function to handle note creation and a function to validate the newly created note
// app.use to attach the middlewear 

function createNewNote(body, notesArray) {
    const note = body;
    var arr = notesArray.notes;
    arr.push(note);
    console.log(notesArray.notes);
    fs.writeFileSync(
        path.join(__dirname, '../db/lib/notes.js'),
        JSON.stringify({ notes: notesArray.notes }, null, 2)
    );
};

nodule.exports = { createNewNote };