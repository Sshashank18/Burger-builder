const express = require('express');
const cors = require('cors');

const {database} = require('./database/database');
const router = require('./api/index').router;

var passport = require('passport');
require('./passport');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use(passport.initialize());

app.use('/api', router);

const PORT = 5500;
database.sync()
    .then(()=> app.listen(PORT,() => {console.log(`Database synced and Server started running at https://127.0.0.1:${PORT}`)}));
