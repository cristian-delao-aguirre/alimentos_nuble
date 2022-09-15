const express = require('express');
const app = express();


const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/testdata', (req, res, next) => {
    const data = {
        "id": "asdasdasd",
        "name": "name"
    }
    console.log(data);
    res.send(data)
})

app.post('/send-data-excel', (req, res, next) => {
    res.send("Hola");
})

const server = app.listen(3001)