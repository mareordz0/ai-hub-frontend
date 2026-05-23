// Contenedor del grid de tarjetas de herramientas
// Maneja la carga de herramientas con filtro por categoría y paginación
import { useState, useEffect } from 'react';
import { getTools } from "../services/toolsService";
import { ToolCard } from "./ToolCard";

export function ToolGrid({ selectedCategory }) {
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 10;

  useEffect(() => {
    // Reinicia a página 1 cuando cambia la categoría
    setPage(1);
  }, [selectedCategory]);

  useEffect(() => {
    setLoading(true);
    getTools(selectedCategory, page, limit)
      .then(res => {
        setTools(res.data.tools);
        setTotal(res.data.total);
        setLoading(false);
      })
      .catch(err => {
        setError('Error al cargar las herramientas.');
        setLoading(false);
      });
  }, [selectedCategory, page]);

  if (loading) return <p>Cargando herramientas...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tools.map(tool => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>

      {/* Paginación */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => setPage(p => p - 1)}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50">
          Anterior
        </button>
        <span>Página {page} de {Math.ceil(total / limit)}</span>
        <button
          onClick={() => setPage(p => p + 1)}
          disabled={page >= Math.ceil(total / limit)}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50">
          Siguiente
        </button>
      </div>
    </div>
  );
}