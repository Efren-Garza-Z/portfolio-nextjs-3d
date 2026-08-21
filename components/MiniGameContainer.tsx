"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MiniGameContainer() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        // Fondo de la sección (Ajusta el color para que combine con el scroll de tu Hero)
        <section className="w-full py-32 px-6 flex flex-col items-center justify-center bg-[#fdf0d5]">

            {/* Título de la sección */}
            <div className="text-center mb-12">
                <h2 className="text-5xl md:text-7xl font-black text-stone-800 tracking-tighter">
                    TIME TO <span className="text-[#f48c06]">PLAY</span>
                </h2>
                <p className="text-stone-500 font-bold tracking-widest uppercase mt-3">
                    Slice the cubes. Beat the score.
                </p>
            </div>

            {/* EL CONTENEDOR NEO-BRUTALISTA
        Sombra desplazada: shadow-[12px_12px_0px_0px_rgba(28,25,23,1)]
      */}
            <div className="relative w-full max-w-5xl h-[500px] md:h-[650px] rounded-3xl border-4 border-stone-900 bg-[#e0f2fe] overflow-hidden shadow-[12px_12px_0px_0px_rgba(28,25,23,1)] transition-all duration-300">

                {/* 1. LA CAPA DE BLOQUEO (Borrosa) */}
                <AnimatePresence>
                    {!isPlaying && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            // Al salir, hacemos que se expanda ligeramente y se desvanezca
                            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                            transition={{ duration: 0.4 }}
                            className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/40 backdrop-blur-md"
                        >
                            <button
                                onClick={() => setIsPlaying(true)}
                                className="group relative px-10 py-5 bg-[#f48c06] border-4 border-stone-900 rounded-2xl font-black text-3xl md:text-5xl text-white uppercase tracking-wider overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(28,25,23,1)] active:translate-y-2 active:shadow-none"
                            >
                                {/* Brillo dinámico en hover */}
                                <div className="absolute inset-0 w-0 bg-white transition-all duration-300 ease-out group-hover:w-full opacity-20" />
                                Play Minigame
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* 2. EL ESPACIO PARA TU JUEGO 3D */}
                {/* Aquí cambiamos el grayscale y el blur dependiendo del estado isPlaying */}
                <div
                    className={`w-full h-full transition-all duration-700 ${
                        !isPlaying
                            ? "grayscale-[60%] blur-[3px] pointer-events-none"
                            : "grayscale-0 blur-0 pointer-events-auto"
                    }`}
                >
                    {/* ¡AQUÍ IMPORTARÁS TU CANVAS!
             <TuJuegoDeCortarCubos />
           */}

                    {/* Placeholder visual por ahora para que veas el espacio */}
                    <div className="w-full h-full flex flex-col items-center justify-center border-dashed border-4 border-stone-400/50 rounded-2xl m-4 max-w-[calc(100%-32px)] max-h-[calc(100%-32px)]">
                        <span className="text-6xl mb-4">🧊</span>
                        <p className="text-stone-500 font-bold text-2xl tracking-widest uppercase">
                            [ Canvas del Juego ]
                        </p>
                    </div>
                </div>

                {/* 3. BOTÓN PARA SALIR DEL JUEGO */}
                <AnimatePresence>
                    {isPlaying && (
                        <motion.button
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ delay: 0.3 }}
                            onClick={() => setIsPlaying(false)}
                            className="absolute top-6 right-6 z-30 bg-stone-900 text-white font-bold px-6 py-2 rounded-full border-2 border-stone-900 hover:bg-white hover:text-stone-900 transition-colors shadow-[4px_4px_0px_0px_rgba(244,140,6,1)]"
                        >
                            QUIT
                        </motion.button>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}