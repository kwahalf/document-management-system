const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    name: {
        first: {
            type: String,
            required: true
        },
        last: {
            type: String,
            required: true
        }
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    documents: [{
        type: Schema.Types.ObjectId,
        ref: 'document'
    }]

});

const user = mongoose.model('user', userSchema);
module.exports = user;