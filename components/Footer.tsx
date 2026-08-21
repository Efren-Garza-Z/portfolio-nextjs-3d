"use client";

import Link from "next/link";
// Importamos solo los iconos sociales que vas a usar en el footer
// Asegúrate de ajustar la ruta de importación a tu estructura real

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#1e293b] text-stone-300 py-16 px-4 md:px-12 relative overflow-hidden border-t border-stone-800">

            {/* Opcional: Un pequeño destello de luz de fondo para darle un toque 3D/Moderno */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#3b9cd7] rounded-full blur-[150px] opacity-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">

                {/* COLUMNA 1: Marca y Bio */}
                <div className="flex flex-col gap-6">
                    <Link href="/" className="group flex items-center gap-2 w-fit">
                        <div className="w-5 h-5 bg-[#f8edeb] rounded-sm transform group-hover:rotate-45 transition-transform duration-300" />
                        <span className="text-3xl font-black tracking-tighter text-[#f8edeb]">
                            EFREN<span className="text-[#f48c06]">.</span>
                        </span>
                    </Link>
                    <p className="text-sm text-stone-400 leading-relaxed">
                        Ingeniero de Software, generación 2025. Construyendo soluciones fullstack escalables y experiencias web modernas para diversas industrias y mercados globales.
                    </p>
                    <p className="text-xs text-stone-500 font-medium">
                        © {currentYear} Efren David Garza. <br/> All rights reserved.
                    </p>
                </div>

                {/* COLUMNA 2: Navegación */}
                <div className="flex flex-col gap-4 lg:ml-12">
                    <h4 className="text-white font-bold tracking-widest uppercase text-sm mb-2">
                        Navegación
                    </h4>
                    <Link href="#about" className="text-sm hover:text-[#f48c06] transition-colors w-fit">
                        Sobre Mí
                    </Link>
                    <Link href="#experience" className="text-sm hover:text-[#f48c06] transition-colors w-fit">
                        Experiencia
                    </Link>
                    <Link href="#projects" className="text-sm hover:text-[#f48c06] transition-colors w-fit">
                        Proyectos
                    </Link>
                    <Link href="#skills" className="text-sm hover:text-[#f48c06] transition-colors w-fit">
                        Tecnologías
                    </Link>
                </div>

                {/* COLUMNA 3: Contacto / Socials */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-white font-bold tracking-widest uppercase text-sm mb-2">
                        Contacto
                    </h4>
                    <a
                        href="https://github.com/Efren-Garza-Z"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 text-sm hover:text-[#f48c06] transition-colors w-fit"
                    >
                        {/* Puedes usar los iconos SVG directamente o tu componente Image si los importas desde tus assets */}
                        <span className="w-5 h-5 bg-stone-700 rounded-md block"></span> {/* Placeholder del icono */}
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/efren-david-garza-zacamolpa-9344b1238/"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 text-sm hover:text-[#f48c06] transition-colors w-fit"
                    >
                        <span className="w-5 h-5 bg-stone-700 rounded-md block"></span> {/* Placeholder del icono */}
                        LinkedIn
                    </a>
                    <a
                        href="https://wa.me/522462136643"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 text-sm hover:text-[#f48c06] transition-colors w-fit"
                    >
                        <span className="w-5 h-5 bg-stone-700 rounded-md block"></span> {/* Placeholder del icono */}
                        WhatsApp
                    </a>
                </div>

                {/* COLUMNA 4: Destacados (Proyectos o Stack) */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-white font-bold tracking-widest uppercase text-sm mb-2">
                        Top Proyectos
                    </h4>
                    <a
                        href="https://gemini-3-threejs.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm hover:text-[#3b9cd7] transition-colors w-fit"
                    >
                        ICB - AI Learning
                    </a>
                    <a
                        href="https://gameblock.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm hover:text-[#3b9cd7] transition-colors w-fit"
                    >
                        StackBlocks 3D
                    </a>
                    <a
                        href="https://asesor-contable-y-fiscal.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm hover:text-[#3b9cd7] transition-colors w-fit"
                    >
                        Tax Landing Page
                    </a>

                    <div className="mt-4 pt-4 border-t border-stone-800">
                        <p className="text-xs text-stone-500">
                            Built with Next.js, Tailwind & Three.js
                        </p>
                    </div>
                </div>

            </div>
        </footer>
    );
}