"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float, Stars } from "@react-three/drei";
import * as THREE from "three";

function StarField() {
    const ref = useRef<any>();

    // Use a stable random seed for the stars
    const positions = useMemo(() => {
        const pos = new Float32Array(5000 * 3);
        for (let i = 0; i < 5000; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 100;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 100;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 100;
        }
        return pos;
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#D4AF37"
                    size={0.05}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
}

function ConstellationNodes() {
    const nodes = [
        { pos: [0, 0, 0], color: "#D4AF37", label: "VAULT" },
        { pos: [5, 3, -10], color: "#ffffff", label: "ALPHA" },
        { pos: [-8, -2, -15], color: "#ffffff", label: "SIGNAL" },
        { pos: [12, -5, -20], color: "#D4AF37", label: "CONSTELLATION" },
    ];

    return (
        <group>
            {nodes.map((node, i) => (
                <Float key={i} speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <mesh position={node.pos as any}>
                        <sphereGeometry args={[0.2, 32, 32]} />
                        <meshStandardMaterial
                            color={node.color}
                            emissive={node.color}
                            emissiveIntensity={2}
                        />
                    </mesh>
                </Float>
            ))}
        </group>
    );
}

export default function GalaxyScene() {
    return (
        <div className="absolute inset-0 z-0 bg-[#0B0E11]">
            <Canvas camera={{ position: [0, 0, 20], fov: 60 }}>
                <color attach="background" args={["#0B0E11"]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#D4AF37" />
                <StarField />
                <ConstellationNodes />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            </Canvas>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0E11]/50 to-[#0B0E11]" />
        </div>
    );
}
