// Tarjeta de herramienta con imagen uniforme object-cover
// Tarjeta de herramienta con imagen uniforme object-cover
export function ToolCard({ tool }) {
  return (
    <div style={{
      backgroundColor: '#112e40',
      border: '1px solid #025273',
      borderRadius: '12px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
    }}>
      {/* Imagen con altura fija estricta */}
      <div style={{
        width: '100%',
        height: '180px',
        backgroundColor: '#0a1f2e',
        overflow: 'hidden',
        flexShrink: 0
      }}>
        <img
          src={tool.imageUrl || 'https://placehold.co/400x180/025273/41d1f3?text=AI+Tool'}
          alt={tool.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
        />
      </div>

      {/* Contenido */}
      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h2 style={{ color: '#41d1f3', fontWeight: 'bold', fontSize: '16px', marginBottom: '8px' }}>
          {tool.name}
        </h2>
        <p style={{
          color: '#c8d3d9', fontSize: '13px', lineHeight: '1.5',
          marginBottom: '16px', flex: 1,
          display: '-webkit-box', WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical', overflow: 'hidden'
        }}>
          {tool.description}
        </p>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          borderTop: '1px solid #025273', paddingTop: '12px'
        }}>
          <span style={{ color: '#7a9aaa', fontSize: '11px' }}>
            {tool.category?.name}
          </span>
          <a href={tool.url} target="_blank" rel="noreferrer"
            style={{
              backgroundColor: '#41d1f3', color: '#112e40',
              padding: '6px 14px', borderRadius: '8px',
              fontWeight: '600', fontSize: '13px',
              textDecoration: 'none'
            }}>
            Visitar →
          </a>
        </div>
      </div>
    </div>
  );
}