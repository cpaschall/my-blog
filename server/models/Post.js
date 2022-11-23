const { ObjectId } = require('mongodb');
const {Schema, model } = require('mongoose');

const postSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        postAuthor: {
            type: String,
            required: true,
            trim: true,
        },
        content: {
            type: String,
            reuired: true,
            unique: false,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        comments: [
            {
                commentText: {
                    type: String,
                    required: true,
                    trim: true,
                    maxlength: 250,
                },
                commentAuthor: {
                    type: String,
                    required: true,
                },
                createdAt: {
                    type: Date,
                    default: Date.now
                },
            },
        ],
    },
);

const Post = model('Post', postSchema);

module.exports = Post;