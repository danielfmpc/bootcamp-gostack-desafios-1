const express = require('express');

const app = express();

app.get('/projects', (request, response)=>{
  return response.send('hellow word');
})

app.listen(3333);