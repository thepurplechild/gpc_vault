"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TrustArchitecture from "./trust-architecture";

export default function WhitepaperTech() {
    const [showArchitecture, setShowArchitecture] = useState(false);

    return (
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                <div>
                    <h2 className="text-4xl font-serif text-white mb-8">Technical Infrastructure</h2>
                    <div className="space-y-6 text-neutral-400 leading-relaxed font-light">
                        <p>
                            Constellation operates on a dual-engine architecture. Engine 1 handles hyper-local logistics
                            (e.g., "Book the table NEXT to X"), while Engine 2 manages the status-gated social graph.
                        </p>
                        <p>
                            Our "Trust Kernel" (v2.4) utilizes a proprietary network-flow algorithm to calculate
                            dynamic risk bands (T0-T4) based on social proximity and transactional history.
                        </p>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10">
                        {!showArchitecture ? (
                            <button
                                onClick={() => setShowArchitecture(true)}
                                className="group relative px-6 py-3 overflow-hidden rounded bg-white text-black transition-all hover:bg-gold hover:text-black">
                                <span className="relative z-10 text-xs font-bold tracking-widest uppercase">Initialize Clearance (Level 4)</span>
                            </button>
                        ) : (
                            <button
                                onClick={() => setShowArchitecture(false)}
                                className="group relative px-6 py-3 overflow-hidden rounded border border-white/20 text-neutral-400 hover:text-white mb-4">
                                <span className="relative z-10 text-[10px] tracking-widest uppercase">Close Architecture</span>
                            </button>
                        )}

                        {!showArchitecture && (
                            <p className="mt-2 text-[10px] text-neutral-600 uppercase tracking-widest">
                                Developer Application - Clearance Level 4 Required
                            </p>
                        )}
                    </div>
                </div>

                <div className="relative">
                    <AnimatePresence>
                        {showArchitecture && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="w-full"
                            >
                                <TrustArchitecture />
                            </motion.div>
                        )}
                    </AnimatePresence>
                    {!showArchitecture && (
                        <div className="aspect-video bg-white/5 rounded-lg border border-white/10 flex items-center justify-center grayscale opacity-30">
                            <span className="text-[10px] uppercase tracking-widest">Architectural Schematic Locked</span>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
