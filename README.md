# Portfolio Web - Agustín Colombo

Este repositorio contiene el código fuente de mi **Portafolio Personal y Currículum Web**. Es una Single Page Application (SPA) desarrollada con **React 18 + Vite**, diseñada para presentar mi experiencia profesional, habilidades técnicas y proyectos destacados de manera estructurada y responsiva.

## Descripción

El proyecto consiste en una aplicación web moderna que sirve como carta de presentación profesional. Su objetivo es ofrecer una interfaz limpia, accesible y estéticamente agradable que refleje mis habilidades técnicas como desarrollador, permitiendo acceder fácilmente a mi información profesional y portafolio de trabajos.

## Características

- **Diseño Responsivo**: Interfaz totalmente adaptable que garantiza una visualización óptima en dispositivos móviles, tablets y monitores de alta resolución (hasta 8K).
- **Estilo Personalizado**: Sistema de diseño inspirado en Apple, con paleta de colores coherente y tipografías Montserrat, Source Serif 4 y JetBrains Mono, gestionado mediante variables CSS y SASS.
- **Arquitectura Modular**: Componentes React con CSS Modules para encapsulamiento de estilos y separación de responsabilidades.
- **Navegación Intuitiva**: Scroll snapping por secciones con dots de navegación fijos que reflejan la sección activa en tiempo real.
- **Scroll Spy**: Hook personalizado `useScrollSpy` que detecta la sección visible y actualiza la navegación sin dependencias externas.

## Tecnologías Utilizadas

- **UI Library**: React 18
- **Build Tool**: Vite 5
- **Lenguaje**: TypeScript ~5.5
- **Routing**: React Router DOM v6
- **Estilos**: SASS (.sass), CSS Modules, CSS Variables
- **Fuentes**: Google Fonts (Montserrat, Source Serif 4, JetBrains Mono)
- **Testing**: Vitest + Testing Library (React)
- **Control de Versiones**: Git
- **Despliegue**: Vercel

## Estructura del Proyecto

```
src/
├── components/         # Componentes React por feature
│   ├── Home/           # Contenedor principal (scroll spy + nav dots)
│   ├── Presentacion/   # Sección hero con datos personales
│   ├── Proyectos/      # Grid de proyectos
│   ├── Contacto/       # Sección de contacto
│   └── NotFound/       # Página 404
├── data/               # Datos estáticos (proyectos)
├── hooks/              # Hooks personalizados (useScrollSpy)
├── models/             # Interfaces TypeScript
├── router/             # Configuración de rutas
├── App.tsx             # Componente raíz
├── main.tsx            # Entry point
└── styles.sass         # Estilos globales y design tokens
```

## Instalación y Ejecución Local

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Agustincolombo/Web-Page-Curriculum.git
   cd Web-Page-Curriculum
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar servidor de desarrollo**
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:5173/`.

## Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo con HMR |
| `npm run build` | Build de producción |
| `npm run preview` | Preview del build de producción |
| `npm test` | Ejecutar suite de tests |

## Construcción (Build)

```bash
npm run build
```

Los archivos resultantes se generarán en el directorio `dist/`, minificados y optimizados para producción.

## Tests

El proyecto cuenta con una suite de tests unitarios con Vitest y Testing Library:

```bash
npm test
```

Cobertura actual: **17 tests** en 5 archivos (componentes + hook `useScrollSpy`).

## Contacto

**Agustín Colombo**

- [LinkedIn](https://www.linkedin.com/in/agustín-colombo)
- [GitHub](https://github.com/Agustincolombo)
