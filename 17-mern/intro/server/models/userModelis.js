import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true});

userSchema.statics.signup = async function (email, password) {
    const exists = await this.findOne({email});

    if (exists) {
        throw Error('el. pastas jau naudojamas');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await this.create({email, password: hash});

    return user;
}

export default mongoose.model('User', userSchema);