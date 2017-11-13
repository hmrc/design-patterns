var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.redirect(301, "http://hmrc.github.io/assets-frontend/")
})

// add your routes here

module.exports = router
