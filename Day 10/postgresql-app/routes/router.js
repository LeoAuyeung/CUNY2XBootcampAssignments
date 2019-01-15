const router = require("express").Router();
// import our pg client
const client = require("../client");
module.exports = router;

router.get('/input', (req, res) => {
  client.query('select * from input', (err, data) => {
    if (err) { return console.error(err); }
    console.log(data);
    res.send(data.rows);
  })
})

router.get('/input/:inputID', (req, res) => {
  const inputID = req.params.inputID;
  res.send(inputID);
  client.query(`select * from input where id=${inputID}`), ({
    if (err) { return console.error(err); }
    res.send(data.rows);
  })
})

router.post('/input', (req, res) => {
  let {input, length} = req.body;
  client.query(`insert into input (input, length) values ('${input}', '${length}')`, (err, data) => {
    if (err) { return console.error(err); }
    res.status(201).send(data);
  })
})

router.delete('/input/:inputID', (req, res) => {
  const inputID = req.params.inputID;
  client.query(`delete from input where id=${inputID}`, (err, data) => {
    if (err) { return console.error(err); }
    res.status(201).send(data);
  })
})