const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Basic Routes
app.get('/', (req, res) => {
    res.status(200).send('Welcome to Resume Enhancer API!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
