// Gestión de categorías desde el panel admin
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory
} from '../services/categoriesService';

export function DashboardCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [showForm, setShowForm] = useState(false); // ← agregado aquí adentro

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const res = await getCategories();
      setCategories(res.data);
    } catch {
      setError('Error al cargar categorías.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchCategories(); }, []);

  const handleSave = async () => {
    if (!name.trim()) return;
    setSaving(true);
    try {
      if (editingId) {
        await updateCategory(editingId, { name, description });
      } else {
        await createCategory({ name, description });
      }
      setName('');
      setDescription('');
      setEditingId(null);
      setShowForm(false);
      fetchCategories();
    } catch {
      setError('Error al guardar categoría.');
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (cat) => {
    setEditingId(cat.id);
    setShowForm(false);
    setName(cat.name);
    setDescription(cat.description);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (!confirm('¿Eliminar esta categoría?')) return;
    try {
      await deleteCategory(id);
      fetchCategories();
    } catch {
      setError('Error al eliminar categoría.');
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setShowForm(false);
    setName('');
    setDescription('');
  };

  return (
    <div style={{ backgroundColor: '#c8d3d9', minHeight: '100vh' }}>

      {/* Header */}
      <div style={{ backgroundColor: '#112e40' }} className="px-6 py-4 flex justify-between items-center">
        <h1 style={{ color: '#41d1f3' }} className="text-xl font-bold">Gestión de Categorías</h1>
        <Link to="/dashboard" style={{ color: '#c8d3d9' }} className="text-sm hover:text-white transition">
          ← Volver al panel
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10 flex flex-col gap-8">

        {/* Botón para mostrar/ocultar formulario */}
        <div className="flex justify-between items-center">
          <p style={{ color: '#112e40' }} className="text-sm font-medium">
            {categories.length} categorías registradas
          </p>
          <button
            onClick={() => { setShowForm(!showForm); setEditingId(null); setName(''); setDescription(''); }}
            style={{ backgroundColor: '#41d1f3', color: '#112e40' }}
            className="px-5 py-2 rounded-lg font-bold hover:opacity-90 transition">
            {showForm ? 'Cancelar' : '+ Nueva categoría'}
          </button>
        </div>

        {/* Formulario colapsable */}
        {(showForm || editingId) && (
          <div style={{ backgroundColor: '#112e40' }} className="rounded-xl p-6 shadow-md">
            <h2 style={{ color: '#41d1f3' }} className="font-bold text-lg mb-4">
              {editingId ? 'Editar categoría' : 'Nueva categoría'}
            </h2>
            {error && <p className="text-red-400 text-sm mb-3">{error}</p>}
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Nombre de la categoría"
                value={name}
                onChange={e => setName(e.target.value)}
                style={{ backgroundColor: '#c8d3d9', color: '#112e40' }}
                className="w-full px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-[#41d1f3]"
              />
              <input
                type="text"
                placeholder="Descripción (opcional)"
                value={description}
                onChange={e => setDescription(e.target.value)}
                style={{ backgroundColor: '#c8d3d9', color: '#112e40' }}
                className="w-full px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-[#41d1f3]"
              />
              <div className="flex gap-3 mt-1">
                <button onClick={handleSave} disabled={saving}
                  style={{ backgroundColor: '#41d1f3', color: '#112e40' }}
                  className="px-6 py-2 rounded-lg font-bold hover:opacity-90 disabled:opacity-50 transition">
                  {saving ? 'Guardando...' : editingId ? 'Actualizar' : 'Agregar'}
                </button>
                {editingId && (
                  <button onClick={handleCancel}
                    style={{ backgroundColor: '#025273', color: '#c8d3d9' }}
                    className="px-6 py-2 rounded-lg font-bold hover:opacity-90 transition">
                    Cancelar
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Lista de categorías */}
        <div style={{ backgroundColor: '#112e40' }} className="rounded-xl shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-[#025273]">
            <h2 style={{ color: '#41d1f3' }} className="font-bold text-lg">
              Categorías existentes
            </h2>
          </div>
          {loading && (
            <p style={{ color: '#c8d3d9' }} className="p-6 text-sm">Cargando...</p>
          )}
          {!loading && categories.length === 0 && (
            <p style={{ color: '#c8d3d9' }} className="p-6 text-sm">No hay categorías aún.</p>
          )}
          {!loading && categories.length > 0 && (
            <ul>
              {categories.map((cat, i) => (
                <li key={cat.id}
                  style={{ borderColor: '#025273' }}
                  className={`flex items-center justify-between px-6 py-4 ${i !== categories.length - 1 ? 'border-b' : ''}`}>
                  <div>
                    <p style={{ color: '#c8d3d9' }} className="font-semibold">{cat.name}</p>
                    <p style={{ color: '#7a9aaa' }} className="text-xs">{cat.description}</p>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => handleEdit(cat)}
                      style={{ backgroundColor: '#025273', color: '#41d1f3' }}
                      className="text-xs px-3 py-1.5 rounded-lg hover:opacity-90 transition">
                      Editar
                    </button>
                    <button onClick={() => handleDelete(cat.id)}
                      style={{ backgroundColor: '#1a0a0a', color: '#ff4444' }}
                      className="text-xs px-3 py-1.5 rounded-lg hover:opacity-90 transition">
                      Eliminar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}