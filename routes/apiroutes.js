const router = require('express').Router();

// router.get('/test', (req, res) => {
//     res.send("Heyyyy")
// })

router.get('/notes', (req, res) => {
    res.send("hello")
})

// router.post('/', (req, res) => {
//     //create new note with an ID 
// })

//router.delete('/', (req, res) =>{})


module.exports = router;