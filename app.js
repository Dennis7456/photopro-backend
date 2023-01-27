const express = require('express');
const dbConnect = require("./db/db.Connect");
const bcrypt = require('bcrypt');
var bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const auth = require('./auth/auth');
const morgan = require('morgan');

//express app
const app = express();

//connect to db
dbConnect();

// Curb Cores Error by adding a header here
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

//register user
app.post("/register", (req, res) => {
    console.log(req.body.email);
    console.log(req.body.password);
    bcrypt
    .hash(req.body.password, 10)
    .then((hashedPassword) => {
        const user = new User({
            email: req.body.email,
            password: hashedPassword
        })

    user.save()
    .then((result) => {
        res.status(201).send({
            message: 'User Created Successfully',
            result
        });
    })
    .catch((error) => {
        res.status(500).send({
            message: "Error Creating User",
            error
        });
    });

    })
    .catch((error) => {
        res.status(500).send({
            message: "Password was not hashed successfully",
            error
        })
    })
});

//login user
app.post("/login", (req, res) => {
    User.findOne({ email: req.body.email })
    .then((user) => {
        bcrypt.compare(req.body.password, user.password)
        .then((passwordCheck) => {
            if(!passwordCheck){
                return res.status(400).send({
                    message: "Wrong Password",
                    error
                });
            }

            //create JWT Token
        const token = jwt.sign(
            {
                userId: user._id,
                userEmail: user.email
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h"}
        );

        //return success response
        res.status(200).send({
            message: "Login successful",
            email: user.email,
            token
        });
        })
        .catch((error) => {
            res.status(400).send({
                message: "Wrong password",
                error
            })
        });
    })
    .catch((error) => {
        res.status(404).send({
            message: "Email not found",
            error
        });
    });
})

// free endpoint
app.get("/free-endpoint", (request, response) => {
    response.json({ message: "You are free to access me anytime" });
  });
  
// authentication endpoint
app.get("/auth-endpoint", auth, (req, res) => {
    res.json({ message: "You are authorized to access me" });
  });