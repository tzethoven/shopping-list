const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');



// @route GET api/items
// @desc Get All Items
// @access Public
router.get('/', (req, res) => {
    Item
        .find()
        .sort({ date: -1 })
        .then(items => res.json(items))
});


// @route POST api/items
// @desc Create An Item
// @access Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem
        .save()
        .then(item => res.json(item));
});


// @route DELETE api/items
// @desc Delete An Item
// @access Public
router.delete('/:id', (req, res) => {
    Item
        .findById(req.params.id)                // Find Item
        .then(item => {
            item
                .remove()                       // Remove Item
                .then(() => res.json(item))     // Return Item
            })
        .catch(err => res.status(404).json({msg: "Couldn't find id"}))
    });


module.exports = router;