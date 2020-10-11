const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const bcrypt = require('bcryptjs');


const api = require('./API/router');
// const db = require('./models');


const app = express();
//app.use(cors());
app.use(bodyParser.json());
app.use(api);




app.listen(8000, (req,res) => {
    console.log('Server has started at port 8000');
});