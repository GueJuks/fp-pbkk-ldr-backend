const billsModel = require('../models/billModel')

// add items
const addBillsController = async (req, res) => {
    try {
        const newBill = new billsModel(req.body)
        await newBill.save()
        res.send("BillCreated Succesfuly");
    } catch (error) {
        res.send("Terdapat Kesalahan");
        console.log(error);
    }
}

// get data bill
const getBillsController = async (req, res) => {
    try {
        const bills = await billsModel.find()
        res.send(bills);
    } catch (error) {
        console.log(error)
    }
}

module.exports = { addBillsController, getBillsController };