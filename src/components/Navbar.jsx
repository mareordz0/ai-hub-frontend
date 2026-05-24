// Componente de navegación superior
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../services/authService';

export function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav style={{ backgroundColor: '#112e40' }}
      className="px-6 py-4 flex justify-between items-center shadow-lg">
      <Link to="/home">
        <span style={{ color: '#41d1f3' }} className="text-2xl font-bold tracking-wide">
          Herramientas de IA
        </span>
      </Link>
      <div className="flex items-center gap-6">
        <Link to="/home" style={{ color: '#c8d3d9' }}
          className="text-base hover:text-white transition">
          Inicio
        </Link>
        {token ? (
          <button onClick={handleLogout}
            style={{ backgroundColor: '#41d1f3', color: '#112e40' }}
            className="text-sm px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition">
            Cerrar sesión
          </button>
        ) : (
          <Link to="/login"
            style={{ backgroundColor: '#41d1f3', color: '#112e40' }}
            className="text-sm px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition">
            Iniciar sesión
          </Link>
        )}
      </div>
    </nav>
  );
}