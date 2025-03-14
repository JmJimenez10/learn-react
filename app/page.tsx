import { IoCaretBackOutline, IoCaretForwardOutline, IoCheckmark, IoLogoReact, IoRocketOutline } from "react-icons/io5";
import { Header } from "@/app/layout/header";
import { MainButtonLink } from "@/app/ui/buttons";
import { poppins } from "@/app/ui/fonts";
import { Section } from "./ui/section";

export default function Home() {
  return <>
    <div className="h-full w-full absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
    <div className="relative z-10 w-full sm:w-4/5 md: xl:w-3/5 mx-auto">
      <Header />
      <main className="flex flex-col gap-6 justify-center items-center p-10">
        <section className="w-full lg:w-4/5 h-[calc(100vh-384px)] bg-neutral-900 border border-neutral-700 rounded-lg flex flex-col items-center justify-center gap-10 p-5 md:p-10 xl:p-20">
          <IoLogoReact className="text-9xl text-sky-400 animate-[spin_30s_linear_infinite]" />
          <h1 className={`${poppins.className} text-3xl font-bold text-center`}>Aprende <span className="text-5xl text-sky-400">React</span> desde cero con un proyecto real</h1>
          <h4 className="text-pretty"> - Crea tu propia aplicación tipo IMDb mientras dominas los conceptos clave de React.</h4>
        </section>
        <Section className="flex items-center justify-center gap-10 py-3">
          <IoCaretForwardOutline /><MainButtonLink text="Empezar" href="/sections" icon={<IoRocketOutline />} /> <IoCaretBackOutline />
        </Section>
        <section className="w-full lg:w-4/5 grid grid-cols-12 gap-6 ">
          <Section className="col-span-8 p-5" defaultSize={false}>
            <h3 className={`${poppins.className} mb-5 text-3xl`}>¿Por qué este curso?</h3>
            <ul className="list-none pl-5 text-neutral-300 text-lg">
              <li className="flex items-center gap-2"><IoCheckmark className="text-green-600 text-3xl" /> Aprende React mientras creas un proyecto real</li>
              <li className="flex items-center gap-2"><IoCheckmark className="text-green-600 text-3xl" /> Usa herramientas modernas como TailwindCSS</li>
              <li className="flex items-center gap-2"><IoCheckmark className="text-green-600 text-3xl" /> Obtén experiencia en manejo de estado y API</li>
              <li className="flex items-center gap-2"><IoCheckmark className="text-green-600 text-3xl" /> Mejora tu portafolio con un proyecto completo</li>
            </ul>
          </Section>
          <div className="col-span-4 bg-neutral-900 border border-neutral-700 rounded-lg flex items-center justify-center">
            <span className="text-9xl">💡</span>
          </div>

          <div className="col-span-4 bg-neutral-900 border border-neutral-700 rounded-lg flex items-center justify-center">
            <span className="text-9xl">📚</span>
          </div>
          <div className="col-span-8 bg-neutral-900 border border-neutral-700 rounded-lg p-5">
            <h3 className={`${poppins.className} mb-5 text-3xl`}>¿Qué aprenderás?</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Componentes y Props',
                'Estado y Eventos',
                'Rutas y Navegación',
                'Consumo de API',
                'Context API y Estado Global',
                'Y mucho más...'
              ].map((item) => (
                <div key={item} className="p-4 border border-neutral-600 rounded-lg">
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  </>
}
