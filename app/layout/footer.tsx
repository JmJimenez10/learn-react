import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return <footer className="relative z-10 flex gap-3 flex-col flex-wrap items-center justify-center text-neutral-600 my-10">
    <p>Made by <Link href={"https://jmjimenez.dev"} target='_blank' className='underline text-neutral-500'>JmJimenez.dev</Link> 👨🏼‍💻</p>
    <p>@2025 Todos los derechos reservados</p>
    </footer>
}
