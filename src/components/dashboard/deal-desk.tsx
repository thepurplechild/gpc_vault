"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DEALS = [
    { id: 1, item: "Patek Philippe 5711/1A", location: "Dubai Node", status: "VERIFIED", price: "$124,000" },
    { id: 2, item: "Villa Amanpuri", location: "Phuket Node", status: "PENDING", price: "$45,000/wk" },
    { id: 3, item: "Gulfstream G650ER", location: "London Node", status: "NEGOTIATING", price: "$65M" },
    { id: 4, item: "Hermès Birkin 30", location: "Paris Node", status: "VERIFIED", price: "$28,500" },
];

export default function DealDesk() {
    const [activeDeals, setActiveDeals] = useState(DEALS.slice(0, 3));

    useEffect(() => {
        const interval = setInterval(() => {
            const randomDeal = DEALS[Math.floor(Math.random() * DEALS.length)];
            setActiveDeals(prev => [randomDeal, ...prev.slice(0, 2)]);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-black/80 border border-white/10 rounded-xl p-8 backdrop-blur-xl shadow-2xl">
            <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                <h3 className="text-xl font-serif text-white tracking-widest uppercase">Global Deal Desk</h3>
                <div className="flex items-center gap-4">
                    <span className="flex items-center gap-2 text-[10px] text-green-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        LIVE_NODE_SYNC
                    </span>
                </div>
            </div>

            <div className="space-y-4">
                <AnimatePresence mode="popLayout">
                    {activeDeals.map((deal, idx) => (
                        <motion.div
                            key={`${deal.id}-${idx}`}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="grid grid-cols-4 gap-4 p-4 rounded-lg bg-white/5 border border-white/5 hover:border-gold/30 transition-all group"
                        >
                            <div className="col-span-2">
                                <div className="text-[10px] text-neutral-600 uppercase mb-1">Asset Class</div>
                                <div className="text-sm text-white font-medium group-hover:text-gold transition-colors">{deal.item}</div>
                            </div>
                            <div>
                                <div className="text-[10px] text-neutral-600 uppercase mb-1">Origin</div>
                                <div className="text-xs text-neutral-400">{deal.location}</div>
                            </div>
                            <div className="text-right">
                                <div className="text-[10px] text-neutral-600 uppercase mb-1">Valuation</div>
                                <div className="text-xs text-green-400 font-mono">{deal.price}</div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <div className="mt-8 flex justify-center">
                <div className="text-[10px] text-neutral-700 tracking-[0.5em] uppercase">Throttling Admission: 94% Capacity</div>
            </div>
        </div>
    );
}
