import jwt from 'jsonwebtoken';
import User from '../models/userModelis.js'

const requireAuth = async (req, res, next) => {
    const {authorization} = req.headers;

    if (!authorization) {
        return res.json({error: 'autorizavimas yra privalomas'});
    }

    const token = authorization.split(' ')[1];

    try {
        const { _id } = jwt.verify(token, process.env.SECRET);

        req.user = await User.findOne({_id}).select('_id');
        next();
    } catch (error) {
        res.json({error: 'uzklausa neleistina'});
    }
}

export default requireAuth;