"use client";

import { Canvas, useThree } from "@react-three/fiber";
import {
    Float,
    PresentationControls,
    ContactShadows,
    Environment,
    MeshWobbleMaterial,
    MeshTransmissionMaterial // Material premium tipo cristal
} from "@react-three/drei";
import { motion } from "framer-motion";
import { ReactNode } from "react";

// 🛠️ COMPONENTE MAESTRO RESPONSIVO
// xOffset y yOffset son porcentajes (0.5 es el borde de la pantalla, 0 es el centro)
const ResponsiveShape = ({ children, xOffset, yOffset, z, speed = 2 }: { children: ReactNode, xOffset: number, yOffset: number, z: number, speed?: number }) => {
    const { viewport } = useThree();

    // Calculamos la posición exacta multiplicando el tamaño de la pantalla
    const x = viewport.width * xOffset;
    const y = viewport.height * yOffset;

    return (
        <group position={[x, y, z]}>
            {/* cursor={['grab', 'grabbing']} fuerza a que el navegador muestre la manita cerrada al hacer clic */}
            <PresentationControls snap={true}>
                <Float speed={speed} rotationIntensity={1.5} floatIntensity={2}>
                    {children}
                </Float>
            </PresentationControls>
        </group>
    );
};

export default function ColorfulHero() {
    return (
        <section className="relative min-h-[100dvh] w-full overflow-hidden flex flex-col justify-center bg-[linear-gradient(to_bottom,#ffb5a7_40%,#87CEEB_70%)]">

            {/* TEXTO CENTRAL */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none px-4">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
                    className="text-center"
                >
                    <h1 className="text-[25vw] md:text-[12rem] font-black tracking-tighter text-[#f8edeb] drop-shadow-2xl leading-none">
                        EFREN
                    </h1>
                    <div className="bg-[#fec89a] text-[#d4a373] px-6 py-2 md:px-8 md:py-3 rounded-full inline-block mt-2 md:mt-4 border-4 border-[#f8edeb] shadow-lg transform -rotate-2">
                        <p className="text-xl md:text-3xl font-black uppercase tracking-widest">
                            CREATIVE CODER
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* EL MUNDO 3D */}
            <div className="absolute inset-0 z-20">
                <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
                    <ambientLight intensity={1.5} />
                    <directionalLight position={[10, 10, 5]} intensity={2} />
                    <Environment preset="city" />

                    {/* 🍩 OBJETO 1: Toroide (Arriba - Izquierda) */}
                    <ResponsiveShape xOffset={-0.35} yOffset={0.25} z={0}>
                        {/* Objeto visual */}
                        <mesh>
                            <torusGeometry args={[0.8, 0.3, 16, 100]} />
                            <MeshWobbleMaterial factor={0.5} speed={2} color="#00BFFF" roughness={0.1} />
                        </mesh>
                        {/* Hitbox invisible para arreglar el bug del cursor */}
                        <mesh visible={false}>
                            <torusGeometry args={[1, 0.5, 16, 100]} />
                            <meshBasicMaterial />
                        </mesh>
                    </ResponsiveShape>

                    {/* 🌐 OBJETO 2: Icosaesfera Wireframe (Abajo - Derecha) */}
                    <ResponsiveShape xOffset={0.35} yOffset={-0.25} z={-1} speed={3}>
                        <mesh>
                            <icosahedronGeometry args={[1.2, 0]} />
                            <meshBasicMaterial color="#7B68EE" wireframe={true} wireframeLinewidth={2} />
                        </mesh>
                    </ResponsiveShape>

                    {/* 💊 OBJETO 3: Cápsula (Abajo - Izquierda) */}
                    <ResponsiveShape xOffset={-0.35} yOffset={-0.3} z={-2} speed={1.5}>
                        <mesh rotation={[Math.PI / 4, 0, 0]}>
                            <capsuleGeometry args={[0.4, 0.8, 4, 16]} />
                            <meshStandardMaterial color="#4682B4" roughness={0.2} />
                        </mesh>
                    </ResponsiveShape>

                    {/* 🔮 OBJETO 4: Nudo Toroide de Cristal (Arriba - Derecha) NUEVO */}
                    <ResponsiveShape xOffset={0.450} yOffset={0.3} z={-1} speed={2.5}>
                        <mesh>
                            <torusKnotGeometry args={[0.6, 0.2, 128, 32]} />
                            <MeshTransmissionMaterial
                                thickness={0.25}
                                roughness={0.21}
                                transmission={1}
                                ior={1.5}
                                color="#98FB98"
                            />
                        </mesh>
                    </ResponsiveShape>

                    {/* 💎 OBJETO 5: Diamante/Octaedro Flotante (Centro - Abajo) NUEVO */}
                    <ResponsiveShape xOffset={0} yOffset={-0.35} z={0} speed={1.8}>
                        <mesh>
                            <octahedronGeometry args={[0.7, 0]} />
                            <meshStandardMaterial color="#00FA9A" roughness={0.3} />
                        </mesh>
                    </ResponsiveShape>

                    <ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={25} blur={2.5} color="#d4a373" />
                </Canvas>
            </div>
        </section>
    );
}