const express = require("express");
const userRouter = express.Router();

// Define your user routes here
userRouter.get('/', (req, res) => {
    res.send('User home route');
})



module.exports = userRouter;
