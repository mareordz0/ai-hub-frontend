// Botones para filtrar herramientas IA por categoría
export function CategoryButtons({ categories, selected, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          style={{
            backgroundColor: cat === selected ? '#41d1f3' : '#112e40',
            color: cat === selected ? '#112e40' : '#c8d3d9',
            border: '1px solid #41d1f3'
          }}
          className="px-4 py-1.5 rounded-full text-sm font-medium hover:opacity-90 transition">
          {cat}
        </button>
      ))}
    </div>
  );
}