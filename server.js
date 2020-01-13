const express = require('express');
const app = express();
const tooltipController = require('./controller/tooltip.controller.js');
const PORT = 3000;

const mongoose = require('mongoose');

// connect mongodb 
const MONGODB_URI = 'mongodb://localhost:27017/test';
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on("error", () => {
    console.log("> error occurred from the database");
});
mongoose.connection.once("open", () => {
    console.log("> successfully opened the database");
});

app.use(tooltipController);

app.listen(PORT, () => console.log(`Server listening on: http://localhost:${PORT}`));
