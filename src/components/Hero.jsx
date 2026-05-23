// Sección principal de la página de inicio
export function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-[#025273]">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold">Bienvenido a AI Hub</h1>
        <p className="mt-4">Herramientas IA destacadas en tu industria.</p>
        <button className="mt-6 px-6 py-2 bg-[#41d1f3] hover:bg-[#3ce0f2] text-black">
          Empezar
        </button>
      </div>
    </section>
  );
}