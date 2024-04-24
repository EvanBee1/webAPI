const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;
const axios = require('axios');
const apikey = '869744ce';
const title = 'the Avengers';

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


const querystr = `http://www.omdbapi.com/?t=${title}&apikey=${apikey}`

axios.get(querystr).then ((response) => {
    console.log(response.data.Title);
    console.log(response.data.Year);
    console.log(response.data.Director);
});