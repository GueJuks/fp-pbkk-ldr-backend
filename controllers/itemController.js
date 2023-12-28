const itemModel = require('../models/itemModel')
// get items
const getItemController = async (req, res) => {
    try {
        const items = await itemModel.find()
        res.status(200).send(items);
    } catch (error) {
        console.log(error)
    }
}

// add items
const addItemController = async (req, res) => {
    try {
        const newItem = new itemModel(req.body)
        await newItem.save()
        res.status(201).send("Item Created Succesfuly");
    } catch (error) {
        res.status(400).send("error", error);
        console.log(error);
    }
}

// edit data
const editItemController = async (req, res) => {
    try {
        const { itemId } = req.body;
        console.log(itemId);
        await itemModel.findOneAndUpdate({ _id: itemId }, req.body, {
            new: true,
        });

        res.status(201).json('Item Update');
    } catch (error) {
        res.status(400).send(error)
        console.log(error)
    }
}

// delete data
const deleteItemController = async (req, res) => {
    try {
        const { itemId } = req.body;
        await itemModel.findOneAndDelete({ _id: itemId });

        res.status(200).send('Item Delete');
    } catch (error) {
        res.status(400).json(error)
        console.log(error)
    }
}

module.exports = { getItemController, addItemController, editItemController, deleteItemController };