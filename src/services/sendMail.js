const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const {pass, user } = require('../config/.env')

router.post('/email', (req, res ) => {


 
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user,
            pass
        }
    })

    transporter.sendMail({
        from: user,
        to: user,
        subject: req.body.name,
        text: `E-mail: ${req.body.email}, \n Menssagem: ${req.body.message}  `
    })
        .then(info => {
            res.send(info)
        })
        .catch(err => {
            console.log(err)
            res.send(err)
    })

    
})

module.exports = router;