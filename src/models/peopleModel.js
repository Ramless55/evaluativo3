//modelo de la base de datos

const mongoose = require('mongoose');

const { Schema } = mongoose;

const peopleModel = new Schema(
    {
        firstName: { type: String, required: true, minLength: 3, maxLength: 30 },
        lastName: { type: String, required: true, minLength: 3, maxLength: 30 },
        nickName: { type: String, required: true, unique: true, minLength: 3, maxLength: 30 },
        password: { type: String, required: true },
        cellPhone: { type: String, required: true, unique: true},
        country: { type: String, required: true},
        datePeople: { type: String, required: true},
        address: { type: String, required: true},
        email: { type: String, required: true, unique: true}
    }
)

module.exports = mongoose.model('People', peopleModel);