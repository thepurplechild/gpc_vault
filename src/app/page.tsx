"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GalaxyScene from "@/components/hero/galaxy-scene";
import VideoHero from "@/components/hero/video-hero";
import DeckSlides from "@/components/content/deck-slides";
import WhitepaperTech from "@/components/content/whitepaper-tech";
import WhitepaperFinance from "@/components/content/whitepaper-finance";
import Sanctum from "@/components/content/sanctum";
import DealDesk from "@/components/dashboard/deal-desk";
import TrustGraphVisual from "@/components/infographics/trust-graph-visual";
import InvestorForm from "@/components/home/investor-form";

export default function Home() {
    const [phase, setPhase] = useState<"intro" | "main">("intro");

    // Smooth scroll restoration logic
    useEffect(() => {
        if (phase === "main") {
            window.scrollTo({ top: 0, behavior: "instant" });
        }
    }, [phase]);

    return (
        <main className="min-h-screen bg-obsidian selection:bg-gold selection:text-black antialiased">
            <AnimatePresence mode="wait">
                {phase === "intro" ? (
                    <motion.div
                        key="intro"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    >
                        <VideoHero onEnter={() => setPhase("main")} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="main"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2.5 }}
                        className="relative"
                    >
                        {/* THE ANTIGRAVITY DEPTH LAYER */}
                        <div className="fixed inset-0 z-0 pointer-events-none">
                            <GalaxyScene />
                        </div>

                        {/* CONTENT OVERLAY */}
                        <div className="relative z-10">
                            {/* Layer 0: The Arrival */}
                            <div className="h-screen flex flex-col items-center justify-center text-center px-6">
                                <motion.div
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 1.5, ease: "circOut" }}
                                    className="max-w-4xl"
                                >
                                    <p className="text-gold text-[10px] tracking-[0.8em] mb-6 uppercase font-sans">Verification Hub // Delhi NCR</p>
                                    <h2 className="text-6xl md:text-9xl font-serif text-white mb-8 tracking-tighter leading-none">
                                        The New <br /> <span className="text-gold italic">Patronage.</span>
                                    </h2>
                                    <div className="h-px w-48 bg-gradient-to-r from-transparent via-gold/30 to-transparent mx-auto my-12" />
                                    <p className="text-xl text-neutral-400 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
                                        A private node in the global trust graph. Designed for the time-poor, trust-rich elite.
                                    </p>
                                    <motion.div
                                        animate={{ y: [0, 20, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                        className="mt-24"
                                    >
                                        <div className="text-[10px] text-neutral-600 uppercase tracking-widest">Scroll to Unlock Vault</div>
                                        <div className="mt-4 w-px h-12 bg-white/20 mx-auto" />
                                    </motion.div>
                                </motion.div>
                            </div>

                            {/* Layer 1: The Memorandum (Deck Slides) */}
                            <div className="bg-black/60 backdrop-blur-3xl border-y border-white/5 relative z-20">
                                <DeckSlides />
                            </div>

                            {/* Layer 2: Network Topology (Visual) */}
                            <div className="py-32 px-6 max-w-5xl mx-auto relative z-20">
                                <div className="text-center mb-16">
                                    <h3 className="text-3xl font-serif text-white mb-4">Trust Topology</h3>
                                    <p className="text-xs text-neutral-500 uppercase tracking-[0.3em]">Mapping 2,400 Nodes of Influence</p>
                                </div>
                                <TrustGraphVisual />
                            </div>

                            {/* Layer 3: The Sanctum (Tech) */}
                            <div className="relative z-20">
                                <Sanctum />
                                <WhitepaperTech />
                            </div>

                            {/* Layer 4: Mission Control (Finance + Live Data) */}
                            <div className="bg-gradient-to-b from-transparent to-black/80 py-32 px-6 relative z-20">
                                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                    <DealDesk />
                                    <div className="space-y-8">
                                        <h3 className="text-4xl md:text-6xl font-serif text-white">Advisory-Aligned <br /> <span className="text-gold">GMV.</span></h3>
                                        <p className="text-xl text-neutral-400 font-light leading-relaxed">
                                            We operate on a relationship cycle, not a transaction window. Our economic model is built for longevity and trust compounding.
                                        </p>
                                    </div>
                                </div>
                                <WhitepaperFinance />
                            </div>

                            {/* Final Layer: The Ledger (Form) */}
                            <div className="relative z-20">
                                <InvestorForm />
                            </div>

                            {/* Sticky Progress Indicators */}
                            <div className="fixed right-10 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
                                {['Intro', 'Deck', 'Tech', 'Finance', 'Join'].map((label, i) => (
                                    <div key={i} className="group flex items-center justify-end gap-3 cursor-pointer">
                                        <span className="text-[8px] uppercase tracking-widest text-neutral-600 group-hover:text-gold transition-colors opacity-0 group-hover:opacity-100">{label}</span>
                                        <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-gold transition-all" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
