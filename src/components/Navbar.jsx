// Componente de navegación superior
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="px-4 py-2 flex justify-between items-center bg-[#112e40] text-white">
      <div className="font-bold">AI Hub</div>
      <div className="space-x-4">
        <Link to="/">Inicio</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}