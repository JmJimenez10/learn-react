import '@/app/ui/globals.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
import { Footer } from './layout/footer';

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased bg-neutral-900 text-neutral-200`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}