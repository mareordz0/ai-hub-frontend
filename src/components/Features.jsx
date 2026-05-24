// Componente de características para la página de inicio
export function Features() {
  return (
    <section className="flex flex-col md:flex-row min-h-[300px]">
      <div style={{ backgroundColor: '#025273' }}
        className="flex-1 flex items-center justify-center px-10 py-14">
        <div className="max-w-sm">
          <h2 style={{ color: '#41d1f3' }} className="text-2xl font-bold mb-4">
            Todo en un solo lugar
          </h2>
          <p style={{ color: '#c8d3d9' }} className="text-sm leading-relaxed mb-6">
            Accede a las herramientas de inteligencia artificial más destacadas
            del mercado, organizadas y filtradas para que encuentres exactamente
            lo que necesitas.
          </p>
          <button
            style={{ backgroundColor: '#41d1f3', color: '#112e40' }}
            className="px-6 py-2 rounded-lg font-bold hover:opacity-90 transition">
            Ver herramientas
          </button>
        </div>
      </div>

      <div style={{ backgroundColor: '#41d1f3' }}
        className="flex-1 flex items-center justify-center px-10 py-14">
        <div className="max-w-sm">
          <h2 style={{ color: '#112e40' }} className="text-2xl font-bold mb-4">
            ¿Por qué usar AI Hub?
          </h2>
          <ul className="flex flex-col gap-3">
            {[
              'Herramientas verificadas y actualizadas',
              'Filtrado por categoría e industria',
              'Comparación entre herramientas',
              'Acceso rápido y sin complicaciones'
            ].map(item => (
              <li key={item} style={{ color: '#112e40' }}
                className="flex items-start gap-2 text-sm font-medium">
                <span className="mt-0.5">✓</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}