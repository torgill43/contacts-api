const router = require('express').Router();
const nameController = require('../controllers/nameController');

// Route to display professional name
router.get('/', nameController.getNameData);

module.exports = router;