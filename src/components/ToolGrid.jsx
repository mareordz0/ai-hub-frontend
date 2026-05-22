export function ToolGrid({ tools }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {tools.map(tool => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  );
}