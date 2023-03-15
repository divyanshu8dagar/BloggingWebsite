import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`Our Blogging Application is running on port ${PORT}`)
});

app.listen(PORT, () => {
    console.log(`Your Blogging Application is running on port ${PORT}`)
});