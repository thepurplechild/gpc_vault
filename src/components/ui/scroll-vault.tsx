"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { VaultDoor } from "./vault-door";

export default function ScrollVault() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const doorProgress = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
    const contentOpacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);

    return (
        <div ref={containerRef} className="relative h-[200vh] w-full bg-obsidian">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <VaultDoor progress={0} /> {/* Static version for intro if needed */}

                {/* We use a different way to animate the actual vault flow */}
                <div className="absolute inset-0">
                    <VaultDoor progress={doorProgress.get()} />
                    {/* Note: In a real render loop this would be better as state or direct motion prop */}
                </div>
            </div>
        </div>
    );
}
