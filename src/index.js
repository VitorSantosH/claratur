const express = require('express');
const app = express();
const cors = require('cors');

var path = require('path');

const insta = require('./services/getInsta');








const port = 4000;

app.use(express.static('public'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/insta',async (req, res ) => {
    data = await insta();
    res.json(`${data}`)
})

app.listen(port, () => {
    console.log('rodando na porta ' + port)
})



