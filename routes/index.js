const router = require('express').Router();

router.use('/contacts', require('./contactsRoute'));
router.use('/', function (req, res, next) {
    res.send("Sydney Orgill")
});

module.exports = router;