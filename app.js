const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello NosSLV, this is the last time we see each other!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
