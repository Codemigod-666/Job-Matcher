const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required'],
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    role: {
        type: String,
        enum: ['Jobseeker', 'Recruiter'],
        default: 'Jobseeker',
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: String
    },
    location: { type: String },
    skills: [String],
    interests: [String],
    experience: {
        type: Number,
        default: 0
    },
    education: {
        degree: String,
        university: String,
        graduationYear: Number,
    },
    resumeUrl: {
        type: String,
    },
    company: {
        name: String,
        website: String,
        industry: String,
    },
    refreshTokens: [
        {
            token: String,
            createdAt: { type: Date, default: Date.now },
        }
    ]
}, {
    timestamps: true,
});

// Hash password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

//method to compare password during login
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);