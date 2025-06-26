const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'pridek maila pls'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'ivesk teisinga maila']
    },
    password: {
        type: String,
        required: [true, 'psw is required'],
        minlength: [6, 'min simbols in psw yra 6']
    }
});



userSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

const User = mongoose.model('user', userSchema);

module.exports = User;