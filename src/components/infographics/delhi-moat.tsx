"use client";

import { motion } from "framer-motion";

const DelhiMoat = () => {
    const locations = [
        { name: "Vasant Vihar", type: "Anchor", x: 30, y: 40 },
        { name: "Lutyens", type: "Anchor", x: 50, y: 30 },
        { name: "Greater Kailash", type: "Node", x: 60, y: 50 },
        { name: "Defence Colony", type: "Node", x: 45, y: 55 },
        { name: "Chanakyapuri", type: "VIP", x: 40, y: 25 },
    ];

    return (
        <div className="relative w-full h-[400px] bg-black/40 rounded-xl border border-white/5 overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />

            {/* Map Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full max-w-lg mx-auto">
                    {locations.map((loc, i) => (
                        <motion.div
                            key={i}
                            className="absolute flex flex-col items-center"
                            style={{ top: `${loc.y}%`, left: `${loc.x}%` }}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: i * 0.2 }}
                        >
                            <div className={`
                            w-3 h-3 rounded-full 
                            ${loc.type === 'Anchor' ? 'bg-gold shadow-[0_0_15px_rgba(212,175,55,0.5)]' :
                                    loc.type === 'VIP' ? 'bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)]' :
                                        'bg-neutral-400'}
                        `} />
                            <span className="mt-2 text-[10px] uppercase tracking-wider text-neutral-400 bg-black/80 px-1 rounded">
                                {loc.name}
                            </span>

                            {/* Connection Lines (Simulated) */}
                            <motion.div
                                className="absolute top-1.5 left-1.5 w-[100px] h-[1px] bg-gradient-to-r from-white/10 to-transparent -z-10 origin-left"
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Stats Overlay */}
            <div className="absolute top-4 left-4 space-y-2">
                <div>
                    <div className="text-[10px] text-neutral-500 uppercase">Density</div>
                    <div className="text-xl font-serif text-gold">High</div>
                </div>
                <div>
                    <div className="text-[10px] text-neutral-500 uppercase">Trust Nodes</div>
                    <div className="text-xl font-serif text-white">50+</div>
                </div>
            </div>
        </div>
    );
};

export default DelhiMoat;
