const express = require('express')
const Chapter = require('./models/Chapter')

const router = express.Router();

router.get('/', (req, res)=>{
  res.json({msg: 'Hello world'})
})

router.post('/chapters', async (req, res) => {


  console.log(req.body)
  res.json(req.body)
})

module.exports =  router;