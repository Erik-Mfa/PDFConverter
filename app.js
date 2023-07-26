const express = require("express");
const app = express();
const upload = require("./src/multer/multer")
const fs = require("fs");


app.set('view engine', 'ejs');

app.get("/",(req, res) => {
    res.render("index");
})

app.post("/upload", upload.single("file"), (req, res) => {
    // var document = fs.readFileSync(file, 'utf8')
    // var file = './uploads/' + JSON.stringify(req.file.filename);

    res.send("enviado");
})

app.listen(3000, () => {
    console.log("Servidor rodando")
});