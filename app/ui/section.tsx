import clsx from 'clsx'
import React from 'react'

export const Section = ({ children, className, defaultSize = true }: { children: React.ReactNode, className?: string, defaultSize?: boolean }) => {
    return <section className={clsx("bg-neutral-900 border border-neutral-700 rounded-lg", className, defaultSize && "w-full lg:w-4/5")}>
        {children}
    </section>
}
