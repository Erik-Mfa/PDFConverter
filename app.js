const express = require("express");
const app = express();

const upload = require("./src/multer/multer")
const fs = require("fs");
const path = require("path");
var docxConverter = require('docx-pdf');
const ejs = require("ejs");

app.set('view engine', 'ejs');
app.set('views', './views');

app.get("/", (req, res) => {
    res.render("index");
})

app.post("/pdf", upload.single("file"), (req, res) => {
    let outputfilepath = Date.now() + "output.pdf"

    docxConverter(req.file.path, outputfilepath ,function(err,result){
        if(err){
            console.log(err);
        }
        console.log('result'+result);
    });

    res.send("OK")
})

app.listen(3000, () => {
    console.log("Servidor rodando")
});