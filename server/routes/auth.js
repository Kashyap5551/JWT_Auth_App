
const express = require("express");
const router = express.Router();
const pool = require("../db");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGen");
const validInfo = require("../middleware/validInfo");
const authorize = require("../middleware/authorization");

//To register

router.post("/register", validInfo, async (req, res) => {
  const { email, name, password } = req.body;

  try {
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email
    ]);

    if (user.rows.length > 0) {
      return res.status(401).json("User already exist!");
    }

    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);

    let newUser = await pool.query(
      "INSERT INTO users (user_name, user_email, user_passwd) VALUES ($1, $2, $3) RETURNING *",
      [name, email, bcryptPassword]
    );

    const jwtToken = jwtGenerator(newUser.rows[0].user_id);

      return res.json({ jwtToken });
      
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//To log in

router.post("/login", validInfo, async (req, res) => {

    const { email, password } = req.body;

    try {
        const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [email]);

        if (user.rows.length === 0) {
            return res.status(401).json("Invalid Credentials");
        }

        //compare passwords with bcrypt

        const validPass = await bcrypt.compare(password, user.rows[0].user_passwd);
        
        if (!validPass) {
            return res.status(401).json("Invalid Credentials");
        }

        //generate jwt-token

        const jwtToken = jwtGenerator(user.rows[0].user_id);
        return res.json({ jwtToken });
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Login Error");
    }
});

router.post("/verify", authorize, (req, res) => {
    try {
      
        res.json(true);
        
    } catch (err) {
        
        console.error(err.message);
        res.status(500).send("Auth Error");
  }
});

module.exports = router;
