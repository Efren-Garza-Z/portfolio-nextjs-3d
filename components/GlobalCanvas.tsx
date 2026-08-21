"use client"

import { Canvas } from "@react-three/fiber"
import { View, Preload } from "@react-three/drei"
import { RefObject } from "react"

interface GlobalCanvasProps {
    eventSource: RefObject<HTMLElement | null>
}

export default function GlobalCanvas({ eventSource }: GlobalCanvasProps) {
    return (
        <Canvas
            eventSource={eventSource as RefObject<HTMLElement>}
            // 🔥 Usamos style inline para forzar que el Canvas cubra toda la pantalla por encima de TODO
            style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 999 }}
            shadows
            camera={{ position: [0, 0, 5], fov: 45 }}
        >
            <View.Port />
            <Preload all />
        </Canvas>
    )
}