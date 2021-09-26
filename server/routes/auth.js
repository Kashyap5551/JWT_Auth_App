
const express = require("express");
const router = express.Router();
const pool = require("../db");


//To register

router.post("/register", async (req, res) => {
    try {
        
        //getting name, email and pass

        const { name, email, password} = req.body;
        //check if user exists
        const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
            email
        ])
        
        if (user.rows.length !== 0) {
            return res.status(401).send("User Exists!")
        }
        //bcrypt the pass

        //enter user to db

        //generate jwt-token

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Err");
    }
})
module.exports = router;
