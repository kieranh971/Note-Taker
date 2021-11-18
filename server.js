// Adding requirements
const express = require("express");
const path = require("path");
const fs = require("fs");
// Setting up express app
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// HTML pages
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

// Post request
app.post("/api/notes", (req,res) => {
    fs.readFile("./db/db.json", `utf8`, (err, data) => {
        if (err) throw err;
        // Declaring note variables
        var notes = JSON.parse(data);
        var id = notes[notes.length - 1].id + 1;
        // Object variables for notes
        var createNote = {
            title: req.body.title,
            text: req.body.text,
            id: id
        }
        // Combines active notes with newly created notes
        var currentNote = notes.concat(createNote)

        fs.writeFile(__dirname + "./db/db.json",JSON.stringify(createNote), (err, data) => {
            if (err) throw err;
            console.log(currentNote);
            res.json(currentNote)
        })
    })
});

// Starts server
app.listen(PORT, () => {
    console.log(`Listening for server at ${PORT}`)
});