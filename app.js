const express = require('express');
const app = express();
const albums = [
    {id: 1, genre: 'hip-hop'},
    {id: 2, genre: 'pop' },
    {id: 3, genre: 'r&b'},
];
//implement route parameters
app.get('/albums/:id', (req,res) => {
  //route parameters
  const album = albums.find(album => album.id === req.params.id*1);
  const html = `<div><a href='/'>${album.genre}</a></div>`;
  res.send(html);
});
app.get('/', (req,res) => {
  const html = albums.map(album => {
    return `<div><a href='/albums/${album.id}'>${album.genre}</a></div>`;
  }).join('');
  res.send(html);
  //display list of items in root

});

const port = process.env.PORT || 3000; //environment variable
app.listen(port, () => console.log(`Listneing on port ${port}`))