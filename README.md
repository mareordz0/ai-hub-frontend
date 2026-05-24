# AI Hub — Frontend

Interfaz web del proyecto AI Hub, una plataforma para descubrir y comparar herramientas de inteligencia artificial organizadas por categoría.

## Tecnologías

- React 19 + Vite
- React Router DOM — navegación entre páginas
- Axios — consumo de la API REST
- Tailwind CSS + estilos inline
- JavaScript (ES6+)

## Estructura del proyecto
src/
├── components/
│   ├── Navbar.jsx          # Barra de navegación fija con link admin
│   ├── Hero.jsx            # Sección principal de la página
│   ├── CategoryButtons.jsx # Filtros de categoría
│   ├── ToolCard.jsx        # Tarjeta individual de herramienta
│   ├── ToolGrid.jsx        # Grid de herramientas con paginación
│   ├── Features.jsx        # Sección de características
│   ├── Comparison.jsx      # Sección de planes y accesos
│   └── Footer.jsx          # Pie de página
├── pages/
│   ├── Login.jsx           # Página de inicio de sesión
│   ├── Register.jsx        # Página de registro
│   ├── Home.jsx            # Página principal
│   ├── Dashboard.jsx       # Panel de administración
│   ├── DashboardCategories.jsx  # Gestión de categorías
│   └── DashboardTools.jsx       # Gestión de herramientas
├── services/
│   ├── axios.js            # Instancia base con interceptor JWT
│   ├── authService.js      # Login, register y logout
│   ├── categoriesService.js
│   └── toolsService.js
├── hooks/                  # Custom hooks (a futuro)
├── layouts/                # Layouts reutilizables (a futuro)
├── App.jsx                 # Rutas principales
├── main.jsx                # Punto de entrada
└── index.css               # Estilos globales y media queries

## Requisitos

- Node.js 18 o superior
- npm o pnpm
- Backend de AI Hub corriendo en `http://localhost:5221`

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/ai-hub-frontend
cd ai-hub-frontend

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`.

## Variables de entorno

Si necesitas cambiar la URL del backend, edita `src/services/axios.js`:

```js
const api = axios.create({
  baseURL: 'http://localhost:5221/api'
});
```

## Rutas disponibles

| Ruta | Descripción | Acceso |
|------|-------------|--------|
| `/login` | Inicio de sesión | Público |
| `/register` | Registro de usuario | Público |
| `/home` | Página principal con herramientas | Público |
| `/dashboard` | Panel de administración | Solo admin |
| `/dashboard/categories` | Gestión de categorías | Solo admin |
| `/dashboard/tools` | Gestión de herramientas | Solo admin |

## Funcionalidades

- Listado de herramientas IA consumido desde la API
- Filtrado por categoría en tiempo real
- Paginación de 9 herramientas por página
- Autenticación con JWT — token guardado en localStorage
- Rutas protegidas por rol (admin/user)
- Panel admin para CRUD de categorías y herramientas
- Diseño responsivo para móvil, tablet y escritorio
- Navbar fijo con acceso rápido al panel admin

## Scripts disponibles

```bash
pnpm run dev      # Servidor de desarrollo
pnpm run build    # Build de producción
pnpm run preview  # Vista previa del build
pnpm run lint     # Verificación de código
```

## Paleta de colores

| Color | HEX | Uso |
|-------|-----|-----|
| Azul oscuro | `#112e40` | Fondo principal, navbar |
| Azul medio | `#025273` | Hero, secciones secundarias |
| Gris claro | `#c8d3d9` | Fondo general, textos |
| Turquesa | `#41d1f3` | Acentos, botones CTA |
| Turquesa claro | `#3ce0f2` | Hover y detalles |
