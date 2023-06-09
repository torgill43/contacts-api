const router = require('express').Router();
const contactController = require('../controllers/contactController');

// Route to retrieve all contacts
router.get('/', contactController.getAllContacts);

// Route to get single contact based on ID
router.get('/:id', contactController.getOneContact);

// Route to create a contact
router.post('/', contactController.createContact);

// Route to update a contact based on ID
router.put('/:id', contactController.updateContact);

// Route to delete a contact based on ID
router.delete('/:id', contactController.deleteContact);

module.exports = router;
