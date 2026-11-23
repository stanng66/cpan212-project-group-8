import mongoose from "mongoose";

// title location content all required
const notebookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        location: {
            type: String,
            required: true,
            trim: true
        },
        content: {
            type: String,
            required: true,
            trim: true
        }
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
            transform(_document, returnedObject) {
                returnedObject.id = returnedObject._id.toString();
                delete returnedObject._id;
                delete returnedObject.__v;
                return returnedObject;
            }
        }
    }
);

notebookSchema.index({ location: 1, createdAt: -1 });
notebookSchema.index({ title: 1 });

const Notebook = mongoose.model("Notebook", notebookSchema);

export default Notebook;
