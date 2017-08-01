var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('govuk_template.html')
})

// add your routes here

module.exports = router
