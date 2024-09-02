const express = require('express')
const app = express()
const port = 3000


const { mysqlQuery } = require('./script');

app.get('/', async (req, res) => {
    try {
        const results = await mysqlQuery();
        const nameList = []

        for(const item of results) {
            nameList.push(item.name)
        }

        res.send(`
            <h1>Full Cycle</h1>
            <p>The name inserted in db was: ${nameList.join(", ")}</p>
        `);
    } catch (error) {
        error
        res.status(500).send('Error fetching data from the database');
    }
});

app.listen(port, () => {
        console.log('Aplicação no ar!!! Rodando na porta ' + port)
    }
)