const express = require("express");
const app = express();
const cors = require("cors");

//middleware 
app.use(express.json());
app.use(cors());


//ROUTES

//reg and login routes
app.use("/auth", require("./routes/auth"));

app.listen(5001, () => {
    console.log("server is running on port 5001");
})