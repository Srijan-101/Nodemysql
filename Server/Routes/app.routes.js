const express = require('express')
const router = express.Router()
const conn = require('../Models/connection')

router.post('/create', (req, res) => {
  const body = req.body
  if (Object.keys(body).length === 0)
    return res.status(500).json({ message: 'There should be somedata' })
  else {
    const query = `INSERT INTO Student(Id,Name,Rollno,Faculty) VALUES (${req.body.id},'${req.body.name}','${req.body.rollno}','${req.body.faculty}')`
    conn.query(query, (error, result) => {
      if (error) console.log(error)
      else res.status(200).send(req.body)
    })
  }
})

router.get('/read', (req, res) => {
  let query = 'SELECT * FROM Student'
  conn.query(query, (error, result) => {
    if (error) console.log(error)
    else res.status(200).send(result)
  })
})

module.exports = router
