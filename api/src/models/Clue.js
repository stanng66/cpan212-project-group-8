import mongoose from "mongoose";

const clueSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
        min: 1
    },

    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 150
    },

    forensicAction: {
        type: String,
        required: true,
        enum: [
            "Search For Physical Evidence",
            "Examine Hidden Messages",
            "Analyze Traces and Residue",
            "Review Records and Statements"
        ]
    },

    description: {
        type: String,
        required: true,
        trim: true,
        minlength: 10,
        maxlength: 2000
    },

    footnote: {
        type: String,
        trim: true,
        maxlength: 500
    },

    locationName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },

    targetAICGalleryId: {
        type: Number,
        required: true,
        min: 1
    },

    linkedArtworkId: {
        type: Number,
        required: true,
        min: 1
    },

    linkedSuspectId: {
        type: Number,
        required: true,
        min: 1,
        max: 7
    },

    character: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Character"
    },

    targetAICAPIMetadataField: {
        type: String,
        required: true,
        trim: true,
        maxlength: 300
    }
});

const Clue = mongoose.model("Clue", clueSchema);

export default Clue;