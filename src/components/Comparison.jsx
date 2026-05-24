// Componente de comparación de planes
const plans = [
  {
    name: 'Básico',
    backgroundColor: '#112e40',
    titleColor: '#41d1f3',
    textColor: '#c8d3d9',
    checkColor: '#41d1f3',
    xColor: '#ff6b6b',
    featured: false,
    features: [
      { label: 'Ver herramientas', available: true },
      { label: 'Filtrar por categoría', available: true },
      { label: 'Guardar favoritos', available: false },
      { label: 'Comparar herramientas', available: false },
      { label: 'Acceso anticipado', available: false },
    ]
  },
  {
    name: 'Pro',
    backgroundColor: '#41d1f3',
    titleColor: '#112e40',
    textColor: '#112e40',
    checkColor: '#112e40',
    xColor: '#025273',
    featured: true,
    features: [
      { label: 'Ver herramientas', available: true },
      { label: 'Filtrar por categoría', available: true },
      { label: 'Guardar favoritos', available: true },
      { label: 'Comparar herramientas', available: true },
      { label: 'Acceso anticipado', available: false },
    ]
  },
  {
    name: 'Admin Ai',
    backgroundColor: '#025273',
    titleColor: '#41d1f3',
    textColor: '#c8d3d9',
    checkColor: '#41d1f3',
    xColor: '#ff6b6b',
    featured: false,
    features: [
      { label: 'Ver herramientas', available: true },
      { label: 'Filtrar por categoría', available: true },
      { label: 'Guardar favoritos', available: true },
      { label: 'Comparar herramientas', available: true },
      { label: 'Acceso anticipado', available: true },
    ]
  }
];

export function Comparison() {
  return (
    <section style={{ backgroundColor: '#c8d3d9', padding: '64px 24px' }}>
      <h2 style={{
        color: '#112e40', fontSize: '28px', fontWeight: 'bold',
        textAlign: 'center', marginBottom: '48px'
      }}>
        Planes y accesos
      </h2>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        flexWrap: 'wrap',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        {plans.map(plan => (
          <div key={plan.name} style={{
            backgroundColor: plan.backgroundColor,
            borderRadius: '16px',
            padding: '32px 28px',
            width: plan.featured ? '260px' : '230px',
            transform: plan.featured ? 'scale(1.05)' : 'scale(1)',
            boxShadow: plan.featured
              ? '0 8px 30px rgba(65,209,243,0.3)'
              : '0 4px 12px rgba(0,0,0,0.2)',
            transition: 'transform 0.2s'
          }}>
            {/* Nombre del plan */}
            <h3 style={{
              color: plan.titleColor,
              fontSize: '20px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '24px',
              paddingBottom: '16px',
              borderBottom: `1px solid ${plan.featured ? '#112e40' : '#41d1f3'}`
            }}>
              {plan.name}
            </h3>

            {/* Features */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {plan.features.map(f => (
                <div key={f.label} style={{
                  display: 'flex', alignItems: 'center', gap: '10px'
                }}>
                  <span style={{
                    color: f.available ? plan.checkColor : plan.xColor,
                    fontSize: '16px',
                    fontWeight: 'bold',
                    flexShrink: 0,
                    width: '16px'
                  }}>
                    {f.available ? '✓' : '✗'}
                  </span>
                  <span style={{
                    color: plan.textColor,
                    fontSize: '13px',
                    opacity: f.available ? 1 : 0.6
                  }}>
                    {f.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}