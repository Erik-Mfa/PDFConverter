const fs = require("fs");

async function read (req, res) {
    var document = await fs.readFileSync(file, 'utf8');
    var file = './uploads/' + JSON.stringify(req.file.filename);

    res.send("lendo")
};

module.exports = read;