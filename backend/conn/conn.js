const mongoose = require('mongoose');

const conn = async (req, res) => {
    try {
        await mongoose.connect(process.env.DATABASE_URL).then(() => {
            console.log("Connected to MongoDB");
        });
    } catch (error) {
        res.status(400).json({ message: "Not Connected" });
    }

    
}

conn();