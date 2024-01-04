const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
    const {name} = req.body;

    if(name){
        res.send(`<h1>Welcome ${name}</h1>`);
    }
    else{
        res.status(401).send("<h1>Please provide credentials</h1>");
    }

    res.json({"message": "success"});
})

module.exports = router;