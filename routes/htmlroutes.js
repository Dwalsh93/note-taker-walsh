app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/develop/public/index.html"))
    });
    
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, "/develop/public/notes.html"))
    });