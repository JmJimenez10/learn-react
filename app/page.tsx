import { IoCaretBackOutline, IoCaretForwardOutline, IoLogoReact, IoRocketOutline } from "react-icons/io5";
import { Header } from "@/app/layout/header";
import { MainButtonLink } from "@/app/ui/buttons";
import { poppins } from "@/app/ui/fonts";

export default function Home() {
  return <>
    <div className="h-full w-full absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
    <div className="relative z-10 w-full sm:w-4/5 md: xl:w-3/5 mx-auto">
      <Header />
      <main className="flex flex-col gap-[24px] justify-center items-center p-10">
        <section className="w-full lg:w-4/5 h-[calc(100vh-384px)] bg-neutral-900 border border-neutral-700 rounded-lg flex flex-col items-center justify-center gap-10 p-5 md:p-10 xl:p-20">
          <IoLogoReact className="text-9xl text-sky-400 animate-[spin_30s_linear_infinite]" />
          <h1 className={`${poppins.className} text-3xl font-bold text-center`}>Aprende <span className="text-4xl text-sky-400">React</span> desde cero con un proyecto real</h1>
          <h2 className="text-pretty"> - Crea tu propia aplicación tipo IMDb mientras dominas los conceptos clave de React.</h2>
        </section>
        <section className="w-4/5 bg-neutral-900 border border-neutral-700 rounded-lg flex items-center justify-center gap-10 py-3">
          <IoCaretForwardOutline /><MainButtonLink text="Empezar" href="" icon={<IoRocketOutline />} className="cursor-not-allowed" /> <IoCaretBackOutline />
        </section>
      </main>
    </div>
  </>
}
