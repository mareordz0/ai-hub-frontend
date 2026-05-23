// Botones para filtrar herramientas IA por categoría
export function CategoryButtons({ categories, selected, onSelect }) {
  return (
    <div className="flex space-x-2">
      {categories.map(cat => (
        <button 
          key={cat} 
          onClick={() => onSelect(cat)} 
          className={cat===selected ? "btn-active" : "btn"}>
          {cat}
        </button>
      ))}
    </div>
  );
}