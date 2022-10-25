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

app.get('/category/:categoryName', (req, res) => {
    const categoryName = req.params.categoryName;
    categoryCourse = course.filter(c => c.category === categoryName);
    if (categoryName === 'All Category') {
        res.send(course)
    } else {
        res.send(categoryCourse);
    }
})

app.get('/course', (req, res) => {
    res.send(course);
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const courseDetails = course.find(c => c.id == id);
    res.send(courseDetails)
})

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
})