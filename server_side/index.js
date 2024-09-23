const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/User');


const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/crud')
.then(() => {console.log('Connected to MongoDB');})
.catch((error) => {console.log(error);})

app.get('/', async (req, res) => {
    UserModel.find()
    .then((users) => {
        res.json(users);
    })
    .catch((error) => {
        console.log(error);
    })
})


app.listen(3001, () => {
    console.log('Server started on port 3001');
})