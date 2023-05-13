const router = require('express').Router();

// Route for Swagger UI
router.use('/', require('./swagger'))

// Contacts Route
router.use('/contacts', require('./contactsRoute'));

// Simple display for base route
router.use('/', function (req, res, next) {
    res.send("Sydney Orgill")
});

module.exports = router;