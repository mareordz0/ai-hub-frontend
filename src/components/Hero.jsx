// Sección principal de la página de inicio
export function Hero() {
  return (
    <section style={{ backgroundColor: '#025273' }}
      className="py-20 px-6 flex items-center justify-center">
      <div className="max-w-2xl text-center">
        <h1 style={{ color: '#41d1f3' }}
          className="text-4xl font-bold mb-4 leading-tight">
          Descubre las mejores<br />herramientas de IA
        </h1>
        <p style={{ color: '#c8d3d9' }} className="text-lg mb-8">
          Encuentra y compara herramientas de inteligencia artificial
          organizadas por categoría para tu industria.
        </p>
        <button
          style={{ backgroundColor: '#41d1f3', color: '#112e40' }}
          className="px-8 py-3 rounded-lg font-bold text-lg hover:opacity-90 transition">
          Empezar
        </button>
      </div>
    </section>
  );
}