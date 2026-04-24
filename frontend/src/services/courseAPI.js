import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://localhost:7001/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Course API endpoints
export const courseAPI = {
  // GET all courses
  getAllCourses: async () => {
    try {
      const response = await apiClient.get('/courses');
      return response.data;
    } catch (error) {
      console.error('Error fetching courses:', error);
      throw error;
    }
  },

  // GET course by ID
  getCourseById: async (id) => {
    try {
      const response = await apiClient.get(`/courses/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching course ${id}:`, error);
      throw error;
    }
  },

  // CREATE new course
  createCourse: async (courseData) => {
    try {
      const response = await apiClient.post('/courses', courseData);
      return response.data;
    } catch (error) {
      console.error('Error creating course:', error);
      throw error;
    }
  },

  // UPDATE course
  updateCourse: async (id, courseData) => {
    try {
      const response = await apiClient.put(`/courses/${id}`, courseData);
      return response.data;
    } catch (error) {
      console.error(`Error updating course ${id}:`, error);
      throw error;
    }
  },

  // DELETE course
  deleteCourse: async (id) => {
    try {
      const response = await apiClient.delete(`/courses/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting course ${id}:`, error);
      throw error;
    }
  },

  // SEARCH courses
  searchCourses: async (searchTerm) => {
    try {
      const response = await apiClient.get(`/courses/search/${searchTerm}`);
      return response.data;
    } catch (error) {
      console.error(`Error searching courses for "${searchTerm}":`, error);
      throw error;
    }
  },
};

export default apiClient;
