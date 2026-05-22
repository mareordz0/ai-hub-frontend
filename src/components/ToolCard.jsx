export function ToolCard({ tool }) {
  return (
    <div className="bg-[#c8d3d9] p-4 rounded">
      <img src={tool.imageUrl} alt={tool.name} className="w-full h-32 object-cover"/>
      <h2 className="mt-2 font-semibold">{tool.name}</h2>
      <p className="text-sm">{tool.description}</p>
      <a href={tool.url} className="text-blue-600 mt-1 block">Visitar</a>
    </div>
  );
}