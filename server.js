// Adding requirements
const express = require("express");
const path = require("path");
const fs = require("fs");
// Setting up express app
const app = express();
const PORT = process.env.PORT || 3001;

// Starts server
app.listen(PORT, () => {
    console.log(`Listening for server at ${PORT}`)
});