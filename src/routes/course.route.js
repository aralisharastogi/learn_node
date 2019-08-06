const express = require('express');
const router = express.Router();

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
];

/*router.get('/:id', (req, res) => {
    res.send(req.params.id);
});*/
router.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.params);
});
router.get('/', (req, res) => {
    res.send(courses);
});

router.post('/', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});
router.delete('/', (req, res) => {
    res.send(courses);
})
router.get('/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('Not Found');
    res.send(course);
});


module.exports = router;