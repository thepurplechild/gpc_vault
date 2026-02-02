"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GalaxyScene from "@/components/hero/galaxy-scene";
import VideoHero from "@/components/hero/video-hero";
import DeckSlides from "@/components/content/deck-slides";
import WhitepaperTech from "@/components/content/whitepaper-tech";
import WhitepaperFinance from "@/components/content/whitepaper-finance";

export default function Home() {
    const [phase, setPhase] = useState<"intro" | "main">("intro");

    // Prevent scroll jump on phase change
    useEffect(() => {
        if (phase === "main") {
            window.scrollTo(0, 0);
        }
    }, [phase]);

    return (
        <main className="min-h-screen bg-obsidian selection:bg-gold selection:text-black">
            <AnimatePresence mode="wait">
                {phase === "intro" ? (
                    <motion.div
                        key="intro"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        <VideoHero onEnter={() => setPhase("main")} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="main"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="relative"
                    >
                        {/* Background 3D Scene */}
                        <div className="fixed inset-0 z-0">
                            <GalaxyScene />
                        </div>

                        {/* Content Layers */}
                        <div className="relative z-10">
                            {/* Layer 0: Narrative Slide */}
                            <div className="h-screen flex items-center justify-center text-center px-6">
                                <motion.div
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="max-w-4xl"
                                >
                                    <p className="text-gold text-xs tracking-[0.5em] mb-4 uppercase">Verification Protocol</p>
                                    <h2 className="text-5xl md:text-8xl font-serif text-white mb-8">Ascend Beyond the Open Internet.</h2>
                                    <p className="text-xl text-neutral-400 font-light leading-relaxed">
                                        GP Constellation is a private node in the global trust graph. <br />
                                        Exclusivity is not a feature; it is an invariant.
                                    </p>
                                    <div className="mt-12 h-24 w-px bg-gradient-to-b from-gold to-transparent mx-auto animate-bounce" />
                                </motion.div>
                            </div>

                            {/* Layer 1: The Pitch Deck */}
                            <div id="deck" className="bg-obsidian/80 backdrop-blur-xl border-y border-white/5 shadow-[0_0_100px_rgba(0,0,0,0.8)]">
                                <DeckSlides />
                            </div>

                            {/* Layer 2: Deep Data */}
                            <div id="tech" className="bg-obsidian/90">
                                <WhitepaperTech />
                            </div>

                            <div id="finance" className="bg-obsidian/95">
                                <WhitepaperFinance />
                            </div>

                            {/* Footer / Interest Form Placeholder */}
                            <section className="h-screen flex flex-col items-center justify-center text-center bg-black/50 backdrop-blur-md">
                                <h2 className="text-3xl font-serif text-white mb-8">Secure Your Position</h2>
                                <p className="text-neutral-500 mb-12 max-w-md mx-auto">
                                    We are currently throttling admission based on trust density (Vasant Vihar/Lutyens).
                                </p>
                                <button className="px-12 py-5 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-gold hover:text-black transition-colors">
                                    Request Referral
                                </button>
                                <div className="mt-24 text-[10px] text-neutral-700 tracking-[0.3em] uppercase">
                                    &copy; 2026 GP Constellation &bull; Private Market Infrastructure
                                </div>
                            </section>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
