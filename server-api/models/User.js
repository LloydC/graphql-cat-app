const mongoose = require('mongoose');
const Schema = mongoose.Schema
const userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    cat: {
        type: Schema.Types.ObjectId,
        ref: 'Cat'
    }
},
{timestamps: true}
)

const User = mongoose.model('User', userSchema);

module.exports = User;