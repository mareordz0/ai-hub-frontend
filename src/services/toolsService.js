// Servicio para consumir los endpoints de herramientas
import api from './axios';

// Obtener todas las herramientas con filtro y paginación opcional
export const getTools = (category = null, page = 1, limit = 10) => {
  let url = `/tools?page=${page}&limit=${limit}`;
  if (category) url += `&category=${category}`;
  return api.get(url);
};

// Obtener detalle de una herramienta
export const getToolById = (id) => api.get(`/tools/${id}`);

// Crear herramienta (solo admin)
export const createTool = (data) => api.post('/tools', data);

// Actualizar herramienta (solo admin)
export const updateTool = (id, data) => api.put(`/tools/${id}`, data);

// Eliminar herramienta (solo admin)
export const deleteTool = (id) => api.delete(`/tools/${id}`);