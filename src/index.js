const express = require('express');
const app = express();
const cors = require('cors');


var path = require('path');
var mime = require('mime');
var fs = require('fs');





const port = 4000;

app.use(express.static('public'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.listen(port, () => {
    console.log('rodando na porta ' + port)
})




