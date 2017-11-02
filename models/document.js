const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const documentSchema = new Schema({
    ownerId: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    title: String,
    content: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    modifiedAt: {
        type: Date,
        default: Date.now
    }
})

const Document = mongoose.model('Document', documentSchema);
module.exports = Document;