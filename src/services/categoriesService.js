// Servicio para consumir los endpoints de categorías
import api from './axios';

export const getCategories = () => api.get('/categories');
export const getCategoryTools = (id) => api.get(`/categories/${id}/tools`);
export const createCategory = (data) => api.post('/categories', data);
export const updateCategory = (id, data) => api.put(`/categories/${id}`, data);
export const deleteCategory = (id) => api.delete(`/categories/${id}`);