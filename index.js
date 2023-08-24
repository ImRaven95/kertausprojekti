const express = require('express');
const cors = require('cors');
const { 
    getAllConcerts, 
    getAllbands, 
    getAllBandsByConcertId, 
    getCityByBandId, getCityByConcertId, 
    getConcertsByBandId, getConcertWithMostBands, 
    getConcertsByDate, 
} = require('./database/database_layer');

const app = express();
const { port, host } = require('./config.json');

app.use(cors({origin: '*'}));
app.use(express.json());

// GET all the data in one get request
app.get('/api/concerts', async (req, res) => {
    const data = await getAllConcerts();
    res.json(data);
});

app.get('/api/bands', async (req, res) => {
    const data = await getAllbands();
    res.json(data);
});


app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});