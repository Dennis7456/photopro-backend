const express = require('express');

const morgan = require('morgan');
//const { comment } = require('postcss');

//express app
const app = express();

//configure port
const PORT = process.env.PORT || 5050;

//listen for requests
app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});

//morgan logs
app.use(morgan('dev'));

app.get('/', (req, res) => {
    console.log('It Works!');
    res.end();
})