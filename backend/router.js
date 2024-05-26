const express = require("express");
const router = express.Router();
const userRouter = require('./routers/userRouter');

// Use the userRouter for routes starting with /users
router.use('/users', userRouter);

module.exports = router;
