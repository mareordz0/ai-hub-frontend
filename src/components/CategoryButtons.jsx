// Botones para filtrar herramientas IA por categoría
export function CategoryButtons({ categories, selected, onSelect }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          style={{
            backgroundColor: cat === selected ? '#41d1f3' : '#112e40',
            color: cat === selected ? '#112e40' : '#c8d3d9',
            border: '2px solid #41d1f3'
          }}
          className="px-6 py-2 rounded-full text-base font-semibold hover:opacity-90 transition">
          {cat}
        </button>
      ))}
    </div>
  );
}