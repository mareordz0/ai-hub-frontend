// Botones para filtrar herramientas IA por categoría
export function CategoryButtons({ categories, selected, onSelect }) {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '12px',
      marginBottom: '40px'
    }}>
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          style={{
            backgroundColor: cat === selected ? '#41d1f3' : '#112e40',
            color: cat === selected ? '#112e40' : '#c8d3d9',
            border: '2px solid #41d1f3',
            padding: '8px 20px',
            borderRadius: '999px',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'opacity 0.2s'
          }}>
          {cat}
        </button>
      ))}
    </div>
  );
}