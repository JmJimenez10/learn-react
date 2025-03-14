'use client'

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useRef, useEffect } from 'react';
import { IoCaretDownSharp, IoLogoReact } from 'react-icons/io5';

const links = [
    { name: "Inicio", href: "/" },
    {
        name: "Secciones", items: [
            { name: "Introducción", href: "/sections" },
            { name: "JSX, Props y Estado", href: "/sections/jsx-props-states" },
            { name: "Efectos y Ciclo de Vida", href: "" },
            { name: "Rutas y Navegación", href: "" },
            { name: "Estado Global y Context API", href: "" },
            { name: "Formularios y Validación", href: "" },
            { name: "Estado Global Avanzado", href: "" },
        ]
    },
    { name: "Recursos", href: "/resources" }
]

export const Header = () => {
    const pathname = usePathname() || "/";
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className='px-10 py-5 border-b flex justify-between items-center flex-wrap'>
            <small className='flex'>| <span className='flex px-2'>Learn <IoLogoReact className='text-xl' /></span> |</small>
            <nav className='flex gap-10'>
                {links.map(({ name, href, items }) => (
                    items ? (
                        <div key={name} className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className={clsx(
                                    'cursor-pointer text-neutral-400 hover:text-neutral-200 hover:underline transition-all flex items-center gap-1',
                                    dropdownOpen && 'text-neutral-200 underline'
                                )}
                            >
                                {name} <IoCaretDownSharp />
                            </button>
                            {dropdownOpen && (
                                <div className="p-2 absolute left-0 divide-y divide-neutral-700 mt-2 w-60 bg-neutral-800 border border-neutral-700 rounded-sm shadow-lg z-50">
                                    {items.map(({ name, href }) => (
                                        <Link
                                            key={name}
                                            href={href}
                                            className="block px-4 py-2 text-neutral-400 hover:text-white transition"
                                        >
                                            {name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link
                            key={name}
                            href={href}
                            className={
                                `text-neutral-400 hover:text-neutral-200 hover:underline transition-all ${pathname === href && 'text-white'}`
                            }
                        >
                            {name}
                        </Link>
                    )
                ))}
            </nav>
        </header>
    );
}
