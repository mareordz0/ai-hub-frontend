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

      {/* Espacio para el navbar fijo */}
      <div style={{ paddingTop: '58px' }}>
        <Hero />

        {/* Sección de herramientas */}
        <section style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '60px 24px'
        }}>
          <h2 style={{
            color: '#112e40',
            fontSize: '28px',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '32px'
          }}>
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
    </div>
  );
}