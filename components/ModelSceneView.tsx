"use client"

import { Suspense } from "react"
import { View, Environment, ContactShadows, Float, PresentationControls } from "@react-three/drei"
import Model from "./Model"

interface ModelSceneViewProps {
    modelPath: string
    className?: string
    scale?: number
    position?: [number, number, number]
    animationName?: string
    isPlaying?: boolean
    floatIntensity?: number
    speed?: number
}

export default function ModelSceneView({
                                           modelPath,
                                           className = "w-full h-[400px]",
                                           scale = 1,
                                           position = [0, -1, 0],
                                           animationName,
                                           isPlaying = true,
                                           floatIntensity = 1.5,
                                           speed = 2,
                                       }: ModelSceneViewProps) {

    return (
        // 🔥 Al quitar 'track', <View> crea su propio <div> automáticamente. ¡Mucho más seguro!
        <View className={`${className} relative flex items-center justify-center`}>
            <ambientLight intensity={1.2} />
            <pointLight position={[10, 10, 10]} intensity={1.5} castShadow />
            <Environment preset="city" />


            {/* 🟦 ESFERA AZUL: Esto aparecerá MIENTRAS el archivo .glb se está descargando */}
            <Suspense fallback={
                <mesh position={position}>
                    <sphereGeometry args={[1]} />
                    <meshStandardMaterial color="blue" wireframe />
                </mesh>
            }>
                <PresentationControls
                    global={false}
                    snap={true}
                    rotation={[0, 0, 0]}
                    polar={[-Math.PI / 6, Math.PI / 6]}
                    azimuth={[-Math.PI / 4, Math.PI / 4]}
                >
                    <Float speed={speed} rotationIntensity={0.5} floatIntensity={floatIntensity}>
                        <Model
                            modelPath={modelPath}
                            scale={scale}
                            position={position}
                            animationName={animationName}
                            isPlaying={isPlaying}
                        />
                    </Float>
                </PresentationControls>
            </Suspense>

            <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={6} blur={2} />
        </View>
    )
}