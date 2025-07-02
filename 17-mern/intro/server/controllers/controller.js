import Pratimas from "../models/pratimoModelis.js";
import mongoose from "mongoose";

export const getPratimai = async(req, res) => {
    const pratimai = await Pratimas.find({}).sort({createadAt: -1})

    res.json(pratimai);
}

export const getPratimas = async (req,res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.json({error: 'id nevalidus'})
    }

    const pratimas = await Pratimas.findById(id);

    if (!pratimas) {
        return res.json({error: 'tokio pratimo nera'})
    }

    res.json(pratimas);
}

export const createPratimas = async (req, res) => {
    const {title, reps, level} = req.body;

    try {
        const pratimas = await Pratimas.create({title, reps, level});

        res.json(pratimas)
    } catch (error) {
        res.json({error})
    }
}

export const updatePratimas = async (req, res ) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.json({error: 'id nevalidus'})
    }

    const pratimas = await Pratimas.findOneAndUpdate({_id: id}, {...req.body});
    if (!pratimas) {
        return res.json({error: 'tokio pratimo nera'})
    }

    res.json(pratimas);
}

export const deletePratimas = async(req, res) => {
    const {id} = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.json({error: 'id nevalidus'})
    }
    const pratimas = await Pratimas.findOneAndDelete({_id: id});
    if (!pratimas) {
        return res.json({error: 'tokio pratimo nera'})
    }

    res.json(pratimas);
}