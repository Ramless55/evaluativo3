//modelo de la base de datos

const mongoose = require('mongoose');

const { Schema } = mongoose;

const gamesModel = new Schema(
    {
        name: { type: String, required: true, minLength: 3, maxLength: 50, unique: true },
        developer: { type: String, required: true, minLength: 3, maxLength: 30 },
        gender: { type: String, required: true, minLength: 3, maxLength: 50 },
        gameModes: { type: String, required: true, minLength: 3, maxLength: 100 },
        category: { type: String, required: true, minLength: 3, maxLength: 50 },
        platforms: { type: String, required: true, minLength: 3, maxLength: 100 },
        release: { type: String, required: true, minLength: 3, maxLength: 20 },
    }
)

module.exports = mongoose.model('Games', gamesModel);