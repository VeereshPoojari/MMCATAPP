const express = require("express");
const app = express();
require('dotenv').config();  // Load environment variables at the start

// Connect to the database
const database = require('./databaseConnection');
database();

// Middlewares to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the main router
const router = require('./router');
app.use('/', router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
