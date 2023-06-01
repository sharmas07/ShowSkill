import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
    userId: mongoose.Types.ObjectId,
    studentName: {
        type: String,
        required: true
    },
    educationalBackground: {
        type: String,
    },
    skills: {
        type: [],
    },
    projects: {
        type: [{
            title: String,
            description: String
        }],
    },
    achievements: [],
    hobbies: [],
    contactInfo: {
        email: String,
        phone: String,
        address: String
    },
    endorsements: [
        {
            endorser: mongoose.Types.ObjectId,
        }
    ],
    comments: [
        {
            commenter: mongoose.Types.ObjectId,
            comment: String,
            commentedAt: Date.now
        }
    ],

},
    { timestamps: true })