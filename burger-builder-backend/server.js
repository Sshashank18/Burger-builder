const express = require('express');
const cors = require('cors');

const {DOMAIN} = require('./environments');

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

const PORT = process.env.PORT || 5500;
database.sync()
    .then(()=> app.listen(PORT,() => {console.log(`Database synced and Server started running at ${DOMAIN}`)}));
