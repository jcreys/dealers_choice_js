const express = require('express');
const app = express();
const albumGenre = [
    {id: 1, genre: 'hip-hop'},
    {id: 2, genre: 'pop' },
    {id: 3, genre: 'r&b'},
]
app.get('/', (req,res) => {
  const html = albumGenre.map(albumGenre => {
    return `<div><a href=${albumGenre}</a></div>`;
  }).join('');
  res.send(html);
  //display list of items in root

});
//implement route parameters
app.get('/api/genres/:id', (req,res) => {
    
}).join('');
const port = process.env.PORT || 3000; //environment variable
app.listen(port, () => console.log(`Listneing on port ${port}`))