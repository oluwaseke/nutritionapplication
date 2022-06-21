const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://seke:mern@cluster0.11m4a.mongodb.net/EatRight!?retryWrites=true&w=majority"
);

// app.get("/getUsers", (req, res) => { })

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
