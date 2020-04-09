const express = require('express');

const app = express();

app.get('/projects', (request, response)=>{
  return response.json({message: 'olá mundo'});
})

app.listen(3333, ()=>{
  console.log("🚀BackEnd started");
});