// Página principal de la aplicación
// Combina los componentes de la página de inicio
import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { CategoryButtons } from '../components/CategoryButtons';
import { ToolGrid } from '../components/ToolGrid';
import { Features } from '../components/Features';
import { Comparison } from '../components/Comparison';
import { Footer } from '../components/Footer';

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
    <div style={{ backgroundColor: '#c8d3d9', minHeight: '100vh' }}>
      <Navbar />
      <Hero />

      {/* Grid de herramientas */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <CategoryButtons
          categories={categories.map(c => c.name)}
          selected={selectedCategory?.name}
          onSelect={(name) => {
            const found = categories.find(c => c.name === name);
            setSelectedCategory(found?.id ? found : null);
          }}
        />
        <ToolGrid selectedCategory={selectedCategory?.id} />
      </section>

      <Features />
      <Comparison />
      <Footer />
    </div>
  );
}