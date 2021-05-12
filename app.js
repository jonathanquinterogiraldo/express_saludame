const express = require('express');
const app = express();

app.get('/makers/:name', (req, res) => {  

    let name = 'desconocido';
    app.get('/user/:name', (req, res) => {
        
        name = req.params.name;   
      })

      const capitaliceWord = capitalizar(req.params.name);
      res.send(`<h1>Hola ${capitaliceWord}!</h1>`);
  
});

function capitalizar(str) {
    return str.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

app.listen(3000, () => console.log('Listening on port 3000!'));