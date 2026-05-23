// Servicio para consumir los endpoints de autenticación
import api from './axios';

export const login = (data) => api.post('/auth/login', data);
export const register = (data) => api.post('/auth/register', data);