// Gestión de herramientas desde el panel admin
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTools, createTool, updateTool, deleteTool } from '../services/toolsService';
import { getCategories } from '../services/categoriesService';

const emptyForm = { name: '', description: '', url: '', imageUrl: '', categoryId: '' };

export function DashboardTools() {
  const [tools, setTools] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [showForm, setShowForm] = useState(false); // ← aquí adentro

  const fetchData = async () => {
    setLoading(true);
    try {
      const [toolsRes, catsRes] = await Promise.all([getTools(), getCategories()]);
      setTools(toolsRes.data.tools);
      setCategories(catsRes.data);
    } catch {
      setError('Error al cargar datos.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSave = async () => {
    if (!form.name.trim() || !form.url.trim() || !form.categoryId) return;
    setSaving(true);
    try {
      const payload = { ...form, categoryId: parseInt(form.categoryId) };
      if (editingId) {
        await updateTool(editingId, payload);
      } else {
        await createTool(payload);
      }
      setForm(emptyForm);
      setEditingId(null);
      setShowForm(false);
      fetchData();
    } catch {
      setError('Error al guardar herramienta.');
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (tool) => {
    setEditingId(tool.id);
    setShowForm(false);
    setForm({
      name: tool.name,
      description: tool.description,
      url: tool.url,
      imageUrl: tool.imageUrl,
      categoryId: tool.categoryId
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (!confirm('¿Eliminar esta herramienta?')) return;
    try {
      await deleteTool(id);
      fetchData();
    } catch {
      setError('Error al eliminar herramienta.');
    }
  };

  const inputStyle = { backgroundColor: '#c8d3d9', color: '#112e40' };
  const inputClass = "w-full px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-[#41d1f3]";

  return (
    <div style={{ backgroundColor: '#c8d3d9', minHeight: '100vh' }}>

      {/* Header */}
      <div style={{ backgroundColor: '#112e40' }} className="px-6 py-4 flex justify-between items-center">
        <h1 style={{ color: '#41d1f3' }} className="text-xl font-bold">Gestión de Herramientas</h1>
        <Link to="/dashboard" style={{ color: '#c8d3d9' }} className="text-sm hover:text-white transition">
          ← Volver al panel
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10 flex flex-col gap-8">

        {/* Botón para mostrar/ocultar formulario */}
        <div className="flex justify-between items-center">
          <p style={{ color: '#112e40' }} className="text-sm font-medium">
            {tools.length} herramientas registradas
          </p>
          <button
            onClick={() => { setShowForm(!showForm); setEditingId(null); setForm(emptyForm); }}
            style={{ backgroundColor: '#41d1f3', color: '#112e40' }}
            className="px-5 py-2 rounded-lg font-bold hover:opacity-90 transition">
            {showForm ? 'Cancelar' : '+ Nueva herramienta'}
          </button>
        </div>

        {/* Formulario colapsable */}
        {(showForm || editingId) && (
          <div style={{ backgroundColor: '#112e40' }} className="rounded-xl p-6 shadow-md">
            <h2 style={{ color: '#41d1f3' }} className="font-bold text-lg mb-4">
              {editingId ? 'Editar herramienta' : 'Nueva herramienta'}
            </h2>
            {error && <p className="text-red-400 text-sm mb-3">{error}</p>}
            <div className="flex flex-col gap-3">
              <input name="name" placeholder="Nombre *" value={form.name}
                onChange={handleChange} style={inputStyle} className={inputClass} />
              <input name="description" placeholder="Descripción" value={form.description}
                onChange={handleChange} style={inputStyle} className={inputClass} />
              <input name="url" placeholder="URL de la herramienta *" value={form.url}
                onChange={handleChange} style={inputStyle} className={inputClass} />
              <input name="imageUrl" placeholder="URL de la imagen (opcional)" value={form.imageUrl}
                onChange={handleChange} style={inputStyle} className={inputClass} />
              <select name="categoryId" value={form.categoryId} onChange={handleChange}
                style={inputStyle} className={inputClass}>
                <option value="">Selecciona una categoría *</option>
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
              <div className="flex gap-3 mt-1">
                <button onClick={handleSave} disabled={saving}
                  style={{ backgroundColor: '#41d1f3', color: '#112e40' }}
                  className="px-6 py-2 rounded-lg font-bold hover:opacity-90 disabled:opacity-50 transition">
                  {saving ? 'Guardando...' : editingId ? 'Actualizar' : 'Agregar'}
                </button>
                {editingId && (
                  <button onClick={() => { setEditingId(null); setForm(emptyForm); }}
                    style={{ backgroundColor: '#025273', color: '#c8d3d9' }}
                    className="px-6 py-2 rounded-lg font-bold hover:opacity-90 transition">
                    Cancelar
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Lista de herramientas */}
        <div style={{ backgroundColor: '#112e40' }} className="rounded-xl shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-[#025273]">
            <h2 style={{ color: '#41d1f3' }} className="font-bold text-lg">Herramientas existentes</h2>
          </div>
          {loading ? (
            <p style={{ color: '#c8d3d9' }} className="p-6 text-sm">Cargando...</p>
          ) : tools.length === 0 ? (
            <p style={{ color: '#c8d3d9' }} className="p-6 text-sm">No hay herramientas aún.</p>
          ) : (
            <ul>
              {tools.map((tool, i) => (
                <li key={tool.id}
                  style={{ borderColor: '#025273' }}
                  className={`flex items-center justify-between px-6 py-4 ${i !== tools.length - 1 ? 'border-b' : ''}`}>
                  <div>
                    <p style={{ color: '#c8d3d9' }} className="font-semibold">{tool.name}</p>
                    <p style={{ color: '#7a9aaa' }} className="text-xs">{tool.category?.name}</p>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => handleEdit(tool)}
                      style={{ backgroundColor: '#025273', color: '#41d1f3' }}
                      className="text-xs px-3 py-1.5 rounded-lg hover:opacity-90 transition">
                      Editar
                    </button>
                    <button onClick={() => handleDelete(tool.id)}
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