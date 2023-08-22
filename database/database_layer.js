let mysql = require('mysql')
let config = require('./sqlconfig')


const connection = mysql.createConnection({
    host: config.server.host,
    user: config.server.user,
    database: config.server.database
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!")
});

//Function for formatting the JSON data
const formatJSON = (rows) => {
    let data = []
    rows.forEach((row) => {
        data.push({
            id: row.id,
            name: row.name,
            band_id: row.band_id
        })
    })
    return data
}

const getAllConcerts = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM concerts', (err, rows) => {
            if (err) {
                reject(err)
            }
            resolve(rows)
        })
    })
}

const getAllbands = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM bands', (err, rows) => {
            if (err) {
                reject(err)
            }
            resolve(rows)
        })
    })
}

//Function for all performing bands by concert id
const getAllBandsByConcertId = (id) => {
    return new Promise((resolve, reject) => {
        //Create a query to get all bands by concert id using linking table
        connection.query('SELECT b.id AS id, b.name AS band_name, con.band_id AS band_id FROM bands AS b JOIN connection AS con ON b.id = con.band_id WHERE con.show_id = ?', [id], (err, rows) => {
            console.log('--All performing bands--')
            if (err) {
                reject(err)
            }
            resolve(rows)
        })
    })
}

//Function for the city the band is preforming in 
const getCityByBandId = (id) => {
    return new Promise((resolve, reject) => {
        const query = `
            SELECT c.id AS concert_id, ci.name AS city_name, b.name AS band_name, b.id AS band_id, c.name AS concert_name, c.date AS concert_date
            FROM concerts AS c
            JOIN connection AS con ON c.id = con.show_id
            JOIN city AS ci ON c.city_id = ci.id
            JOIN bands AS b ON con.band_id = b.id
            WHERE con.band_id = ?;
        `;
        
        connection.query(query, [id], (err, rows) => {
            console.log('--City by band id--')
            if (err) {
                reject(err);
            }
            resolve(rows);
        });
    });
};

//Function to get the city for the concert
const getCityByConcertId = (id) => {
    return new Promise((resolve, reject) => {
        const query = `
            SELECT c.id AS concert_id, ci.name AS city_name, c.name AS concert_name
            FROM concerts AS c
            JOIN connection AS con ON c.id = con.show_id
            JOIN city AS ci ON c.city_id = ci.id
            JOIN bands AS b ON con.band_id = b.id
            WHERE c.id = ?;
        `;
        
        connection.query(query, [id], (err, rows) => {
            console.log('--City by concert id--')
            if (err) {
                reject(err);
            }
            resolve(rows);
        });
    });
};

//Function to get the concerts the band is performing in
const getConcertsByBandId = (id) => {
    return new Promise((resolve, reject) => {
        const query = `
            SELECT c.id AS concert_id, ci.name AS city_name, b.name AS band_name, b.id AS band_id, c.name AS concert_name
            FROM concerts AS c
            JOIN connection AS con ON c.id = con.show_id
            JOIN city AS ci ON c.city_id = ci.id
            JOIN bands AS b ON con.band_id = b.id
            WHERE con.band_id = ?;
        `;

        connection.query(query, [id], (err, rows) => {
            console.log('--Concerts by band id--')
            if (err) {
                reject(err);
            }
            resolve(rows);
        });
    });
};

//Function to get the concert with the most bands performing
const getConcertWithMostBands = () => {
    return new Promise((resolve, reject) => {
        const query = `
            SELECT c.id AS concert_id, ci.name AS city_name, c.name AS concert_name, COUNT(con.band_id) AS band_count
            FROM concerts AS c
            JOIN connection AS con ON c.id = con.show_id
            JOIN city AS ci ON c.city_id = ci.id
            JOIN bands AS b ON con.band_id = b.id
            GROUP BY c.id
            ORDER BY band_count DESC
            LIMIT 1;
        `;
        
        connection.query(query, (err, rows) => {
            console.log('--Concert with most bands--')
            if (err) {
                reject(err);
            }
            resolve(rows);
        });
    });
};

//Function to sort the concerts by date
const getConcertsByDate = () => {
    return new Promise((resolve, reject) => {
        const query = `
            SELECT c.id AS concert_id, ci.name AS city_name, c.name AS concert_name, c.date AS concert_date
            FROM concerts AS c
            JOIN connection AS con ON c.id = con.show_id
            JOIN city AS ci ON c.city_id = ci.id
            JOIN bands AS b ON con.band_id = b.id
            ORDER BY c.date ASC;
        `;

        connection.query(query, (err, rows) => {
            console.log('--Concerts by date--')
            if (err) {
                reject(err);
            }
            resolve(rows);
        });
    });
};

const runFunctions = () => {
    
    getAllBandsByConcertId(1).then((rows) => {
        console.log(rows)
    }).catch((err) => {
        console.log(err)
    });

    getCityByBandId(1).then((rows) => {
        console.log(rows)
    }).catch((err) => {
        console.log(err)
    });

    getCityByConcertId(1).then((rows) => {
        console.log(rows)
    }).catch((err) => {
        console.log(err)
    });

    getConcertsByBandId(1).then((rows) => {
        console.log(rows)
    }).catch((err) => {
        console.log(err)
    });

    getConcertWithMostBands().then((rows) => {
        console.log(rows)
    }
    ).catch((err) => {
        console.log(err)
    });
    
    getConcertsByDate().then((rows) => {
        console.log(rows)
    }).catch((err) => {
        console.log(err)
    });
}

module.exports = {
    getAllConcerts,
    getAllbands,
    getAllBandsByConcertId,
    getCityByBandId,
    getCityByConcertId,
    getConcertsByBandId,
    getConcertWithMostBands,
    getConcertsByDate,
    runFunctions
}

