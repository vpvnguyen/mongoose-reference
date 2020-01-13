const express = require('express');
const router = express.Router();
const db = require('../model');

// get all items in db and render to index hbs
router.get('/', (req, res) => {
    db.Tooltip.find({})
    .then(result => res.send(result))
    .catch(err => console.log(err));
});

router.get('/create', (req, res) => {
    db.Tooltip.create({
        note: 'this is a note',
        date: 'todays date'
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
});

router.get('/remove', (req, res) => {
    db.Tooltip.remove({_id: '5e1ce596e75f98492462660e'})
    .then(res => console.log(res))
    .catch(err => console.log(err))
});


// export routes to server.js
module.exports = router;