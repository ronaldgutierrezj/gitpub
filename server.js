const express = require('express');
const app = express();

// Route: Match http://localhost:3000/"
app.get('/', (req, res) => {
  console.log("HTTP GET / received");
  res.send('Hello SEI!');
});

// Web server. Listen on port 3000
app.listen(3000, ()=>{
    console.log("Express is listening on port 3000...")
  });

