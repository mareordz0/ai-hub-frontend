// Tarjeta individual de una herramienta IA
export function ToolCard({ tool }) {
  return (
    <div style={{ backgroundColor: '#112e40', borderColor: '#025273' }}
      className="rounded-xl overflow-hidden border hover:border-[#41d1f3] transition shadow-md">
      <img
        src={tool.imageUrl || 'https://placehold.co/400x200/025273/41d1f3?text=AI+Tool'}
        alt={tool.name}
        className="w-full h-36 object-cover"
      />
      <div className="p-4">
        <h2 style={{ color: '#41d1f3' }} className="font-bold text-base mb-1">
          {tool.name}
        </h2>
        <p style={{ color: '#c8d3d9' }} className="text-sm mb-3 line-clamp-2">
          {tool.description}
        </p>
        <a href={tool.url} target="_blank" rel="noreferrer"
          style={{ backgroundColor: '#025273', color: '#41d1f3' }}
          className="text-xs px-3 py-1.5 rounded-lg font-semibold hover:opacity-90 transition inline-block">
          Visitar →
        </a>
      </div>
    </div>
  );
}