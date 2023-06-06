const Router = require('express').Router;
const db = require('../db/connection');
const {ObjectId} = require('mongodb');

const router = Router();

// creation route form
router.get('/', function(red, res) {

    res.render('notes/create');

})

// post note for database insertion
router.post('/', function(req, res) {

    const data = req.body;
    const title = data.title;
    const description = data.description;

    db.getDb()
        .db()
        .collection('notes')
        .insertOne({ title: title, description: description });

    res.redirect(301, '/');

})

module.exports = router;