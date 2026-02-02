"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TrustArchitecture = () => {
    const [activeTier, setActiveTier] = useState<string>("T4");

    const tiers = [
        {
            id: "T4",
            label: "Anchor Node",
            score: "950+",
            color: "text-gold",
            borderColor: "border-gold",
            bg: "bg-gold/10",
            permissions: [
                "Sponsor Alpha Black Entries",
                "Unlimited Waitlist Bypasses",
                "Participate in Governance Votes",
                "Direct Access to Founders"
            ]
        },
        {
            id: "T3",
            label: "Highly Trusted",
            score: "800-949",
            color: "text-white",
            borderColor: "border-white",
            bg: "bg-white/10",
            permissions: [
                "Invite 3 Members/Quarter",
                "Access High-Risk Categories (Art, Jets)",
                "Priority Concierge Routing"
            ]
        },
        {
            id: "T2",
            label: "Trusted (Vault Core)",
            score: "700-799",
            color: "text-neutral-300",
            borderColor: "border-neutral-500",
            bg: "bg-neutral-500/10",
            permissions: [
                "Invite 1 Member/Quarter",
                "Transact in Mid-Risk Categories",
                "View 'Hidden' Ghost Inventory"
            ]
        },
        {
            id: "T1",
            label: "Emerging / Probation",
            score: "600-699",
            color: "text-neutral-500",
            borderColor: "border-neutral-700",
            bg: "bg-neutral-800/30",
            permissions: [
                "Read-Only Access to Vault",
                "Transact Low-Risk (F&B) Only",
                "Cannot Issue Invites"
            ]
        },
        {
            id: "T0",
            label: "Observer",
            score: "<600",
            color: "text-red-500",
            borderColor: "border-red-900",
            bg: "bg-red-900/10",
            permissions: [
                "Signal Ingestion Only",
                "No Transaction Rights",
                "Quarantine State"
            ]
        }
    ];

    return (
        <div className="bg-black/80 rounded-lg border border-white/10 p-6 max-w-4xl mx-auto backdrop-blur-sm">
            <h3 className="text-xl font-serif text-white mb-6 border-b border-white/10 pb-4">
                Trust Kernel v2.4
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Visual Pyramid / List */}
                <div className="space-y-2">
                    {tiers.map((tier) => (
                        <motion.div
                            key={tier.id}
                            onClick={() => setActiveTier(tier.id)}
                            className={`relative p-4 border ${activeTier === tier.id ? `${tier.borderColor} ${tier.bg}` : "border-white/5 bg-white/5"} 
                            rounded-lg cursor-pointer transition-all hover:bg-white/10 flex justify-between items-center group`}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="flex items-center gap-4">
                                <span className={`font-mono text-xl font-bold ${tier.color}`}>{tier.id}</span>
                                <div>
                                    <div className="text-white font-serif text-sm">{tier.label}</div>
                                    <div className="text-[10px] text-neutral-500 uppercase tracking-wider">Score: {tier.score}</div>
                                </div>
                            </div>
                            {activeTier === tier.id && (
                                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Details Panel */}
                <div className="relative min-h-[300px] border-l border-white/10 pl-8 flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                        {activeTier && (
                            <motion.div
                                key={activeTier}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h4 className={`text-3xl font-serif mb-4 ${tiers.find(t => t.id === activeTier)?.color}`}>
                                    {tiers.find(t => t.id === activeTier)?.label}
                                </h4>
                                <ul className="space-y-3">
                                    {tiers.find(t => t.id === activeTier)?.permissions.map((perm, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-neutral-300">
                                            <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                                            {perm}
                                        </li>
                                    ))}
                                </ul>

                                {/* Algorithmic Context */}
                                <div className="mt-8 pt-6 border-t border-white/10">
                                    <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-2">Algorithm V1 Logic</div>
                                    <p className="text-xs text-neutral-400 leading-relaxed italic">
                                        "{activeTier === "T4" ? "Anchors stabilize the network. Strict liability applies." :
                                            activeTier === "T0" ? "Quarantine state. Signal ingestion only." :
                                                "Trust reduces verification friction, not risk."}"
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default TrustArchitecture;
