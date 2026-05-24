// Contenedor del grid de tarjetas de herramientas
// Maneja la carga de herramientas con filtro por categoría y paginación
import { useState, useEffect } from 'react';
import { getTools } from '../services/toolsService';
import { ToolCard } from './ToolCard';

export function ToolGrid({ selectedCategory }) {
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 9;

  useEffect(() => { setPage(1); }, [selectedCategory]);

  useEffect(() => {
    setLoading(true);
    getTools(selectedCategory, page, limit)
      .then(res => {
        setTools(res.data.tools);
        setTotal(res.data.total);
        setLoading(false);
      })
      .catch(() => {
        setError('Error al cargar las herramientas.');
        setLoading(false);
      });
  }, [selectedCategory, page]);

  if (loading) return (
    <div style={{ textAlign: 'center', padding: '60px 0' }}>
      <p style={{ color: '#025273', fontSize: '18px' }}>Cargando herramientas...</p>
    </div>
  );

  if (error) return (
    <div style={{ textAlign: 'center', padding: '60px 0' }}>
      <p style={{ color: 'red' }}>{error}</p>
    </div>
  );

  const totalPages = Math.ceil(total / limit);

  return (
    <div>
      {/* Grid con estilos inline */}
      <div className="tools-grid">
        {tools.map(tool => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>

      {/* Paginación */}
      {totalPages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', marginTop: '40px' }}>
          <button
            onClick={() => setPage(p => p - 1)}
            disabled={page === 1}
            style={{
              backgroundColor: '#112e40', color: '#c8d3d9',
              border: '1px solid #41d1f3', padding: '8px 20px',
              borderRadius: '8px', fontWeight: '600',
              opacity: page === 1 ? 0.4 : 1, cursor: page === 1 ? 'not-allowed' : 'pointer'
            }}>
            ← Anterior
          </button>
          <span style={{ color: '#112e40', fontWeight: '500' }}>
            Página {page} de {totalPages}
          </span>
          <button
            onClick={() => setPage(p => p + 1)}
            disabled={page >= totalPages}
            style={{
              backgroundColor: '#112e40', color: '#c8d3d9',
              border: '1px solid #41d1f3', padding: '8px 20px',
              borderRadius: '8px', fontWeight: '600',
              opacity: page >= totalPages ? 0.4 : 1, cursor: page >= totalPages ? 'not-allowed' : 'pointer'
            }}>
            Siguiente →
          </button>
        </div>
      )}
    </div>
  );
}