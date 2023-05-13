const mongodb = require('../db/mongodb');
const ObjectId = require('mongodb').ObjectId;

const getAllContacts = async (req, res, next) => {
    // #swagger.tags= ['Contacts']
    try {
        const result = await mongodb.getDb().db('contacts').collection('contacts').find();
        result.toArray().then((lists) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists);
        });
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
};

const getOneContact = async (req, res, next) => {
    // #swagger.tags= ['Contacts']
    try {
        const userId = new ObjectId(req.params.id);
        const result = await mongodb
            .getDb()
            .db('contacts')
            .collection('contacts')
            .find({ _id: userId });
        result.toArray().then((lists) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists[0]);
            // console.log(lists)
        });
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
};

const createContact = async (req, res, next) => {
    // #swagger.tags= ['Contacts']
    try {
        console.log(req.body)
        const contact = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            favoriteColor: req.body.favoriteColor,
            birthday: req.body.birthday
        };
        const result = await mongodb
            .getDb()
            .db('contacts')
            .collection('contacts')
            .insertOne(contact)
            res.setHeader('Content-Type', 'application/json');
            console.log(result)
            res.status(201).json({"id":result.insertedId})
    } catch {
        res.status(500).json({ message: err.message })
    }
};

const updateContact = async (req, res, next) => {
    // #swagger.tags= ['Contacts']
    try {
        const userId = new ObjectId(req.params.id);
        const contact = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            favoriteColor: req.body.favoriteColor,
            birthday: req.body.birthday
        };
        const result = await mongodb
            .getDb()
            .db('contacts')
            .collection('contacts')
            .updateOne({ _id: userId }, {$set: contact});
        console.log(result)
        if (result.modifiedCount > 0) {
            res.status(204).send();
        } else {
            res.status(500).json(result.error || "Some error occurred while updating the contact.")
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const deleteContact = async (req, res, next) => {
    // #swagger.tags= ['Contacts']
    try {
        const userId = new ObjectId(req.params.id);
        const result = await mongodb
            .getDb()
            .db('contacts')
            .collection('contacts')
            .deleteOne({ _id: userId });
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send({ "message": "delete successful for _id:" + userId});
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
};

module.exports = { 
    getAllContacts, 
    getOneContact, 
    updateContact,
    createContact,
    deleteContact
}