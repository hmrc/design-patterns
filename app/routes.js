var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('govuk-template.html')
})

router.get('/keep-alive', function (req, res) {
  res.redirect('patterns/session-timeout-modal/timeout-modal')
});

// add your routes here

module.exports = router
