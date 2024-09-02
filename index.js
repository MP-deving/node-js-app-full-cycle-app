const express = require('express')
const app = express()
const port = 3000


const { mysqlQuery } = require('./script');

app.get('/', async (req, res) => {
    try {
        const results = await mysqlQuery();
        const names = results.length ? results[0].name : 'No name found';

        res.send(`
            <h1>Full Cycle</h1>
            <p>The name inserted in db was: ${names}</p>
        `);
    } catch (error) {
        res.status(500).send('Error fetching data from the database');
    }
});

app.listen(port, () => {
        console.log('Rodando na porta ' + port)
    }
)

