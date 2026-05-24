// Panel de administración principal
// Solo accesible para usuarios con rol admin
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../services/authService';

export function Dashboard() {
  const navigate = useNavigate();
  const role = localStorage.getItem('role');

  useEffect(() => {
    if (role !== 'admin') {
      navigate('/home');
    }
  }, [role, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (role !== 'admin') return null;

  return (
    <div style={{ backgroundColor: '#c8d3d9', minHeight: '100vh' }}>
      <div style={{ backgroundColor: '#112e40' }} className="px-6 py-4 flex justify-between items-center">
        <h1 style={{ color: '#41d1f3' }} className="text-xl font-bold">
          Panel de Administración
        </h1>
        <div className="flex items-center gap-4">
          <Link to="/home" style={{ color: '#c8d3d9' }} className="text-sm hover:text-white transition">
            Ver sitio
          </Link>
          <button onClick={handleLogout}
            style={{ backgroundColor: '#41d1f3', color: '#112e40' }}
            className="text-sm px-4 py-1.5 rounded-lg font-semibold hover:opacity-90 transition">
            Cerrar sesión
          </button>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <p style={{ color: '#112e40' }} className="text-lg font-semibold mb-8">
          ¿Qué deseas administrar?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/dashboard/categories">
            <div style={{ backgroundColor: '#112e40' }}
              className="rounded-xl p-8 shadow-md hover:border-[#41d1f3] border border-transparent transition cursor-pointer">
              <h2 style={{ color: '#41d1f3' }} className="text-xl font-bold mb-2">Categorías</h2>
              <p style={{ color: '#c8d3d9' }} className="text-sm">
                Crear, editar y eliminar categorías de herramientas IA.
              </p>
            </div>
          </Link>
          <Link to="/dashboard/tools">
            <div style={{ backgroundColor: '#025273' }}
              className="rounded-xl p-8 shadow-md hover:border-[#41d1f3] border border-transparent transition cursor-pointer">
              <h2 style={{ color: '#41d1f3' }} className="text-xl font-bold mb-2">Herramientas</h2>
              <p style={{ color: '#c8d3d9' }} className="text-sm">
                Agregar, editar y eliminar herramientas de inteligencia artificial.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}