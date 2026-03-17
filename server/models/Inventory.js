import mongoose from 'mongoose';

const inventorySchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
        unique: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 0,
        default: 0
    },
    batchNumber: {
        type: String
    },
    expiryDate: {
        type: Date
    },
    alertLevel: {
        type: Number,
        default: 10 // Alert when stock is below this
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Inventory', inventorySchema);
