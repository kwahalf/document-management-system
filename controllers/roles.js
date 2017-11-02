const Role = require('../models/Role')

module.exports ={
    index: async (req, res, next)=>{
        const Roles = await Role.find({});
        res.status(200).json(Roles);
    },

    newRole: async (req, res, next)=>{
        const newRole = new Role(req.value.body);
        const role = await newRole.save();
        res.status(201).json(role);
    },

    getRole: async (req, res, next)=>{
        const {roleId} = req.value.params;
        const role = await Role.findById(roleId);
        res.status(200).json(role);
    },

    updateRole: async (req, res, next)=>{
        const {roleId} = req.value.params;
        const editedRole = req.value.body;
        const user = await Role.findByIdAndUpdate(roleId, editedRole);
        res.status(200).json({message: "sucessfuly updated Role of id: "+roleId});
    }
}