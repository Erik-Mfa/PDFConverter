const express = require("express");
const app = express();
const upload = require("./src/multer/multer")
const read = require("./src/Pdf/generate")
const pdfRouter = require("./routes/pdfRouter")
const fs = require("fs");
// const ejs = require("ejs");
// const path = require("path")

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/pdf', pdfRouter);

app.get("/", (req, res) => {
    res.render("index");
})

app.post("/upload", upload.single("file"), (req, res) => {
    var file = './uploads/' + req.file.filename;
    var document = fs.readFileSync(file, 'utf8');
   
    console.log(document)
    res.send("enviado");
})

app.listen(3000, () => {
    console.log("Servidor rodando")
});