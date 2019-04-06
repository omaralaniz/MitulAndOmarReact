const express = require('express');

const app = express();

app.get('/api/fishes', (req, res) =>{
  const fishes = [
    {id: 1, name: "Tuna", weight: 80},
    {id: 2, name: "Petrale", weight: 4},
    {id: 3, name: "Salmon", weight: 20}
  ];
  res.json(fishes);
});

const port = 5000;

app.listen(port, ()=>console.log(`Listening in ${port}`));