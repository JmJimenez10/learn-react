import Link from "next/link";
import { poppins } from "../ui/fonts";
import { Section } from "../ui/section";
import { Requirements } from "./_introduction/Requirements";
import { Welcome } from "./_introduction/Welcome";
import { Installation } from "./_introduction/Installation";
import { Structure } from "./_introduction/Structure";

export default function Introduction() {
    const temas = [
        { name: "Bienvenida y objetivos", id: "welcome" },
        { name: "Requisitos y herramientas", id: "requirements" },
        { name: "Instalación del entorno React + Tailwind", id: "installation" },
        { name: "Clonar el repositorio base", id: "" },
        { name: "Estructura del proyecto", id: "structure" },
    ]

    return <Section className="min-h-screen p-20">
        <h1 className={`${poppins.className} text-4xl text-center font-bold`}>Introducción</h1>

        <div className="w-full my-10">
            <h2 className="text-neutral-200 mb-4">Índice</h2>
            <ul className="space-y-2 list-decimal text-neutral-400">
                {temas.map((category, index) => (
                    <li key={index}>
                        <Link href={`#${category.id.replace(/\s+/g, '-')}`} className="text-neutral-400 hover:text-neutral-200 underline">
                            {category.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

        <Welcome />
        <Requirements />
        <Installation />
        
        <Structure />
    </Section>
}