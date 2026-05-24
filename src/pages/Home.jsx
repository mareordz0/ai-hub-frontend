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
    { id: 1, name: 'Chatbots' },
    { id: 2, name: 'Imágenes' },
    { id: 3, name: 'Código' },
    { id: 4, name: 'Texto/Resúmenes' },
    { id: 5, name: 'Conversión' },
    { id: 6, name: 'Voces' },
  ];

  return (
    <div style={{ backgroundColor: '#c8d3d9', minHeight: '100vh' }}>
      <Navbar />
      <Hero />

      {/* Sección de herramientas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 style={{ color: '#112e40' }}
          className="text-3xl font-bold text-center mb-8">
          Explora las herramientas
        </h2>
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