import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt :{
        type :  Date,
        default: Date.now
    }
})

export const Course = mongoose.model("Course", CourseSchema);