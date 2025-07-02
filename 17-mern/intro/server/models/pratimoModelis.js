import mongoose from "mongoose";

const Schema = mongoose.Schema;

const pratimoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    level: {
        type: Number,
        required: true
    }
}, {timestamps: true})

export default mongoose.model('tasks', pratimoSchema);