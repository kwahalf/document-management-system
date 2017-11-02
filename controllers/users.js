const User = require('../models/user')

module.exports ={
    index: async (req, res, next)=>{
        const users = await User.find({});
        res.status(200).json(users);
    },

    newUser: async (req, res, next)=>{
        const newUser = new User(req.value.body);
        const user = await newUser.save();
        res.status(201).json(user);
    },

    getUser: async (req, res, next)=>{
        const {userId} = req.value.params;
        const user = await User.findById(userId);
        res.status(200).json(user);
    },

    updateUser: async (req, res, next)=>{
        const {userId} = req.value.params;
        const editedUser = req.value.body;
        const user = await User.findByIdAndUpdate(userId, editedUser);
        res.status(200).json({message: "sucessfuly updated user of id: "+userId});
    }
}