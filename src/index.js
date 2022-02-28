const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./services/sendMail')


const port = 4000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(routes);



app.listen(port, () => {
    console.log('rodando na porta ' + port)
})


