const express = require('express');
let app = express();

const controllerOne = require('./controllers/controllerOne');
const modelOne = require('../db/models/model-one');

app.use(express.static(__dirname + '/../client/dist'));

// post
app.post('/api/', (request, response) => {
  console.log('post() /api');

  controller.add(request, response);

});

// get
app.get('/api/', (request, response) => {
  console.log('get() /api');
  //controller.add(request, response);
});


let port = 3000;

app.listen(port, function() {
  console.log(`[nodemon] Listening on Port [:${port}]`);
});

// get




// post