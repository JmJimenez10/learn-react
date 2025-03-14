import { Metadata } from "next";
import { Header } from "../layout/header";

export const metadata: Metadata = {
    title: {
        template: '%s | Learn React',
        default: 'Learn React - Curso interactivo',
    },
    description: 'Aprende React desde lo básico hasta conceptos avanzados con este curso interactivo y recursos prácticos.',
    metadataBase: new URL('https://learn-react.jmjimenez.dev'),
    openGraph: {
        title: 'Learn React - Curso interactivo',
        description: 'Un curso completo de React para desarrolladores de todos los niveles. Aprende desde conceptos básicos hasta avanzados con ejemplos prácticos.',
        url: 'https://learn-react.jmjimenez.dev',
        siteName: 'Learn React',
        // images: [
        //   {
        //     url: 'https://learn-react.jmjimenez.dev/og-image.jpg',
        //     width: 1200,
        //     height: 630,
        //     alt: 'Imagen de Open Graph de Learn React',
        //   },
        // ],
    }
};

export const experimental_ppr = true;

export default function Layout({ children }: { children: React.ReactNode }) {

    return <><div className="h-full w-full absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="relative z-10 w-full sm:w-4/5 md: xl:w-3/5 mx-auto">
            <Header />
            <main className="flex flex-col gap-6 justify-center items-center p-10">
                {children}
            </main>
        </div></>
}