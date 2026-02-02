"use client";

import { motion } from "framer-motion";

const NODES = [
    { id: 1, x: 20, y: 30, size: 4, type: 'vault' },
    { id: 2, x: 40, y: 15, size: 2, type: 'signal' },
    { id: 3, x: 60, y: 40, size: 6, type: 'vault' },
    { id: 4, x: 30, y: 70, size: 3, type: 'alpha' },
    { id: 5, x: 75, y: 65, size: 2, type: 'signal' },
    { id: 6, x: 50, y: 50, size: 8, type: 'core' },
];

export default function TrustGraphVisual() {
    return (
        <div className="relative w-full aspect-video bg-black/20 rounded-3xl border border-white/5 overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.05),transparent)] opacity-50" />

            <svg className="w-full h-full p-8 overflow-visible">
                {/* Connections */}
                <motion.path
                    d="M 50% 50% L 20% 30% M 50% 50% L 60% 40% M 50% 50% L 30% 70%"
                    stroke="rgba(212,175,55,0.1)"
                    strokeWidth="0.5"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />

                {/* Animated Nodes */}
                {NODES.map((node, i) => (
                    <motion.circle
                        key={node.id}
                        cx={`${node.x}%`}
                        cy={`${node.y}%`}
                        r={node.size}
                        fill={node.type === 'vault' ? '#D4AF37' : node.type === 'core' ? '#ffffff' : '#444'}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                    />
                ))}
            </svg>

            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center"
                >
                    <div className="text-[10px] text-gold uppercase tracking-[0.5em] mb-2">Network Topology</div>
                    <div className="text-4xl font-serif text-white opacity-20 group-hover:opacity-100 transition-opacity">TRUST_GRAPH_V2</div>
                </motion.div>
            </div>

            {/* Dynamic Data Blobs */}
            <div className="absolute top-4 right-4 text-right">
                <div className="text-[8px] text-neutral-700 tracking-tighter uppercase">Active Connections</div>
                <div className="text-xl font-mono text-white/40 tracking-widest">1,402.22</div>
            </div>
        </div>
    );
}
