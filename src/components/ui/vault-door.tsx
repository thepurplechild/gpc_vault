"use client";

import { motion } from "framer-motion";

export function VaultDoor({ progress }: { progress: number }) {
    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-obsidian">
            {/* Left Door */}
            <motion.div
                className="absolute left-0 w-1/2 h-full bg-[#1A1D21] border-r border-[#9F8C5A]/30 z-20 flex items-center justify-end"
                style={{
                    x: `${-progress * 100}%`,
                    boxShadow: "inset -20px 0 50px rgba(0,0,0,0.5)"
                }}
            >
                <div className="w-px h-1/2 bg-gold/10 mr-12" />
                <div className="absolute right-8 w-16 h-16 rounded-full border border-gold/20 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full border border-gold/40 animate-pulse" />
                </div>
            </motion.div>

            {/* Right Door */}
            <motion.div
                className="absolute right-0 w-1/2 h-full bg-[#1A1D21] border-l border-[#9F8C5A]/30 z-20 flex items-center justify-start"
                style={{
                    x: `${progress * 100}%`,
                    boxShadow: "inset 20px 0 50px rgba(0,0,0,0.5)"
                }}
            >
                <div className="w-px h-1/2 bg-gold/10 ml-12" />
                <div className="absolute left-8 w-16 h-16 rounded-full border border-gold/20 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full border border-gold/40 animate-pulse" />
                </div>
            </motion.div>

            {/* Inner Content (The Galaxy) */}
            <div className="absolute inset-0 z-10">
                <div className="absolute inset-0 bg-[#0B0E11]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1 - progress, scale: 1 }}
                        className="space-y-4"
                    >
                        <h2 className="text-gold text-xs tracking-[0.5em] uppercase">Security Protocol Active</h2>
                        <h1 className="text-4xl md:text-6xl font-serif text-white tracking-widest">GP CONSTELLATION</h1>
                        <div className="h-px w-24 bg-gold/50 mx-auto" />
                        <p className="text-neutral-500 text-sm italic">"Trust is the ultimate luxury."</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
