import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true } // create createdAt and updatedAt fields
);

const Note = mongoose.model('Note', noteSchema);

export default Note;
