const express = require('express');
const app = express();

app.get('/', (req, res) => {  
    
    let name = 'desconocido';

  for (const key in req.query) {

    if(req.query[key].length !== 0)
    name = req.query[key];    

  }  

  res.send(`<h1>Hola ${name}!</h1>`);
  
});

app.listen(3000, () => console.log('Listening on port 3000!'));