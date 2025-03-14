import Link from "next/link";
import { Header } from "../layout/header";
import { links } from "../lib/resources-links";
import { poppins } from "../ui/fonts";

export default function Resources() {

    return <>
        <div className="h-full w-full absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="relative z-10 w-full sm:w-4/5 md: xl:w-3/5 mx-auto">
            <Header />
            <main className="flex flex-col gap-[24px] justify-center items-center p-10">
                <section className="w-full lg:w-4/5 bg-neutral-900 border border-neutral-700 rounded-lg flex flex-col items-center justify-center p-20">
                    <h1 className={`${poppins.className} text-3xl font-bold text-center`}>Recursos para Desarrollo Web</h1>

                    <div className="w-full my-10">
                        <h2 className="text-neutral-200 mb-4">Índice</h2>
                        <ul className="space-y-2 list-decimal text-neutral-400">
                            {links.map((category, index) => (
                                <li key={index}>
                                    <Link href={`#${category.name.replace(/\s+/g, '-')}`} className="text-neutral-400 hover:text-neutral-200 underline">
                                        {category.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {links.map((category) => (
                        <div key={category.name} id={`${category.name.replace(/\s+/g, '-')}`} className="w-full pt-14">
                            <h3 className="text-xl text-neutral-200 mb-4">{category.name}</h3>
                            <ul className="ml-5 list-disc space-y-2">
                                {category.links.map((link) => (
                                    <li key={link.href} className="text-blue-400 hover:text-blue-200 w-max">
                                        <Link href={link.href} target="_blank" rel="noopener noreferrer nofollow" className="underline">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    </>
}