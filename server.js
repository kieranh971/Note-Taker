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
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

// Post request
app.post("/api/notes", (req,res) => {
    fs.readFile(__dirname + "/db/db.json", `utf8`, (err, data) => {
        if (err) throw err;
        // Declaring note variables
        var notes = [JSON.parse(data)];
        // var id = notes[notes.length - 1].id + 1;
        // Object variables for notes
        var newNote = {
            title: req.body.title,
            text: req.body.text,
            // id: id
        };
        // Combines active notes with newly created notes
        var activeNote = notes.concat(newNote);

        fs.writeFile(__dirname + "/db/db.json", JSON.stringify(activeNote), (err, data) => {
            if (err) throw err;
            console.log(activeNote);
            res.json(activeNote)
        })
    })
});

// Retrive info from db.json
app.get("/api/notes", (req, res) => {
    fs.readFile(__dirname + "/db/db.json", 'utf8', (err, data) => {
        if (err) throw err;
        console.log("Notes", data);
        res.json(JSON.parse(data));
    });
})

// app.get("/api/notes/:id", (req, res) => {
//     res.json(notes[req.params.id]);
// })

// Starts server
app.listen(PORT, () => {
    console.log(`Listening for server at ${PORT}`)
});