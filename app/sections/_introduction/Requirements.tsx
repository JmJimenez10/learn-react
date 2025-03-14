import { CodeSnippet } from '@/app/ui/code-snippet'
import Link from 'next/link'
import React from 'react'

export const Requirements = () => {
    return <div id="requirements" className="w-full pt-14">
        <h3 className="text-xl text-neutral-100 mb-4">2. Requisitos y herramientas</h3>
        <p className="text-neutral-200 text-pretty">- Necesitarás tener conocimientos básicos de HTML, CSS y JavaScript.
            También necesitarás tener instalado Node.js y npm.</p>
        <ol className="my-5 space-y-2">
            <li className="text-neutral-500">✔️ <Link href={"https://nodejs.org/es"} target="_blank" className="text-blue-400 hover:underline">Node.js</Link> (Versión recomendada: <code className="code bg-neutral-900">20.x.x</code> o superior) </li>
            <li className="text-neutral-500">✔️ <Link href={"https://code.visualstudio.com/"} target="_blank" className="text-blue-400 hover:underline">Visual Studio Code</Link></li>
            <li className="text-neutral-500">✔️ <Link href={"https://git-scm.com/"} target="_blank" className="text-blue-400 hover:underline">Git</Link></li>
        </ol>

        <h4 className="text-neutral-400 ml-6">- Extensiones recomendadas para Visual Studio Code</h4>
        <ol className="mb-5 mt-2 space-y-2">
            <li className="text-neutral-300">✔️ ESLint → Linter para mantener código limpio</li>
            <li className="text-neutral-300">✔️ Prettier → Formateador de código</li>
            <li className="text-neutral-300">✔️ Tailwind CSS IntelliSense → Autocompletado para Tailwind</li>
        </ol>

        <CodeSnippet code={"node -v \nnpm -v \ngit --version"}
            text="Prueba estos comandos por separado para verificar la instalación y versiones." />

        <hr className="text-neutral-700 mt-10" />
    </div>
}
