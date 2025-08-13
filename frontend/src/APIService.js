import axios from 'axios';

const API_BASE_URL = process.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Helper function to transform MongoDB note to frontend todo format
const transformNote = (note, defaultText = '') => ({
  id: note._id || `temp-${Date.now()}-${Math.random()}`,
  text: note.text || defaultText,
  completed: note.completed || false,
  createdAt: note.createdAt || new Date().toISOString(),
});

// Helper function to handle common API errors
const handleApiError = (error) => {
  if (error.response?.status === 429) {
    throw new Error('RATE_LIMITED');
  }
  throw new Error('Failed to process request');
};

export const notesAPI = {
  // Get all todos
  getAllTodos: async () => {
    try {
      const response = await api.get('/notes');
      if (!Array.isArray(response.data)) {
        return [];
      }
      return response.data.map((note) => transformNote(note));
    } catch (error) {
      handleApiError(error);
    }
  },

  // Create a new todo
  createTodo: async (text) => {
    try {
      const response = await api.post('/notes', { text });
      return transformNote(response.data, text);
    } catch (error) {
      handleApiError(error);
    }
  },

  // Update a todo
  updateTodo: async (id, updates) => {
    try {
      const response = await api.put(`/notes/${id}`, updates);
      return transformNote(response.data, updates.text);
    } catch (error) {
      handleApiError(error);
    }
  },

  // Delete a todo
  deleteTodo: async (id) => {
    try {
      await api.delete(`/notes/${id}`);
      return { success: true };
    } catch (error) {
      handleApiError(error);
    }
  },
};
