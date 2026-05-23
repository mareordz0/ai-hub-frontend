// Página principal de la aplicación
// Muestra Hero, filtros por categoría y el grid de herramientas
import { useState } from 'react';
import { Hero } from '../components/Hero';
import { CategoryButtons } from '../components/CategoryButtons';
import { ToolGrid } from '../components/ToolGrid';
import { Navbar } from '../components/Navbar';

export function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = ['Todas', 'Imágenes', 'Código', 'Texto', 'Voz'];

  return (
    <>
      <Navbar />
      <Hero />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <CategoryButtons
          categories={categories}
          selected={selectedCategory}
          onSelect={(cat) => setSelectedCategory(cat === 'Todas' ? null : cat)}
        />
        <div className="mt-6">
          <ToolGrid selectedCategory={selectedCategory} />
        </div>
      </div>
    </>
  );
}