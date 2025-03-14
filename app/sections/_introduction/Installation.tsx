import { CodeSnippet } from '@/app/ui/code-snippet'
import React from 'react'

export const Installation = () => {
    const codeViteConfig = "import { defineConfig } from 'vite'\nimport react from '@vitejs/plugin-react-swc'\nimport tailwindcss from '@tailwindcss/vite'\n\nexport default defineConfig({\n  plugins: [react(), tailwindcss()]\n})"

    return <div id="installation" className="w-full pt-14">
        <h3 className="text-xl text-neutral-100 mb-4">3. Instalación del entorno React + Tailwind</h3>
        <p className="text-neutral-200 text-pretty">- Para este curso usaremos un proyecto ya creado con la base y algunos componentes definidos, sin embargo, esta es una forma de crear un nuevo proyecto de React.</p>
        <CodeSnippet code={"npm create vite@latest"} />
        <ul className='list-decimal ml-10 text-sm text-neutral-400 my-2'>
            <li>Añadir nombre del proyecto</li>
            <li>Escoger <code className="code">React</code> como framework</li>
            <li>Elegir <code className="code">TypeScript + SWC</code> como variante (o <code className="code">JavaScript + SWC</code>)</li>
            <li>Ir al directorio del proyecto e instalar las dependencias</li>
        </ul>
        <CodeSnippet code={"cd nombre-proyecto\nnpm install\nnpm install tailwindcss @tailwindcss/vite --save"} />
        
        <CodeSnippet code={codeViteConfig} text='Una vez hecho esto, para trabajar con Tailwind CSS copia y pega el siguiete fragmento de código en tu archivo vite.config.ts.' route='/vite.config.ts' />

        <CodeSnippet code={'@import "tailwindcss";'} text='Además, en el archivo index.css habrá que importarlo.' route='/index.css' />
        
        <CodeSnippet code={'npm run dev'} text='Arrancar el proyecto.' />
        
        <hr className="text-neutral-700 mt-10" />
    </div>
}