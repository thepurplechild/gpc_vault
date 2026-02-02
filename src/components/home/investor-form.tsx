"use client";

import { motion } from "framer-motion";

export default function InvestorForm() {
    return (
        <section id="investor-form" className="py-32 px-6 relative bg-obsidian border-t border-white/5">
            <div className="max-w-3xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-6xl font-serif text-white">Initialize Ledger Connection</h2>
                    <p className="text-neutral-500 font-light tracking-widest uppercase text-xs">Accredited Investors &bull; Referral Only</p>
                </div>

                <form className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label className="text-[10px] text-neutral-600 uppercase tracking-widest ml-4">Entity/Identity</label>
                            <input
                                type="text"
                                placeholder="Name or Family Office"
                                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-gold/50 transition-all placeholder:text-neutral-700"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] text-neutral-600 uppercase tracking-widest ml-4">Secure Channel</label>
                            <input
                                type="email"
                                placeholder="Email (Encryption Recommended)"
                                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-gold/50 transition-all placeholder:text-neutral-700"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] text-neutral-600 uppercase tracking-widest ml-4">Vetting Context</label>
                        <textarea
                            rows={4}
                            placeholder="Provide referral node or investment thesis..."
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-gold/50 transition-all placeholder:text-neutral-700 resize-none"
                        />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-5 bg-white text-black font-bold uppercase tracking-[0.3em] text-xs rounded-full hover:bg-gold transition-colors"
                    >
                        Submit for Manual Verification
                    </motion.button>
                </form>

                <p className="text-center text-[10px] text-neutral-700 uppercase tracking-widest italic">
                    "Your data is your property. We sell judgment, not your identity."
                </p>
            </div>
        </section>
    );
}
