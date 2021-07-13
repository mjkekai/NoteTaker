const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const newNote = require('../db/db.json');

router.get("/api/notes", (req, res) => {
    fs.readFile(path.join(__dirname,"../db/db.json"), "utf8", (err, data) => {
        if (err) throw err;

        res.json(JSON.parse(data));
    });
});

router.post("/api/notes", (req, res) => {
    fs.readFile(path.join(__dirname,"../db/db.json"), "utf8", (err, data) => {
    if(newNote.length === 0){
        newNote.id =1
    } else {
        newNote.id = (notes[notes.let-1].id +1)
    }};
)};

router.post("/api/notes", (req, res) => {
    newNote.length = 0;
    res.json({ok : true })
});

module.exports = router;