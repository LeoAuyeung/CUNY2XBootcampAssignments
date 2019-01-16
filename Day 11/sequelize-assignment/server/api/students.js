const router = require('express').Router();
const { Student } = require('../models'); //require('../models/index.js');

router.get('/', async (req, res, next) => { // async/await syntax (ES7);
    let students;
    try {
        students = await Student.findAll(); // async/await syntax (ES7);
    }
    catch (err) {
      res.send(err);
    }
    res.status(200).json(students);
});
  
router.get('/:studentId', (req, res, next) => {
    Student.findByPk(req.params.studentId) // You might see findById() in other codebases;
        .then(foundStudent => res.status(200).json(foundStudent)) // .then() syntax (ES6);
        .catch(err => console.log(err));
});

router.post('/', (req, res, next) => {
    let {firstName, lastName, email, imageUrl, gpa} = req.body;
    Campuses.create({
        firstName,
        lastName,
        email,
        imageUrl,
        gpa
    }).then (rows => {
      console.log(rows);
      res.send(rows);
    }).catch(err => {
      let message = err.errors[0].message;
      res.send(message);
      console.error(err);
    })
})

// router.post('/', (req, res, next) =>{});
// router.put('/:studentId', (req, res, next) =>{});
// router.delete('/:studentId', (req, res, next) =>{});

module.exports = router;