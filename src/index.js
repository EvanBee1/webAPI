const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    fs.readFile('src/index.html', 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading HTML file:", err.message); // Log specific error message
            res.status(500).send("Internal Server Error");
            return;
        }
        res.send(data);
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});