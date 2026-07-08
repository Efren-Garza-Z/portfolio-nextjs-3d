"use client"

import { useAnimations, useGLTF } from "@react-three/drei"
import { useEffect, useRef } from "react"
import { Group, Mesh, MeshStandardMaterial } from "three"

interface ModelProps {
    modelPath: string
    scale?: number
    position?: [number, number, number]
    animationName?: string
    isAnimated?: boolean
    isPlaying?: boolean
}

export default function Model({
                                  modelPath,
                                  scale = 1,
                                  position = [0, 0, 0],
                                  animationName,
                                  isAnimated = true,
                                  isPlaying = true,
                              }: ModelProps) {
    const group = useRef<Group>(null)
    const { animations, scene } = useGLTF(modelPath)
    const { actions } = useAnimations(animations, scene)

    // Optimización de materiales (Tone mapping y sombras)
    useEffect(() => {
        scene.traverse((child) => {
            if ((child as Mesh).isMesh) {
                const mesh = child as Mesh
                mesh.castShadow = true
                mesh.receiveShadow = true

                const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material]
                materials.forEach((mat) => {
                    const m = mat as MeshStandardMaterial
                    if (m) m.toneMapped = true
                })
            }
        })
    }, [scene])

    // Control dinámico de animaciones
    useEffect(() => {
        if (!isAnimated || Object.keys(actions).length === 0) return

        // Si se pasa un nombre específico, usamos ese; si no, la primera animación disponible
        const targetActionName = animationName || Object.keys(actions)[0]
        const action = actions[targetActionName]

        if (action) {
            if (isPlaying) {
                action.reset().fadeIn(0.4).play()
            } else {
                action.fadeOut(0.4)
            }
        }

        return () => {
            if (action) action.fadeOut(0.4)
        }
    }, [actions, animationName, isPlaying, isAnimated, modelPath])

    return (
        <group ref={group} dispose={null} position={position}>
            <primitive object={scene} scale={scale} />
        </group>
    )
}