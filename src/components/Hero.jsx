// Sección principal de la página de inicio
export function Hero() {
  return (
    <section style={{ backgroundColor: '#025273' }}
      className="py-24 px-6 flex items-center justify-center">
      <div className="max-w-3xl text-center">
        <h1 style={{ color: '#41d1f3' }}
          className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Descubre las mejores<br />herramientas de IA
        </h1>
        <p style={{ color: '#c8d3d9' }} className="text-xl md:text-2xl leading-relaxed">
          Encuentra y compara herramientas de inteligencia artificial
          organizadas por categoría para tu industria.
        </p>
      </div>
    </section>
  );
}