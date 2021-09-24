const express = require("express");
const app = express();
const cors = require("cors");

//middleware 
app.use(express.json());
app.use(cors());


//routes
app.listen(5001, () => {
    console.log("server is running on port 5001");
})