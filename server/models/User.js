const { Schema, model } = require('mongoose');
// install bcrypt later for security
// const bcrypt = require('bcrypt')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, "Valid email required."],
    },
    password: {
        type: String,
        reuired: true,
        minlength: 5,
    },
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        },
    ],
})