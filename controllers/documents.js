const Document = require('../models/Document')

module.exports ={
    index: async (req, res, next)=>{
        const documents = await Document.find({});
        res.status(200).json(documents);
    },

    newDocument: async (req, res, next)=>{
        const newDocument = new Document(req.value.body);
        const doc = await newDocument.save();
        res.status(201).json(doc);
    },

    getDocument: async (req, res, next)=>{
        const {documentId} = req.value.params;
        const doc = await Document.findById(documentId);
        res.status(200).json(doc);
    },

    updateDocument: async (req, res, next)=>{
        const {documentId} = req.value.params;
        const editedDocument = req.value.body;
        const user = await Document.findByIdAndUpdate(documentId, editedDocument);
        res.status(200).json({message: "sucessfuly updated document of id: "+documentId});
    }
}