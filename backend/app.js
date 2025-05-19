require('dotenv').config();
const express = require('express');
const cors = require('cors');
require("./conn/conn");

const app = express();
// const auth = require('./routes/auth');

app.get("/", (req, res) => {
    res.send("Hellow World");
});

app.use(express.json());
app.use(cors());

// app.use('/api/auth', auth);
app.listen(1000, () => {
    console.log("Sever is running on port 1000");
})

