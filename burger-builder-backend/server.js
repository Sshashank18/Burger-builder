const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = 5500;
app.listen(PORT,() => {console.log(`Server running at https://127.0.0.1:${PORT}`)});
