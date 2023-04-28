const router = require('express').Router();
const contactController = require('../controllers/contactController');

router.get('/', contactController.getAllContacts);

router.get('/:id', contactController.getOneContact);

module.exports = router;
