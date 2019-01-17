const router = require('express').Router();
const { Campus } = require('../models') //require('../models/index.js');

router.get('/', async (req, res, next) => { // async/await syntax (ES7);
    let campuses;
    try {
      campuses = await Campus.findAll(); // async/await syntax (ES7);
    }
    catch (err) {
      res.send(err);
    }
    res.status(200).json(campuses);
});
  
router.get('/:campusId', (req, res, next) => {
    Campus.findByPk(req.params.campusId) // You might see findById() in other codebases;
        .then(foundCampus => res.status(200).json(foundCampus)) // .then() syntax (ES6);
        .catch(err => console.log(err));
});

router.post('/', (req, res, next) => {
  let {name, imageUrl, address, description} = req.body;
  Campuses.create({
    name,
    imageUrl,
    address,
    description
  }).then (rows => {
    console.log(rows);
    res.send(rows);
  }).catch(err => {
    let message = err.errors[0].message;
    res.send(message);
    console.error(err);
  })
})
// router.put('/:campusId', (req, res, next) =>{});
// router.delete('/:campusId', (req, res, next) =>{});

module.exports = router;