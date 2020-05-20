const express = require('express');

const authRouter = require('./auth').router;
const ordersRouter = require('./orders').router;

const router = express.Router();

router.use('/auth',authRouter);
