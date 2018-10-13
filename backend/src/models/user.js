import mongoose from 'mongoose';

let userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('User', userSchema);