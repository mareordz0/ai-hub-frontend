// Footer simple con la paleta del proyecto
export function Footer() {
  return (
    <footer style={{ backgroundColor: '#112e40' }}
      className="py-8 px-6 text-center">
      <p style={{ color: '#41d1f3' }} className="font-bold text-lg mb-1">
        Herramientas de IA
      </p>
      <p style={{ color: '#c8d3d9' }} className="text-xs">
        © 2026 AI Hub. Todos los derechos reservados.
      </p>
      <div className="flex justify-center gap-2 mt-4">
        {[1, 2, 3].map(i => (
          <div key={i}
            style={{ backgroundColor: '#41d1f3' }}
            className="w-2 h-2 rounded-full" />
        ))}
      </div>
    </footer>
  );
}