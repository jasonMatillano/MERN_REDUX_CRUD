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

app.post('/create', async (req, res) => {
    UserModel.create(req.body)
    .then((user) => {
        res.json(user);
    })
    .catch((error) => {
        console.log(error);
    })
})

app.put('/update/:id', async (req, res) => {
    UserModel.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
        UserModel.findById(req.params.id)
        .then((user) => {
            res.json(user);
        })
    })
    .catch((error) => {
        console.log(error);
    })
})

app.listen(3001, () => {
    console.log('Server started on http://localhost:3001');
})