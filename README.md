# Web Portfolio - Agustín Colombo

This repository contains the source code for my **Personal Portfolio and Web Resume**. It's a Single Page Application (SPA) built with **React 18 + Vite**, designed to present my professional experience, technical skills, and featured projects in a structured, responsive way.

## Description

The project is a modern web application that serves as a professional showcase. Its goal is to offer a clean, accessible, and aesthetically pleasing interface that reflects my technical skills as a developer, making it easy to access my professional background and portfolio of work.

## Features

- **Responsive Design**: Fully adaptable interface that ensures optimal viewing on mobile devices, tablets, and high-resolution monitors (up to 8K).
- **Custom Styling**: Apple-inspired design system with a coherent color palette and Montserrat, Source Serif 4, and JetBrains Mono typefaces, managed through CSS variables and SASS.
- **Modular Architecture**: React components with CSS Modules for style encapsulation and separation of concerns.
- **Intuitive Navigation**: Section-based scroll snapping with fixed navigation dots that reflect the active section in real time.
- **Scroll Spy**: Custom `useScrollSpy` hook that detects the visible section and updates navigation with no external dependencies.

## Tech Stack

- **UI Library**: React 18
- **Build Tool**: Vite 5
- **Language**: TypeScript ~5.5
- **Routing**: React Router DOM v6
- **Styling**: SASS (.sass), CSS Modules, CSS Variables
- **Fonts**: Google Fonts (Montserrat, Source Serif 4, JetBrains Mono)
- **Testing**: Vitest + Testing Library (React)
- **Version Control**: Git
- **Deployment**: Vercel

## Project Structure

```
src/
├── components/         # React components by feature
│   ├── Home/           # Main container (scroll spy + nav dots)
│   ├── Presentacion/   # Hero section with personal data
│   ├── Proyectos/      # Projects grid
│   ├── Contacto/       # Contact section
│   └── NotFound/       # 404 page
├── data/               # Static data (projects)
├── hooks/              # Custom hooks (useScrollSpy)
├── models/             # TypeScript interfaces
├── router/             # Route configuration
├── App.tsx             # Root component
├── main.tsx            # Entry point
└── styles.sass         # Global styles and design tokens
```

## Local Installation and Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Agustincolombo/Web-Page-Curriculum.git
   cd Web-Page-Curriculum
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173/`.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server with HMR |
| `npm run build` | Production build |
| `npm run preview` | Preview the production build |
| `npm test` | Run the test suite |

## Build

```bash
npm run build
```

The resulting files are generated in the `dist/` directory, minified and optimized for production.

## Tests

The project has a unit test suite built with Vitest and Testing Library:

```bash
npm test
```

Current coverage: **17 tests** across 5 files (components + `useScrollSpy` hook).

## Contact

**Agustín Colombo**

- [LinkedIn](https://www.linkedin.com/in/agustin-colombo-dev/)
- [GitHub](https://github.com/Agustincolombo)
