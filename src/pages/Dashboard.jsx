// Página de dashboard — solo accesible para usuarios autenticados
export function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-4 text-gray-500">Bienvenido al panel de administración.</p>
    </div>
  );
}