// Componente de características para la página de inicio
export function Features() {
  return (
    <section className="features-section" style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div style={{
        flex: '1 1 50%', backgroundColor: '#025273',
        padding: '60px 40px', display: 'flex',
        alignItems: 'center', justifyContent: 'center'
      }}>
        <div style={{ maxWidth: '400px' }}>
          <h2 style={{ color: '#41d1f3', fontSize: '28px', fontWeight: 'bold', marginBottom: '16px' }}>
            Todo en un solo lugar
          </h2>
          <p style={{ color: '#c8d3d9', fontSize: '15px', lineHeight: '1.7', marginBottom: '28px' }}>
            Accede a las herramientas de inteligencia artificial más destacadas
            del mercado, organizadas y filtradas para que encuentres exactamente
            lo que necesitas.
          </p>
          <a href="#herramientas" style={{
            display: 'inline-block', backgroundColor: '#41d1f3',
            color: '#112e40', padding: '10px 24px', borderRadius: '8px',
            fontWeight: '700', fontSize: '14px', textDecoration: 'none'
          }}>
            Ver herramientas
          </a>
        </div>
      </div>
      <div style={{
        flex: '1 1 50%', backgroundColor: '#41d1f3',
        padding: '60px 40px', display: 'flex',
        alignItems: 'center', justifyContent: 'center'
      }}>
        <div style={{ maxWidth: '400px' }}>
          <h2 style={{ color: '#112e40', fontSize: '28px', fontWeight: 'bold', marginBottom: '20px' }}>
            ¿Por qué usar AI Hub?
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              'Herramientas verificadas y actualizadas',
              'Filtrado por categoría e industria',
              'Comparación entre herramientas',
              'Acceso rápido y sin complicaciones'
            ].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{
                  backgroundColor: '#112e40', color: '#41d1f3',
                  borderRadius: '50%', width: '24px', height: '24px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '12px', fontWeight: 'bold', flexShrink: 0
                }}>✓</span>
                <span style={{ color: '#112e40', fontSize: '15px', fontWeight: '500' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}