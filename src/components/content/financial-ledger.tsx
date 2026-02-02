"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const FinancialLedger = () => {
    const [view, setView] = useState<"burn" | "revenue" | "cac">("burn");

    return (
        <div className="bg-black/90 border border-green-900/40 rounded-lg p-6 font-mono text-xs overflow-hidden shadow-[0_0_30px_rgba(0,100,0,0.1)]">

            <div className="flex justify-between items-center mb-6 border-b border-green-900/30 pb-4">
                <div className="flex gap-4">
                    <button
                        onClick={() => setView("burn")}
                        className={`px-3 py-1 rounded transition-colors ${view === "burn" ? "bg-red-900/30 text-red-400 border border-red-500/30" : "text-neutral-500 hover:text-white"}`}>
                        BURN_RATE
                    </button>
                    <button
                        onClick={() => setView("revenue")}
                        className={`px-3 py-1 rounded transition-colors ${view === "revenue" ? "bg-green-900/30 text-green-400 border border-green-500/30" : "text-neutral-500 hover:text-white"}`}>
                        REVENUE_MDL
                    </button>
                    <button
                        onClick={() => setView("cac")}
                        className={`px-3 py-1 rounded transition-colors ${view === "cac" ? "bg-blue-900/30 text-blue-400 border border-blue-500/30" : "text-neutral-500 hover:text-white"}`}>
                        CAC_LTV
                    </button>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-green-500 tracking-widest">LIVE_FEED</span>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-neutral-500 border-b border-white/5">
                            <th className="py-2 pl-2">Item</th>
                            <th className="py-2 text-right">M0 (Launch)</th>
                            <th className="py-2 text-right">M6 (Scale)</th>
                            <th className="py-2 text-right">M12 (Mature)</th>
                            <th className="py-2 pr-2 text-right">Notes</th>
                        </tr>
                    </thead>
                    <tbody className="text-neutral-300">
                        {view === "burn" && (
                            <>
                                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="py-3 pl-2 text-red-300">Total Manpower</td>
                                    <td className="py-3 text-right">₹18.3L</td>
                                    <td className="py-3 text-right">₹24.1L</td>
                                    <td className="py-3 text-right">₹24.4L</td>
                                    <td className="py-3 pr-2 text-right text-neutral-500">Tech + Ops Team</td>
                                </tr>
                                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="py-3 pl-2">Server Infra</td>
                                    <td className="py-3 text-right">₹30k</td>
                                    <td className="py-3 text-right">₹1.13L</td>
                                    <td className="py-3 text-right">₹3.33L</td>
                                    <td className="py-3 pr-2 text-right text-neutral-500">AWS Scale</td>
                                </tr>
                                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="py-3 pl-2">Rent (South Delhi)</td>
                                    <td className="py-3 text-right">₹75k</td>
                                    <td className="py-3 text-right">₹75k</td>
                                    <td className="py-3 text-right">₹75k</td>
                                    <td className="py-3 pr-2 text-right text-neutral-500">Physical HQ</td>
                                </tr>
                                <tr className="bg-red-900/10 font-bold border-t border-red-500/20 mt-2">
                                    <td className="py-3 pl-2 text-red-400">Monthly Burn</td>
                                    <td className="py-3 text-right text-red-400">₹28.3L</td>
                                    <td className="py-3 text-right text-red-400">₹27.5L</td>
                                    <td className="py-3 text-right text-red-400">₹32.7L</td>
                                    <td className="py-3 pr-2 text-right text-neutral-500 font-normal">Includes CapEx amort</td>
                                </tr>
                            </>
                        )}
                        {view === "revenue" && (
                            <>
                                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="py-3 pl-2 text-green-300">Membership (Vault)</td>
                                    <td className="py-3 text-right">-</td>
                                    <td className="py-3 text-right">₹10.8L</td>
                                    <td className="py-3 text-right">₹48L</td>
                                    <td className="py-3 pr-2 text-right text-neutral-500">Recurring</td>
                                </tr>
                                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="py-3 pl-2 text-green-300">Travel GMV Take</td>
                                    <td className="py-3 text-right">-</td>
                                    <td className="py-3 text-right">₹1.5L</td>
                                    <td className="py-3 text-right">₹12.5L</td>
                                    <td className="py-3 pr-2 text-right text-neutral-500">Commission (12%)</td>
                                </tr>
                            </>
                        )}
                        {view === "cac" && (
                            <>
                                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="py-3 pl-2 text-blue-300">Est. CAC (Gold)</td>
                                    <td className="py-3 text-right">₹800</td>
                                    <td className="py-3 text-right">₹1200</td>
                                    <td className="py-3 text-right">₹950</td>
                                    <td className="py-3 pr-2 text-right text-neutral-500">Direct Invite</td>
                                </tr>
                                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="py-3 pl-2 text-blue-300">LTV / CAC</td>
                                    <td className="py-3 text-right">-</td>
                                    <td className="py-3 text-right">12x</td>
                                    <td className="py-3 text-right">18x</td>
                                    <td className="py-3 pr-2 text-right text-neutral-500">High Stickiness</td>
                                </tr>
                            </>
                        )}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-between mt-4 text-[10px] text-neutral-600 border-t border-white/5 pt-2">
                <span>SOURCE: Himanshu_Sheet_2026_v4.xlsx</span>
                <span>ID: FIN-8829-X</span>
            </div>
        </div>
    );
};

export default FinancialLedger;
