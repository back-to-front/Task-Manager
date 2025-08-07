import axios from 'axios';
import toast from 'react-hot-toast';

const API_BASE_URL = 'http://localhost:5001/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const notesAPI = {
  // Get all todos
  getAllTodos: async () => {
    try {
      const response = await api.get('/notes');
      if (!Array.isArray(response.data)) {
        return [];
      }
      return response.data.map((note) => ({
        id: note._id || `temp-${Date.now()}-${Math.random()}`,
        text: note.text || '',
        completed: note.completed || false,
        createdAt: note.createdAt || new Date().toISOString(),
      }));
    } catch (error) {
      if (error.response?.status === 429) {
        throw new Error('RATE_LIMITED');
      }
      throw new Error('Failed to fetch todos');
    }
  },

  // Create a new todo
  createTodo: async (text) => {
    try {
      const response = await api.post('/notes', { text });
      const note = response.data;
      return {
        id: note._id || `temp-${Date.now()}-${Math.random()}`,
        text: note.text || text,
        completed: note.completed || false,
        createdAt: note.createdAt || new Date().toISOString(),
      };
    } catch (error) {
      if (error.response?.status === 429) {
        throw new Error('RATE_LIMITED');
      }
      throw new Error('Failed to create todo');
    }
  },

  // Update a todo
  updateTodo: async (id, updates) => {
    try {
      const response = await api.put(`/notes/${id}`, updates);
      const note = response.data;
      return {
        id: note._id || id,
        text: note.text || updates.text,
        completed:
          note.completed !== undefined ? note.completed : updates.completed,
        createdAt: note.createdAt || new Date().toISOString(),
      };
    } catch (error) {
      if (error.response?.status === 429) {
        throw new Error('RATE_LIMITED');
      }
      throw new Error('Failed to update todo');
    }
  },

  // Delete a todo
  deleteTodo: async (id) => {
    try {
      await api.delete(`/notes/${id}`);
      return { success: true };
    } catch (error) {
      if (error.response?.status === 429) {
        throw new Error('RATE_LIMITED');
      }
      throw new Error('Failed to delete todo');
    }
  },
};
