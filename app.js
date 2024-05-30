const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World! \n THIS IS AKWARA KELECHI EMMANUEL \n VUG/CSC/22/6486'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
