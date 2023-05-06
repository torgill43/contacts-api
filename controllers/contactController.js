const mongodb = require('../db/mongodb');
const ObjectId = require('mongodb').ObjectId;

const getAllContacts = async (req, res, next) => {
    const result = await mongodb.getDb().db('contacts').collection('contacts').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
        // console.log(lists)
    });
};

const getOneContact = async (req, res, next) => {
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
};

const createContact = async (req, res, next) => {
    const result = await mongodb
        .getDb()
        .db('contacts')
        .collection('contacts')
        .insertOne({
            "firstName": "Cool",
            "lastName": "Dude",
            "email": "cooldude@email.com",
            "favoriteColor": "chartreuse",
            "birthday": "5/5/05"
        })
        res.setHeader('Content-Type', 'application/json');
        res.status(201).send("_id: " + result.insertedId.toString())
        // res.status(201).send({ "message": result._id });

};

const updateContact = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
        .getDb()
        .db('contacts')
        .collection('contacts')
        .updateOne(
            { _id: userId },
            { $set:
                {
                    "fname": "Cool",
                    "lname": "Dude",
                    "email": "cooldude@email.com",
                    "favColor": "green",
                    "bday": "1/1/11"
                }});
    res.setHeader('Content-Type', 'application/json');
    res.status(204);
};

const deleteContact = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
        .getDb()
        .db('contacts')
        .collection('contacts')
        .deleteOne({ _id: userId });
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send({ "message": "delete successful for _id:" + userId});
}

module.exports = { 
    getAllContacts, 
    getOneContact, 
    updateContact,
    createContact,
    deleteContact
}