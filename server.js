// importing the required modules
const express = require('express');
const path = require('path');
const fileupload = require('express-fileupload');

const PORT = "3000";

// This is the starting directory of our app
let initial_path = path.join(__dirname, './public');

// Creating and attaching to express app
const app = express();
app.use(express.static(initial_path));
app.use(fileupload());

// Routes for the app
// Root app renders home.html
app.get("/", (req, res) => {
    res.sendFile(path.join(initial_path, 'home.html'));
});
// route to upload an image
app.post("/upload", (req, res) => {
    let file = req.files.image;
    let date = new Date();
    let img_name = data.getDate() + date.getTime() + file.name;
    // uploading the image
    file.mv(path.join(initial_path, 'uploads', img_name), (err) => {
        if (err) {
            console.log(err);
            throw err;
            // return res.status(500).send(err);
        }
        else {
            // return our file path
            res.json(`/uploads/${img_name}`);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});