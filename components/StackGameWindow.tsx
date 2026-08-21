"use client";

import {Suspense, useState} from "react";
import { motion } from "framer-motion";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import { Cloud } from "./models/Cloud.jsx"

export default function StackGameWindow() {
    const [isGameActive, setIsGameActive] = useState(false);

    // ⚙️ Configuración del rebote (Spring)
    const springTransition = {
        type: "spring",
        stiffness: 120, // Velocidad
        damping: 12,    // Fricción (menos damping = más rebote)
    };

    return (
        <section className="relative w-full py-12 md:py-20 px-4 md:px-12 flex flex-col items-center justify-center min-h-screen overflow-x-hidden bg-[#87CEEB]">

            {/* TÍTULO PRINCIPAL CON NUBES */}
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="relative w-full min-h-[180px] md:min-h-[250px] flex items-center justify-center mb-10 md:mb-20 z-10 pb-3"
            >

                {/* NUBE IZQUIERDA */}
                {/* En móvil: w-[220px] y empujada a la orilla con left-[-70px]. En desktop: w-[450px] y left-0 */}
                <div className="absolute left-[-70px] md:left-0 top-[-20px] md:top-[-50px] w-[220px] h-[220px] md:w-[450px] md:h-[450px] cursor-grab active:cursor-grabbing z-0">
                    <Canvas camera={{ zoom: 1.4, position: [3, -15, -43] }}>
                        <ambientLight intensity={3.5} />
                        <pointLight position={[35, 35, 0]} intensity={1} />
                        <pointLight position={[-35, 35, 0]} intensity={0.4} />
                        <Suspense fallback={null}>
                            <Cloud />
                        </Suspense>
                        <OrbitControls enableZoom={false} />
                    </Canvas>
                </div>

                {/* TEXTO CENTRAL */}
                {/* Ajustado a text-3xl en móvil y text-6xl en md */}
                <div className="z-10 relative pointer-events-none px-4">
                    <h2 className="text-2xl md:text-6xl text-stone-800 tracking-tighter drop-shadow-sm font-black text-center pointer-events-auto leading-tight">
                        Hi, I'm Efren 👋 <br className="hidden md:block" />
                        <span className="block md:inline mt-2 md:mt-0">A Software Engineer from Mexico</span>
                    </h2>
                </div>

                {/* NUBE DERECHA */}
                <div className="absolute right-[-70px] md:right-0 top-[-20px] md:top-[-50px] w-[220px] h-[220px] md:w-[450px] md:h-[450px] cursor-grab active:cursor-grabbing z-0">
                    <Canvas camera={{ zoom: 1, position: [5, -10, 14] }}>
                        <ambientLight intensity={3.5} />
                        <pointLight position={[35, 35, 0]} intensity={1} />
                        <pointLight position={[-35, 35, 0]} intensity={0.4} />
                        <Suspense fallback={null}>
                            <Cloud />
                        </Suspense>
                        <OrbitControls enableZoom={false} />
                    </Canvas>
                </div>

            </motion.div>

            {/* CONTENEDOR PRINCIPAL: Flex-col en móvil (apilado), flex-row en desktop (lado a lado) */}
            <div className="relative w-full h-auto md:h-[600px] flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 z-10 max-w-7xl mx-auto">

                {/* 1. PANEL IZQUIERDO: Tarjeta */}
                <motion.div
                    initial={{ x: -150, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    // En móvil: Ancho completo (w-full), sin margen (ml-0). En desktop: w-[30%], ml-12 o ml-28
                    className="w-full md:w-[35%] lg:w-[40%] h-auto md:h-full bg-[linear-gradient(to_bottom,#fefeff_0%,#86cbe8_80%)] rounded-3xl ml-0  p-6 md:p-8 flex flex-col justify-center order-1 md:order-none"
                >
                    <span className="text-[#3b9cd7] font-bold tracking-[0.2em] uppercase text-xs mb-2">
                        Software Engineer
                    </span>
                    <h3 className="text-3xl md:text-4xl font-black text-stone-800 uppercase tracking-tight leading-none mb-4">
                        Soy Efren <br />
                        David Garza
                    </h3>
                    <p className="text-stone-600 text-sm md:text-base leading-relaxed">
                        Apasionado por el desarrollo frontend, la creación de interfaces interactivas y soluciones web modernas. ¡Bienvenido a mi espacio!
                    </p>

                    <div className="mt-8">
                        <button className="w-full md:w-auto bg-[#79C3E9] text-white font-bold px-6 py-3 rounded-full text-xs tracking-widest uppercase shadow-md hover:bg-[#2d85b8] transition-colors">
                            Ver Proyectos
                        </button>
                    </div>
                </motion.div>

                {/* 2. PANEL DERECHO: Iframe del Minijuego */}
                <motion.div
                    initial={{ x: 150, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    // En móvil: Altura fija (h-[450px]) para que no se coma toda la pantalla y bordes redondeados. En desktop recupera su h-full
                    className="w-full md:w-[60%] lg:w-[50%] h-[500px] md:h-full overflow-hidden relative rounded-3xl md:rounded-none order-2 md:order-none"
                >
                    <iframe
                        src="https://blocks-game-3d.vercel.app/"
                        className="w-full h-full border-none rounded-3xl md:rounded-none"
                        title="Stack Game"
                        loading="lazy"
                    />
                </motion.div>

            </div>
        </section>
    );
}