const multer = require("multer");
const path = require("path");

//MULTER STORAGE 
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "uploads/")
    },
    filename: function(req, file, cb){
        cb(null, file.originalname + Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({storage})

module.exports = upload;