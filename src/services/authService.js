// Servicio para consumir los endpoints de autenticación
import api from './axios';

export const login = async (data) => {
  const res = await api.post('/auth/login', data);
  localStorage.setItem('token', res.data.token);
  localStorage.setItem('role', res.data.role);
  return res;
};

export const register = (data) => api.post('/auth/register', data);

// Cerrar sesión — limpia el localStorage
export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('role');
};