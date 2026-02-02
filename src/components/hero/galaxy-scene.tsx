"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float, Stars, Sphere } from "@react-three/drei";
import * as THREE from "three";
import { useMousePosition } from "@/lib/hooks/use-mouse-position";

function StarField() {
    const ref = useRef<any>();
    const { x, y } = useMousePosition();

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
            ref.current.rotation.x += delta / 20;
            ref.current.rotation.y += delta / 25;

            // Antigravity: Slight mouse follow
            ref.current.rotation.x += y.get() * 0.02;
            ref.current.rotation.y += x.get() * 0.02;
        }
    });

    return (
        <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#D4AF37"
                size={0.06}
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                opacity={0.4}
            />
        </Points>
    );
}

function FloatingNodes() {
    const { x, y } = useMousePosition();
    const groupRef = useRef<THREE.Group>(null);

    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.position.x = x.get() * 2;
            groupRef.current.position.y = -y.get() * 2;
        }
    });

    const nodes = [
        { pos: [0, 2, -5], color: "#D4AF37", label: "VAULT" },
        { pos: [8, -4, -12], color: "#ffffff", label: "ALPHA" },
        { pos: [-10, 0, -15], color: "#ffffff", label: "SIGNAL" },
        { pos: [5, 6, -20], color: "#D4AF37", label: "CORE" },
    ];

    return (
        <group ref={groupRef}>
            {nodes.map((node, i) => (
                <Float key={i} speed={2} rotationIntensity={1} floatIntensity={1}>
                    <mesh position={node.pos as any}>
                        <sphereGeometry args={[0.15, 32, 32]} />
                        <meshStandardMaterial
                            color={node.color}
                            emissive={node.color}
                            emissiveIntensity={3}
                            toneMapped={false}
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
            <Canvas camera={{ position: [0, 0, 15], fov: 60 }} gl={{ antialias: true, alpha: true }}>
                <color attach="background" args={["#0B0E11"]} />
                <ambientLight intensity={0.4} />
                <pointLight position={[10, 10, 10]} intensity={2} color="#D4AF37" />
                <StarField />
                <FloatingNodes />
                <Stars radius={150} depth={50} count={3000} factor={10} saturation={0} fade speed={0.5} />
            </Canvas>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0E11]/40 to-[#0B0E11]" />
        </div>
    );
}
