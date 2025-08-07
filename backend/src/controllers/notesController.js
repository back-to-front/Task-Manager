import Note from '../models/Note.js';

export async function getAllNotes(_, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching notes' });
  }
}

export async function getNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: 'Note not found' });
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching note' });
  }
}

export async function createNote(req, res) {
  try {
    const { text } = req.body;
    const note = new Note({ text, completed: false });
    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (error) {
    res.status(500).json({ message: 'Error creating note' });
  }
}

export async function updateNote(req, res) {
  try {
    const { text, completed } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      {
        text,
        completed,
      },
      { new: true }
    );
    if (!updatedNote)
      return res.status(404).json({ message: 'Note not found' });
    res.status(200).json(updatedNote);
  } catch (error) {
    res.status(500).json({ message: 'Error updating note' });
  }
}

export async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote)
      return res.status(404).json({ message: 'Note not found' });
    res.status(200).json({ message: 'Note deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting note' });
  }
}
