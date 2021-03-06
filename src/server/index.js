const path = require('path');
const express = require('express');

const meanCloudAPIsRouter = require('./meancloudAPIs');

const app = express()

app.use(
    express.urlencoded({
      extended: true
    })
  )
  
app.use(express.json())

app.use(express.static('dist'));

// api routes
app.use('/api', meanCloudAPIsRouter);

app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'))
})


// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

