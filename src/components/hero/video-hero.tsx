"use client";

import { motion } from "framer-motion";

export default function VideoHero({ onEnter }: { onEnter: () => void }) {
    return (
        <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
            {/* Background Video Placeholder (using black for now, user can add mp4) */}
            <div className="absolute inset-0 bg-[#0B0E11]">
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
            </div>

            <div className="relative z-10 text-center space-y-8 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <p className="text-gold text-xs tracking-[0.5em] mb-4 uppercase font-sans">Initialize Clearance</p>
                    <h1 className="text-5xl md:text-8xl font-serif text-white tracking-tighter mb-2">
                        GP <span className="text-gold">CONSTELLATION</span>
                    </h1>
                    <p className="text-neutral-500 text-sm md:text-base font-light tracking-widest uppercase">
                        Private Market Infrastructure &bull; Delhi NCR
                    </p>
                </motion.div>

                <motion.button
                    onClick={onEnter}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="group relative px-8 py-4 bg-transparent border border-gold/30 text-gold text-xs tracking-[0.3em] uppercase transition-all hover:bg-gold hover:text-black hover:border-gold"
                >
                    <span className="relative z-10">Ascend to Layer 0</span>
                    <div className="absolute inset-x-0 -bottom-1 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </motion.button>
            </div>

            {/* Decorative Corners */}
            <div className="absolute top-10 left-10 w-24 h-24 border-t border-l border-gold/10" />
            <div className="absolute top-10 right-10 w-24 h-24 border-t border-r border-gold/10" />
            <div className="absolute bottom-10 left-10 w-24 h-24 border-b border-l border-gold/10" />
            <div className="absolute bottom-10 right-10 w-24 h-24 border-b border-r border-gold/10" />
        </div>
    );
}
