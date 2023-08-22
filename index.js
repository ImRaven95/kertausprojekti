const express = require('express');
const cors = require('cors');
const { 
    getAllConcerts, 
    getAllbands, 
    getAllBandsByConcertId, 
    getCityByBandId, getCityByConcertId, 
    getConcertsByBandId, getConcertWithMostBands, 
    getConcertsByDate, 
    runFunctions
} = require('./database/database_layer');

const app = express();
const { port, host } = require('./config.json');

app.use(cors());
app.use(express.json());

//get request to get all the data from the database
app.get('/api/concerts', (req, res) => {
    getAllConcerts().then((rows) => {
        res.json(rows);
    }).catch((err) => {
        res.json(err);
    });
});

app.get('/api/bands', (req, res) => {
    getAllbands().then((rows) => {
        res.json(rows);
    }).catch((err) => {
        res.json(err);
    });
});

app.listen(port, host, () => {
    console.log(`Server running on http://${host}:${port}`);
});
