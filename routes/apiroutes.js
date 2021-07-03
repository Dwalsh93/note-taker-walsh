const router = require('express').Router();
const { json } = require('express');
const fs = require('fs');

// router.get('/test', (req, res) => {
//     res.send("Heyyyy")
// })

router.get('/notes', (req, res) => {
    var notes = JSON.parse(fs.readFileSync("db/db.json", "utf8"));
    res.json(notes)
})

// router.post('/', (req, res) => {
//     //create new note with an ID 
// })

router.post('/notes', (req, res) => {
    console.log("Post",req.body)
    let newNote = {
         id: Math.floor(Math.random()*100),
         title: req.body.title,
         text: req.body.text
  
    }
    var notes = JSON.parse(fs.readFileSync("db/db.json", "utf8"));
    // JSON.parse(notes);
    console.log(notes);
    notes.push(newNote);
    fs.writeFileSync("./db/db.json",
      JSON.stringify(notes),function(err){
        if (err) throw err;
      })
    res.json(notes)
})

// router.delete("/notes/:id", (req, res) => {
//     console.log("Delete",req.params.id)
//     let noteObj = [];
//     for (let i = 0; i<notes.length; i++) {
//       if (notes[i].id!=req.params.id) {
//         noteObj.push(notes[i])
//       }
//     }
//     notes = noteObj;
//     console.log(noteObj, "hello delete")
//     fs.writeFileSync("./db/db.json",
//       JSON.stringify(notes),function(err){
//         if (err) throw err;
//       })
//     res.json(notes)
//   })


module.exports = router;