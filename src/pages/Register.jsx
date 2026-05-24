// Página de registro de usuario
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../services/authService';

export function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirm) {
      setError('Las contraseñas no coinciden.');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      await register({ name, email, password });
      navigate('/login');
    } catch {
      setError('No se pudo registrar. Intenta con otro correo.');
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: '100%', padding: '12px 16px',
    backgroundColor: '#112e40',
    border: '1px solid #1a3a50',
    borderRadius: '10px', color: '#c8d3d9',
    fontSize: '14px', outline: 'none',
    boxSizing: 'border-box'
  };

  const labelStyle = {
    color: '#c8d3d9', fontSize: '13px',
    fontWeight: '600', display: 'block', marginBottom: '6px'
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#112e40',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Card */}
      <div style={{
        width: '100%',
        maxWidth: '420px',
        backgroundColor: '#0a1f2e',
        borderRadius: '20px',
        padding: '48px 40px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
        border: '1px solid #1a3a50'
      }}>

        {/* Logo / Título */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div style={{
            width: '56px', height: '56px',
            backgroundColor: '#41d1f3',
            borderRadius: '16px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 16px',
            fontSize: '24px'
          }}>
            🤖
          </div>
          <h1 style={{
            color: '#41d1f3', fontSize: '26px',
            fontWeight: 'bold', margin: '0 0 6px'
          }}>
            Herramientas de IA
          </h1>
          <p style={{ color: '#7a9aaa', fontSize: '14px', margin: 0 }}>
            Crea tu cuenta para comenzar
          </p>
        </div>

        {/* Error */}
        {error && (
          <div style={{
            backgroundColor: 'rgba(255,68,68,0.1)',
            border: '1px solid rgba(255,68,68,0.3)',
            borderRadius: '10px', padding: '12px 16px',
            marginBottom: '20px', textAlign: 'center'
          }}>
            <p style={{ color: '#ff6b6b', fontSize: '13px', margin: 0 }}>{error}</p>
          </div>
        )}

        {/* Formulario */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

          <div>
            <label style={labelStyle}>Nombre completo</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Tu nombre"
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = '#41d1f3'}
              onBlur={e => e.target.style.borderColor = '#1a3a50'}
            />
          </div>

          <div>
            <label style={labelStyle}>Correo electrónico</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="correo@ejemplo.com"
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = '#41d1f3'}
              onBlur={e => e.target.style.borderColor = '#1a3a50'}
            />
          </div>

          <div>
            <label style={labelStyle}>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Mínimo 8 caracteres"
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = '#41d1f3'}
              onBlur={e => e.target.style.borderColor = '#1a3a50'}
            />
          </div>

          <div>
            <label style={labelStyle}>Confirmar contraseña</label>
            <input
              type="password"
              value={confirm}
              onChange={e => setConfirm(e.target.value)}
              placeholder="••••••••"
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = '#41d1f3'}
              onBlur={e => e.target.style.borderColor = '#1a3a50'}
            />
          </div>

          {/* Botón */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{
              width: '100%', padding: '13px',
              backgroundColor: loading ? '#2a8a9f' : '#41d1f3',
              color: '#112e40', border: 'none',
              borderRadius: '10px', fontWeight: '700',
              fontSize: '15px', cursor: loading ? 'not-allowed' : 'pointer',
              marginTop: '8px', transition: 'opacity 0.2s'
            }}>
            {loading ? 'Registrando...' : 'Crear cuenta'}
          </button>
        </div>

        {/* Divisor */}
        <div style={{
          display: 'flex', alignItems: 'center',
          gap: '12px', margin: '24px 0'
        }}>
          <div style={{ flex: 1, height: '1px', backgroundColor: '#1a3a50' }} />
          <span style={{ color: '#7a9aaa', fontSize: '12px' }}>¿Ya tienes cuenta?</span>
          <div style={{ flex: 1, height: '1px', backgroundColor: '#1a3a50' }} />
        </div>

        {/* Link login */}
        <Link to="/login" style={{
          display: 'block', textAlign: 'center',
          padding: '12px', border: '1px solid #41d1f3',
          borderRadius: '10px', color: '#41d1f3',
          textDecoration: 'none', fontWeight: '600',
          fontSize: '14px'
        }}
          onMouseEnter={e => e.target.style.backgroundColor = 'rgba(65,209,243,0.1)'}
          onMouseLeave={e => e.target.style.backgroundColor = 'transparent'}>
          Iniciar sesión
        </Link>
      </div>
    </div>
  );
}