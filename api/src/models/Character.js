import mongoose from "mongoose";

const characterSchema = new mongoose.Schema({
    characterID: {
        type: Number,
        required: true,
        unique: true,
        min: 1
    },

    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },

    role: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    }
});

const Character = mongoose.model("Character", characterSchema);

export default Character;