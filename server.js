const express = require('express');
const app = express();
const port = 3000;
const drinks = require("./models/drinks")

// Route: Match http://localhost:3000/"
app.get('/', (req, res) => {
  res.send('Welcome to the Gitpub App!');
});

app.get('/drinks', (req, res) => {
    res.render('drinks_index.ejs',{allDrinks: drinks});
  });

app.get('/drinks/:id', (req,res)=>{
    res.send(req.params.id)
})
// Web server. Listen on port 3000

app.listen(port, ()=>{
    console.log("Express is listening on port 3000...")
  });

