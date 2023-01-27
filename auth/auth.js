const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    try {
        //get token from auth header
        const token = await req.headers.authorization.split(" ")[1];

        //check if token matches
        const decodedToken = await jwt.verify(token, "RANDOM-TOKEN");

        //retrieve user details
        const user = await decodedToken;

        req.user = user

        next();
    }
    catch (error) {
        res.status(401).json({
            error: new Error("Invalid Request"),
        })
    }
}