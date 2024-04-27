import mongoose from "mongoose";
import CategoryModel from "../Models/Category.model";
import BrandModel from "../Models/Brand.model";

const Schema = mongoose.Schema;

const Productschema = new Schema({
    title: {
        type: String,
        required: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: CategoryModel
    },
    brand: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: BrandModel
    },
    short_description: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    thumbnail: {
        type: String,
        default: null
    },
    images: {
        type: Array,
        default: null
    },
    status: {
        type: Number,
        default: 1
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})
export default mongoose.model('products', Productschema);