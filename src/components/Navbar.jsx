// Componente de navegación superior
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../services/authService';

export function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav style={{
      backgroundColor: '#112e40',
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 1000,
      boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
    }}>
      <div style={{
        maxWidth: '1280px', margin: '0 auto',
        padding: '12px 24px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center'
      }}>
        <div style={{ flex: 1 }} />
        <Link to="/home" style={{ textDecoration: 'none', flex: 1, textAlign: 'center' }}>
          <span className="navbar-logo" style={{
            color: '#41d1f3', fontSize: '18px', fontWeight: 'bold'
          }}>
            Herramientas de IA
          </span>
        </Link>
        <div className="navbar-links" style={{
          flex: 1, display: 'flex',
          justifyContent: 'flex-end', alignItems: 'center', gap: '16px'
        }}>
          <Link to="/home" style={{
            color: '#c8d3d9', textDecoration: 'none', fontSize: '14px'
          }}>
            Inicio
          </Link>

          {/* Solo visible para admin */}
          {role === 'admin' && (
            <Link to="/dashboard" style={{
              color: '#41d1f3', textDecoration: 'none',
              fontSize: '14px', fontWeight: '600'
            }}>
              Admin
            </Link>
          )}

          {token ? (
            <button onClick={handleLogout} className="navbar-btn" style={{
              backgroundColor: '#41d1f3', color: '#112e40',
              border: 'none', padding: '7px 16px',
              borderRadius: '8px', fontWeight: '600',
              fontSize: '13px', cursor: 'pointer'
            }}>
              Cerrar sesión
            </button>
          ) : (
            <Link to="/login" className="navbar-btn" style={{
              backgroundColor: '#41d1f3', color: '#112e40',
              padding: '7px 16px', borderRadius: '8px',
              fontWeight: '600', fontSize: '13px',
              textDecoration: 'none'
            }}>
              Iniciar sesión
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}