// Sección principal de la página de inicio
export function Hero() {
  return (
    <section style={{
      backgroundColor: '#025273',
      padding: '60px 24px 50px',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <h1 style={{
          color: '#41d1f3',
          fontSize: 'clamp(28px, 5vw, 48px)',
          fontWeight: 'bold',
          lineHeight: '1.2',
          marginBottom: '16px'
        }}>
          Descubre las mejores<br />herramientas de IA
        </h1>
        <p style={{
          color: '#c8d3d9',
          fontSize: 'clamp(14px, 2vw, 18px)',
          lineHeight: '1.6'
        }}>
          Encuentra y compara herramientas de inteligencia artificial
          organizadas por categoría para tu industria.
        </p>
      </div>
    </section>
  );
}