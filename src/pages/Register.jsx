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

  return (
    <div style={{ backgroundColor: '#112e40', minHeight: '100vh' }}
      className="flex items-center justify-center px-4">
      <div style={{ backgroundColor: '#0a1f2e' }}
        className="w-full max-w-md rounded-2xl p-8 shadow-2xl">

        {/* Título */}
        <div className="text-center mb-8">
          <h1 style={{ color: '#41d1f3' }} className="text-3xl font-bold mb-1">
            Herramientas de IA
          </h1>
          <p style={{ color: '#c8d3d9' }} className="text-sm">
            Crea tu cuenta para comenzar
          </p>
        </div>

        {/* Error */}
        {error && (
          <div style={{ backgroundColor: '#1a0a0a', borderColor: '#ff4444' }}
            className="border rounded-lg p-3 mb-4">
            <p className="text-red-400 text-sm text-center">{error}</p>
          </div>
        )}

        {/* Formulario */}
        <div className="flex flex-col gap-4">
          <div>
            <label style={{ color: '#c8d3d9' }} className="text-sm mb-1 block">
              Nombre completo
            </label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Tu nombre"
              style={{ backgroundColor: '#c8d3d9', color: '#112e40' }}
              className="w-full px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-[#41d1f3]"
            />
          </div>
          <div>
            <label style={{ color: '#c8d3d9' }} className="text-sm mb-1 block">
              Correo electrónico
            </label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="correo@ejemplo.com"
              style={{ backgroundColor: '#c8d3d9', color: '#112e40' }}
              className="w-full px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-[#41d1f3]"
            />
          </div>
          <div>
            <label style={{ color: '#c8d3d9' }} className="text-sm mb-1 block">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Mínimo 8 caracteres"
              style={{ backgroundColor: '#c8d3d9', color: '#112e40' }}
              className="w-full px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-[#41d1f3]"
            />
          </div>
          <div>
            <label style={{ color: '#c8d3d9' }} className="text-sm mb-1 block">
              Confirmar contraseña
            </label>
            <input
              type="password"
              value={confirm}
              onChange={e => setConfirm(e.target.value)}
              placeholder="••••••••"
              style={{ backgroundColor: '#c8d3d9', color: '#112e40' }}
              className="w-full px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-[#41d1f3]"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{ backgroundColor: '#41d1f3', color: '#112e40' }}
            className="w-full py-2 rounded-lg font-bold mt-2 hover:opacity-90 disabled:opacity-50 transition">
            {loading ? 'Registrando...' : 'Crear cuenta'}
          </button>
        </div>

        {/* Link a login */}
        <p style={{ color: '#c8d3d9' }} className="text-sm text-center mt-6">
          ¿Ya tienes cuenta?{' '}
          <Link to="/Login" style={{ color: '#41d1f3' }}
            className="font-semibold hover:underline">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}