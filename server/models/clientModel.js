const mongoose = require('mongoose')
const { Schema } = mongoose;

const clientSchema = new Schema({
    fname: String,
    lname: String,
    email: { type: String, unique: true },
    mobile: { type: String, unique: true },
    project: String
}, { timestamps: true });

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;