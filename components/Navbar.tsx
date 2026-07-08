"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
    const navLinks = [
        { name: "Proyectos", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Contacto", href: "#contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            // 'absolute' o 'fixed' integrado al fondo sin cajas
            className="fixed top-0 left-0 w-full z-50 p-6 md:p-10 flex justify-between items-center pointer-events-none"
        >
            {/* IZQUIERDA: Logo / Marca */}
            <div className="pointer-events-auto">
                <Link href="/" className="group flex items-center gap-2">
                    {/* Un pequeño cubo CSS como logo decorativo */}
                    <div className="w-6 h-6 bg-[#f8edeb] rounded-sm transform group-hover:rotate-45 transition-transform duration-300" />
                    <span className="text-5xl font-black tracking-tighter text-[#f8edeb] drop-shadow-md">
            EFREN<span className="text-[#f48c06]">.</span>
          </span>
                </Link>
            </div>

            {/* DERECHA: Enlaces */}
            <div className="pointer-events-auto hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-4xl font-black uppercase tracking-widest text-[#f8edeb] hover:text-[#f48c06] transition-colors drop-shadow-md"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* DERECHA: Menú Móvil (Hamburguesa simple) */}
            <div className="pointer-events-auto md:hidden">
                <button className="text-[#f8edeb] hover:text-[#f48c06] transition-colors">
                    <svg className="w-8 h-8 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </motion.nav>
    );
}