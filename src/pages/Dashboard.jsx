// Panel de administración principal
// Solo accesible para usuarios con rol admin
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../services/authService';

export function Dashboard() {
  const navigate = useNavigate();
  const role = localStorage.getItem('role');

  useEffect(() => {
    if (role !== 'admin') navigate('/home');
  }, [role, navigate]);

  if (role !== 'admin') return null;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div style={{ backgroundColor: '#112e40', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>

      {/* Header */}
      <div style={{
        backgroundColor: '#0a1f2e',
        padding: '20px 32px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        borderBottom: '1px solid #1a3a50'
      }}>
        <h1 style={{ color: '#41d1f3', fontSize: '20px', fontWeight: 'bold', margin: 0 }}>
          🤖 Panel de Administración
        </h1>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Link to="/home" style={{
            color: '#c8d3d9', textDecoration: 'none', fontSize: '14px'
          }}>
            ← Ver sitio
          </Link>
          <button onClick={handleLogout} style={{
            backgroundColor: '#41d1f3', color: '#112e40',
            border: 'none', padding: '8px 16px',
            borderRadius: '8px', fontWeight: '600',
            fontSize: '13px', cursor: 'pointer'
          }}>
            Cerrar sesión
          </button>
        </div>
      </div>

      {/* Contenido */}
      <div style={{
        maxWidth: '800px', margin: '60px auto',
        padding: '0 24px'
      }}>
        <p style={{ color: '#7a9aaa', fontSize: '14px', marginBottom: '32px' }}>
          Selecciona qué deseas administrar
        </p>

        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>

          {/* Categorías */}
          <Link to="/dashboard/categories" style={{ textDecoration: 'none', flex: '1 1 300px' }}>
            <div style={{
              backgroundColor: '#0a1f2e',
              border: '1px solid #1a3a50',
              borderRadius: '16px', padding: '32px',
              cursor: 'pointer', transition: 'border-color 0.2s'
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#41d1f3'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#1a3a50'}>
              <div style={{
                width: '48px', height: '48px',
                backgroundColor: '#112e40',
                borderRadius: '12px',
                display: 'flex', alignItems: 'center',
                justifyContent: 'center',
                fontSize: '22px', marginBottom: '16px'
              }}>
                🗂️
              </div>
              <h2 style={{ color: '#41d1f3', fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>
                Categorías
              </h2>
              <p style={{ color: '#7a9aaa', fontSize: '13px', lineHeight: '1.5' }}>
                Crear, editar y eliminar categorías de herramientas IA.
              </p>
            </div>
          </Link>

          {/* Herramientas */}
          <Link to="/dashboard/tools" style={{ textDecoration: 'none', flex: '1 1 300px' }}>
            <div style={{
              backgroundColor: '#0a1f2e',
              border: '1px solid #1a3a50',
              borderRadius: '16px', padding: '32px',
              cursor: 'pointer', transition: 'border-color 0.2s'
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#41d1f3'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#1a3a50'}>
              <div style={{
                width: '48px', height: '48px',
                backgroundColor: '#112e40',
                borderRadius: '12px',
                display: 'flex', alignItems: 'center',
                justifyContent: 'center',
                fontSize: '22px', marginBottom: '16px'
              }}>
                🛠️
              </div>
              <h2 style={{ color: '#41d1f3', fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>
                Herramientas
              </h2>
              <p style={{ color: '#7a9aaa', fontSize: '13px', lineHeight: '1.5' }}>
                Agregar, editar y eliminar herramientas de inteligencia artificial.
              </p>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}