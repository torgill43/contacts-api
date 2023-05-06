const router = require('express').Router();

// Contacts Route
router.use('/contacts', require('./contactsRoute'));

// Simple display for base route
router.use('/', function (req, res, next) {
    res.send("Sydney Orgill")
});

module.exports = router;