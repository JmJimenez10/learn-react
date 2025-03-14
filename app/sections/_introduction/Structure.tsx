import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const Structure = () => {
    const code = "src/\n├── api/\t\t\t\t\t\t# Llamadas a la API y configuración\n├── assets/\t\t\t\t\t\t# Imágenes, fuentes, íconos, etc.\n├── components/\t\t\t\t\t# Componentes reutilizables\n│   ├── Button/\n│   │   ├── Button.tsx\n│   │   └── Button.module.css\n├── features/\t\t\t\t\t# Funcionalidades específicas\n│   ├── Auth/\n│   │   ├── Login.tsx\n│   │   └── Register.tsx\n├── hooks/\t\t\t\t\t\t# Custom hooks\n├── layouts/\t\t\t\t\t# Estructura y diseño de las páginas\n├── pages/\t\t\t\t\t\t# Páginas principales del sitio\n├── routes/\t\t\t\t\t\t# Configuración de rutas\n├── services/\t\t\t\t\t# Lógica de negocio\n├── store/\t\t\t\t\t\t# Estados globales\n├── styles/\t\t\t\t\t\t# Archivos CSS globales o temas\n├── utils/\t\t\t\t\t\t# Funciones de utilidad\n├── types/\t\t\t\t\t\t# Definiciones de TypeScript\n└── App.tsx\t\t\t\t\t\t# Componente raíz";

    return <div id="structure" className="w-full pt-14">
        <h3 className="text-xl text-neutral-100 mb-4">5. Estructura del proyecto</h3>
        <p className="text-neutral-200 text-pretty">- En un proyecto medio-grande de React, una buena estructura de carpetas es clave para mantener el código organizado, escalable y fácil de mantener. Aunque no hay una única forma correcta de hacerlo, una estructura bastante usada y probada en proyectos grandes sigue este patrón:</p>
        <SyntaxHighlighter language="tsx" style={tomorrow}>
            {code}
        </SyntaxHighlighter>
        {/* ├── 📄 main.jsx → Punto de entrada de la app<br></br>
        ├── 📄 App.jsx → Componente raíz de la app<br></br>
        ├── 📂 components → Para los componentes reutilizables<br></br>
        ├── 📂 pages → Para las diferentes vistas de la app<br></br>
        ├── 📂 assets → Para imágenes o archivos estáticos<br></br>
        └── 📄 index.css → Estilos globales<br></br> */}
        <hr className="text-neutral-700 mt-10" />
    </div>
}
