const userModel = require('../models/userModel')

// login user
const loginController = async (req, res) => {
    const { userId, password } = req.body
    try {
        const user = await userModel.findOne({ userId, password, verified: true });
        if (user) {
            res.status(200).send(user);
        }
        else {
            res.json({
                message: 'Login Gagal',
                user
            })
        }
    } catch (error) {
        console.log(error)
    }
}

// register
const registerController = async (req, res) => {
    try {
        const newUser = new userModel({ ...req.body, verified: true });
        await newUser.save()
        res.status(201).send("User Baru ditambahkan Succesfuly");
    } catch (error) {
        res.status(400).send("error", error);
        console.log(error);
    }
}


module.exports = { loginController, registerController };