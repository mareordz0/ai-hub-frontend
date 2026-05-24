// Componente de comparación de planes
const plans = [
  {
    name: 'Básico',
    color: '#112e40',
    textColor: '#c8d3d9',
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
    color: '#41d1f3',
    textColor: '#112e40',
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
    name: 'Admin',
    color: '#025273',
    textColor: '#c8d3d9',
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
    <section style={{ backgroundColor: '#c8d3d9' }} className="py-16 px-6">
      <h2 style={{ color: '#112e40' }}
        className="text-2xl font-bold text-center mb-10">
        Planes y accesos
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map(plan => (
          <div key={plan.name}
            style={{ backgroundColor: plan.color }}
            className={`rounded-xl p-6 shadow-md ${plan.featured ? 'scale-105' : ''}`}>
            <h3 style={{ color: plan.textColor }}
              className="text-xl font-bold text-center mb-6">
              {plan.name}
            </h3>
            <ul className="flex flex-col gap-3">
              {plan.features.map(f => (
                <li key={f.label}
                  style={{ color: plan.textColor }}
                  className="flex items-center gap-2 text-sm">
                  <span>{f.available ? '✓' : '✗'}</span>
                  {f.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}