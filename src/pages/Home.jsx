// Página principal de la aplicación
// Muestra Hero, filtros por categoría y el grid de herramientas
import { useState } from 'react';
import { Hero } from '../components/Hero';
import { CategoryButtons } from '../components/CategoryButtons';
import { ToolGrid } from '../components/ToolGrid';
import { Navbar } from '../components/Navbar';

export function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = [
  { id: null, name: 'Todas' },
  { id: 1, name: 'Imágenes' },
  { id: 2, name: 'Código' },
  { id: 3, name: 'Texto' },
  { id: 4, name: 'Voz' },
];

  return (
    <>
      <Navbar />
      <Hero />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <CategoryButtons
            categories={categories.map(c => c.name)}
            selected={selectedCategory?.name}
            onSelect={(name) => {
                const found = categories.find(c => c.name === name);
                setSelectedCategory(found?.id ? found : null);
  }}
        />
        <div className="mt-6">
          <ToolGrid selectedCategory={selectedCategory?.id} />
        </div>
      </div>
    </>
  );
}