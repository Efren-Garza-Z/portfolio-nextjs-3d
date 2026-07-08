"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
// Aquí importarás tu clase App original cuando la pongas en tu proyecto
import { App } from "@/utils/game/src/App";

export default function StackGameWindow() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    // EFECTO PUENTE: Monta tu código Vanilla Three.js dentro de React
    useEffect(() => {
        if (typeof window === "undefined" || !containerRef.current) return;

        // Descomenta esto cuando hayas movido tus archivos del juego a tu proyecto:

        const app = new App(containerRef.current);

        const handleResize = () => app.onResize();
        window.addEventListener('resize', handleResize);

        return () => {
          window.removeEventListener('resize', handleResize);
          if (containerRef.current) containerRef.current.innerHTML = '';
        };

    }, []);

    return (
        <section className="relative w-full py-32 px-4 md:px-12 flex flex-col items-center justify-center min-h-screen">

            <div className="text-center mb-10">
                <h2 className="text-4xl md:text-6xl font-black text-stone-800 tracking-tighter drop-shadow-sm">
                    TAKE A BREAK.
                </h2>
                <p className="text-stone-500 font-bold tracking-widest uppercase mt-2">
                    Can you beat my high score?
                </p>
            </div>

            {/* LA VENTANA DE CRISTAL */}
            <motion.div
                layout
                onClick={() => setIsFocused(true)}
                onMouseLeave={() => setIsFocused(false)}
                className={`relative w-full max-w-4xl h-[600px] rounded-2xl border border-white/40 shadow-2xl overflow-hidden transition-all duration-500 ${
                    isFocused
                        ? "scale-100 bg-white/10 backdrop-blur-none" // Modo Activo: Claro y listo para jugar
                        : "scale-95 bg-white/30 backdrop-blur-md grayscale-[30%] cursor-pointer" // Modo Inactivo: Borroso y minimizado
                }`}
            >
                {/* Barra superior estilo MacOS */}
                <div className="absolute top-0 left-0 w-full h-10 bg-white/20 backdrop-blur-md border-b border-white/30 z-50 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    <span className="ml-2 text-xs font-bold text-stone-600 uppercase tracking-widest">
            Stack.exe
          </span>
                </div>

                {/* CONTENEDOR DEL JUEGO (Target para tu clase App) */}
                <div
                    ref={containerRef}
                    id="game-container"
                    className="w-full h-full bg-[#2c3e50]"
                >
                    {/* Tu UI original de HTML insertada en React */}
                    <div id="points" className="absolute w-full text-center top-[-10%] text-6xl font-sans text-white drop-shadow-[2px_2px_0_rgba(0,0,0,1)] z-40 pointer-events-none transition-all duration-500" />

                    <div id="button-start" className="absolute w-full text-center top-[40%] z-40 transition-all duration-500">
                        {/* Si no está enfocado, mostramos un aviso. Si está enfocado, mostramos el botón real de tu juego */}
                        {!isFocused ? (
                            <span className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-white font-bold tracking-widest shadow-lg">
                CLICK TO ACTIVATE
              </span>
                        ) : (
                            <button className="px-8 py-4 bg-transparent border-2 border-white rounded-md text-white text-3xl font-bold uppercase drop-shadow-[2px_2px_0_rgba(0,0,0,1)] hover:bg-[#64afcc] transition-colors pointer-events-auto shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                Start
                            </button>
                        )}
                    </div>

                    <div id="gameover" className="absolute w-full text-center top-[-30%] text-5xl font-sans text-white drop-shadow-[2px_2px_0_rgba(0,0,0,1)] z-40 pointer-events-none transition-all duration-500">
                        GAME OVER
                    </div>
                </div>
            </motion.div>
        </section>
    );
}