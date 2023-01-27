const express = require('express');
const dbConnect = require("./db/db.Connect");

const morgan = require('morgan');
//const { comment } = require('postcss');

//express app
const app = express();

//connect to db
dbConnect();

//configure port
const PORT = process.env.PORT || 5050;

//listen for requests
app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});

//morgan logs
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('If you are reading this, it Works!')
    res.end();
})