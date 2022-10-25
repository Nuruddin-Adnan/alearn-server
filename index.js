const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');
const course = require('./data/course.json');

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.get('/course', (req, res) => {
    res.send(course);
})

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
})