"use client";

import { motion } from "framer-motion";

export default function Sanctum() {
    return (
        <section className="relative py-32 px-6 overflow-hidden bg-black/40 backdrop-blur-3xl border-y border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: "circOut" }}
                    className="space-y-8"
                >
                    <div className="inline-block px-3 py-1 border border-gold/20 bg-gold/5 rounded-full">
                        <span className="text-[10px] text-gold uppercase tracking-[0.3em]">Protocol Layer: Sanctum</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight">
                        The Digital <br /> <span className="text-gold">Iron Curtain.</span>
                    </h2>
                    <p className="text-xl text-neutral-400 font-light leading-relaxed max-w-xl">
                        Our codebase is not public; it is privileged. We operate a dual-engine architecture that reconciles
                        hyper-local utility with high-density status signaling.
                    </p>

                    <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                        <div>
                            <h4 className="text-gold text-xs uppercase tracking-widest mb-2">Engine 1</h4>
                            <p className="text-sm text-neutral-500 font-light">Probabilistic Matching for Lifestyle Logistics.</p>
                        </div>
                        <div>
                            <h4 className="text-white text-xs uppercase tracking-widest mb-2">Engine 2</h4>
                            <p className="text-sm text-neutral-500 font-light">Network Flow Trust Graph (v2.4 Kernel).</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="relative aspect-square lg:aspect-video rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center group overflow-hidden shadow-2xl"
                >
                    {/* Animated Matrix Background */}
                    <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

                    <div className="text-center space-y-4 relative z-10">
                        <div className="w-16 h-16 border-2 border-gold/30 rounded-full mx-auto flex items-center justify-center animate-spin-slow">
                            <div className="w-10 h-10 border border-white/20 rounded-full" />
                        </div>
                        <p className="text-[10px] text-neutral-600 uppercase tracking-[0.4em]">Initialize Technical Clearance</p>
                    </div>

                    {/* Decorative Corner Flashes */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-[100px] group-hover:bg-gold/20 transition-all" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 blur-[100px]" />
                </motion.div>
            </div>
        </section>
    );
}
