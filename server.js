const express = require('express');
const app = express();
const port = 3000;
const drinks = require("./models/drinks")
const food = require("./models/food")

// Route: Match http://localhost:3000/"
app.get('/', (req, res) => {
  res.send(`<html>
  <head>
      <meta charset="utf-8">
      <title>Drinks App</title>  
      <style type="text/css">
          body {
              color: blanchedalmond;
              background-color: steelblue;
              }
              </style>
  </head>
  <body>
  <h1>'Welcome to the Gitpub App!'</h1>
  <br>
  <br>
  <a href ="/food">See the food menu</a>
  <br>
  <br>
  <a href ="/drinks">See the drinks menu</a>
  </body>
  </html>`);
});

app.get('/drinks', (req, res) => {
    res.render('drinks_index.ejs',{allDrinks: drinks});
  });

app.get('/food', (req, res) => {
    res.render('food_index.ejs',{allFoods: food});
  });

app.get('/drinks/:id', (req,res)=>{
    res.render('drinks_show.ejs', {drink: drinks[req.params.id]});
});

app.get('/food/:id', (req,res)=>{
  res.render('food_show.ejs', {food1: food[req.params.id]});
});
// Web server. Listen on port 3000

app.listen(port, ()=>{
    console.log("Express is listening on port 3000...")
  });

