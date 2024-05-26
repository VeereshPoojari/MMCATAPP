const express = require("express");
const userRouter = express.Router();

// Define your user routes here
userRouter.get('/', (req, res) => {
    res.send('User home route');
});

console.log("User router loaded");

module.exports = userRouter;
