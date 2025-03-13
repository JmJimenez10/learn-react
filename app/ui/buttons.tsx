import Link from 'next/link'
import React from 'react'
import { poppins } from './fonts'

export const MainButtonLink = ({ text, href, icon, className }: {text: string, href: string, icon?: React.ReactElement, className?: string}) => {
  return <Link href={href} className={`${poppins.className} flex items-center gap-2 bg-neutral-200 text-neutral-800 hover:text-neutral-900 py-2 px-6 rounded-sm hover:bg-neutral-400 transition ${className}`}>{text} <span className='text-xl'>{icon}</span></Link>
}
