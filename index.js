// configs
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

// routes
app.get('/', function(req, res) {
    res.send('The application is working')
})

app.listen(port, () => {
    console.log(`Project running in port ${port}`);
})