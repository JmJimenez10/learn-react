import React from 'react'

export const Welcome = () => {
    return <div id="welcome" className="w-full pt-14">
        <h3 className="text-xl text-neutral-100 mb-4">1. Bienvenida y objetivos</h3>
        <p className="text-neutral-200 text-pretty">- ¡Bienvenido al curso de React con Tailwind CSS!
            En este curso, vas a construir una aplicación tipo IMDb para buscar y puntuar películas.
            Aprenderás desde los fundamentos de React (componentes, props, estado) hasta temas avanzados como consumo de API y gestión de estado global.</p>

        <hr className="text-neutral-700 mt-10" />
    </div>
}
