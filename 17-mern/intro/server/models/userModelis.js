import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import validator from 'validator';

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
    if (!email || !password) {
        throw Error('visi laukeliai yra privalomi')
    }
    if (!validator.isEmail(email)) {
        throw Error ('el pastas yra netinkamas')
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('slaptazodis pernelyg silpnas');
    }
    
    const exists = await this.findOne({email});

    if (exists) {
        throw Error('el. pastas jau naudojamas');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await this.create({email, password: hash});

    return user;
}

userSchema.statics.login = async function (email, password) {
    if (!email || !password) {
        throw Error('visi laukeliai yra privalomi')
    }

    const user = await this.findOne({email});
    if (!user) {
        throw Error('el pastas neteisingas')
    }

    const match = await bcrypt.compare(password, user.password);
    if(!match) {
        throw Error('neteisingas passwordas');
    }

    return user;
}

export default mongoose.model('User', userSchema);