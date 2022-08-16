const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    email: String,
    password: String,
	photo: String,
    info_personal: {
        firstName: String,
        lastName: String,
        dni: String,
        phone: String,
        gender: String,
        dateBirth: String,
        address: {
            street: String,
            department: String,
            province: String,
            district: String
        },
        sport: String
    },
    info_health: {
        heigth: Number,
        weigth: Number,
		age: Number,
        bloodType: String,
        diseases: String,
        allergies: String,  
    }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('User', userSchema);