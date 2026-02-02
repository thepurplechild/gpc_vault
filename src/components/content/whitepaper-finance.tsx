"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FinancialLedger from "./financial-ledger";

export default function WhitepaperFinance() {
    const [showLedger, setShowLedger] = useState(false);

    return (
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                <div className="order-2 md:order-1 relative">
                    <AnimatePresence>
                        {showLedger && (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="w-full"
                            >
                                <FinancialLedger />
                            </motion.div>
                        )}
                    </AnimatePresence>
                    {!showLedger && (
                        <div className="aspect-video bg-white/5 rounded-lg border border-white/10 flex items-center justify-center grayscale opacity-30">
                            <span className="text-[10px] uppercase tracking-widest">Financial Mainframe Offline</span>
                        </div>
                    )}
                </div>

                <div className="order-1 md:order-2 text-right md:text-left">
                    <h2 className="text-4xl font-serif text-white mb-8">Economic Unit Models</h2>
                    <div className="space-y-6 text-neutral-400 leading-relaxed font-light">
                        <p>
                            GP Constellation monetizes judgment, not just access. Our model combines recurring
                            membership revenue with a 10-15% success fee on high-ticket GMV.
                        </p>
                        <p>
                            With an estimated CAC of ₹950 and 18x LTV/CAC at maturity, the network scales capital-efficiently.
                        </p>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10 flex flex-col items-center md:items-start">
                        {!showLedger ? (
                            <button
                                onClick={() => setShowLedger(true)}
                                className="group relative px-6 py-3 overflow-hidden rounded bg-green-900/20 border border-green-500/30 text-green-400 transition-all hover:bg-green-500 hover:text-black">
                                <span className="relative z-10 text-xs font-bold tracking-widest uppercase">Access Financial Mainframe</span>
                            </button>
                        ) : (
                            <button
                                onClick={() => setShowLedger(false)}
                                className="group relative px-6 py-3 overflow-hidden rounded border border-white/20 text-neutral-400 hover:text-white mb-4">
                                <span className="relative z-10 text-[10px] tracking-widest uppercase">Close Mainframe</span>
                            </button>
                        )}

                        {!showLedger && (
                            <p className="mt-2 text-[10px] text-neutral-600 uppercase tracking-widest">
                                Accredited Investors Only - Series A Data Room
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
