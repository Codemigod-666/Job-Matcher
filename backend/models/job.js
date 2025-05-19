const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
        },
        recruiter: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },

        company: {
            name: String,
            website: String,
            industry: String,
        },

        skills: {
            type: [String],
            required: true,
        },
        tags: {
            type: [String],
            default: [],
        },
        category: {
            type: String,
        },
        role: {
            type: String,
        },
        experienceLevel: {
            type: String,
            enum: ['Fresher', 'Junior', 'Mid', 'Senior'],
        },
        location: {
            type: String,
        },
        jobType: {
            type: String,
            enum: ['Full-time', 'Part-time', 'Internship', 'Contract'],
        },
        isRemote: {
            type: Boolean,
            default: false,
        },
        salaryRange: {
            min: Number,
            max: Number,
        },

        viewsCount: {
            type: Number,
            default: 0,
        },
        applicantsCount: {
            type: Number,
            default: 0,
        },

        deadline: Date,
    },
    { timestamps: true }
);

module.exports = mongoose.model('Job', jobSchema);
