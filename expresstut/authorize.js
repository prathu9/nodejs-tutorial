const authorize = (req, res, next) => {
    const {user} = req.query;
    if(user === "john"){
        console.log({user: "john", id: 2});
        next();
    }
    else{
        res.status(401).send("<h1>Unauthorized</h1>")
    }
}

module.exports = authorize;