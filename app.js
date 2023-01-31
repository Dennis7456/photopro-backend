const express = require('express');
const dbConnect = require("./db/db.Connect");
const bcrypt = require('bcryptjs');
var bodyParser = require('body-parser');


const morgan = require('morgan');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const loginRoute = require('./routes/loginRoute');
const registerRoute = require('./routes/registerRoute');
const freeRoute = require('./routes/freeRoute');
const protectedRoute = require('./routes/protected/protectedRoute');
const albumRoute = require('./routes/albumRoutes');

//express app
const app = express();

//connect to db
dbConnect();

// Curb Cors Error by adding a header here
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
  });

  const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
const User = require("./models/userModel");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

//configure port
const PORT = process.env.PORT || 5050;

//listen for requests
app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});

//morgan logs
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('If you are reading this, it Works!')
    res.end();
});

app.use(userRoutes);
app.use(loginRoute);
app.use(registerRoute);
app.use(freeRoute);
app.use(protectedRoute);
app.use(albumRoute);