const { ObjectId } = require('mongodb');
const {Schema, model } = require('mongoose');

const postSchema = new Schema(
    {
        title: {
            type: String,
            require: true,
            unique: true,
            trim: true
        },
        content: {
            type: String,
            reuire: true,
            unique: false,
        }
    }
)