import mongoose from 'mongoose';

const bannerSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String
    },
    link: {
        type: String,
        default: '/'
    },
    position: {
        type: Number,
        default: 0 // For sorting order
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Banner', bannerSchema);
