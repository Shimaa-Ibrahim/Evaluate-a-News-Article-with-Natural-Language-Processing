const express = require('express');
const dotenv = require('dotenv');
const fetch = require('node-fetch');


dotenv.config();


const router = express.Router();

router.post('/url', (req, res) => {
    const url = req.body.url;
    fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${url}&lang=auto`)
      .then(response =>{
              return response.json()
            })
            .then(data => {
                console.log(data)
                res.json(data)
            })
            .catch(err => console.log(err));

});


router.post('/txt', (req, res) => {
    const txt = req.body.txt;
    let url = encodeURI(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&txt=${txt}&lang=auto`)
    fetch(url)
            .then(response =>{
              return response.json()
            })
            .then(data => {
                console.log(data)
                res.json(data)
            })
            .catch(err => console.log(err));
});


module.exports = router;
