'use client';

import { useState } from 'react';
import { IoCheckmarkOutline, IoCopyOutline, IoTerminalOutline } from 'react-icons/io5';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const CodeSnippet = ({ code, route, text }: { code: string, route?: string, text?: string }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return <section className='mb-2 pt-4'>
        {text && <small className='text-neutral-500 mb-10'>&gt; {text}</small>}
        <div className="border border-neutral-700 pb-0 rounded-md">
            <div className='flex items-center justify-between px-2 py-2'>
                <p className='text-xs text-neutral-400 ml-2'>{route ? `Ruta: ${route}` : <IoTerminalOutline size={18} />}</p>
                <button
                    onClick={handleCopy}
                    aria-label={copied ? 'Código copiado' : 'Copiar código'}
                    className="cursor-pointer p-2 rounded hover:bg-neutral-950 text-xs text-neutral-400"
                    title={copied ? 'Código copiado' : 'Copiar código'}
                >
                    {copied ? <IoCheckmarkOutline size={18} /> : <IoCopyOutline size={18} />}
                </button>

            </div>
            <SyntaxHighlighter showLineNumbers={route ? true : false} language="tsx" style={tomorrow}>
                {code}
            </SyntaxHighlighter>
        </div>
    </section>
};