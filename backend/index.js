import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';


const app = express();
const PORT = 3000;


// mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/blogDB');

// bodyparser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send(`Our Blogging Application is running on port ${PORT}`)
});

app.listen(PORT, () => {
    console.log(`Your Blogging Application is running on port ${PORT}`)
});