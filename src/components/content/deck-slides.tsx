"use client";

import { motion } from "framer-motion";
import DelhiMoat from "@/components/infographics/delhi-moat";

const DeckSlides = () => {
    return (
        <section className="w-full bg-obsidian text-white py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 gap-24">

                {/* Header / Intro */}
                <div className="text-center mb-12">
                    <p className="text-gold text-xs uppercase tracking-[0.3em] mb-4">Investment Memorandum &bull; Series A</p>
                    <h2 className="text-5xl md:text-7xl font-serif text-white mb-6">
                        Project Constellation
                    </h2>
                    <p className="text-xl text-neutral-400 font-light max-w-2xl mx-auto">
                        The "Alpha" in the <span className="text-white">Post-Trust Economy</span>. <br />
                        We do not sell inventory. We sell <strong>Credible Judgment</strong>.
                    </p>
                </div>

                {/* 1. The Problem: Trust Deficit */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center border-t border-white/10 pt-12">
                    <div>
                        <h3 className="text-3xl font-serif mb-6"><span className="text-red-500">The Problem:</span><br />High-Stakes Decision Fatigue</h3>
                        <p className="text-neutral-400 leading-relaxed mb-4">
                            The "Open Internet" has failed the High-Net-Worth Individual. Public platforms like Instagram and TripAdvisor are noisy, algorithmic, and insecure.
                        </p>
                        <p className="text-neutral-400 leading-relaxed mb-6">
                            <strong>The Failure Mode:</strong> HNIs no longer trust algorithms for high-stakes decisions. They face a "Trust Deficit" at the moment of commitment.
                        </p>
                        <blockquote className="border-l-2 border-red-500/50 pl-4 italic text-neutral-500 my-6">
                            "Luxury is no longer about access to inventory. It is about access to credible judgment."
                            <span className="block text-xs not-italic mt-2 text-neutral-600">&mdash; Business Plan, Executive Summary</span>
                        </blockquote>
                    </div>
                    <div className="bg-white/5 p-8 rounded-xl border border-white/10">
                        <h4 className="text-xs text-neutral-500 uppercase tracking-widest mb-4">Market Failure Forensics</h4>
                        <ul className="space-y-4">
                            <li className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span>Algorithmic Feeds</span>
                                <span className="text-red-400 text-xs">Maximize Engagement, Not Truth</span>
                            </li>
                            <li className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span>Open Reviews</span>
                                <span className="text-red-400 text-xs">Diluted by Bots & Paid actors</span>
                            </li>
                            <li className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span>Traditional Concierge</span>
                                <span className="text-yellow-400 text-xs">Call-Center-ified (Low Agency)</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* 2. The Solution: Trust-Gated OS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center border-t border-white/10 pt-12">
                    <div className="order-2 md:order-1 bg-gradient-to-br from-gold/5 to-transparent p-8 rounded-xl border border-gold/10">
                        <div className="space-y-6">
                            <div className="p-4 bg-black/40 rounded border border-gold/20">
                                <h5 className="text-gold text-sm font-bold uppercase mb-1">Infrastructure: The Trust Graph</h5>
                                <p className="text-xs text-neutral-400">Scores are earned, risked, and insured. Irreversible penalties for verification failure.</p>
                            </div>
                            <div className="flex justify-center text-gold text-2xl">+</div>
                            <div className="p-4 bg-black/40 rounded border border-white/20">
                                <h5 className="text-white text-sm font-bold uppercase mb-1">Engine: Advisory-Aligned GMV</h5>
                                <p className="text-xs text-neutral-400">We monetize judgment. High-ticket travel drives GMV; Lifestyle drives frequency.</p>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <h3 className="text-3xl font-serif mb-6"><span className="text-green-500">The Solution:</span><br />A Dark Social Ecosystem</h3>
                        <p className="text-neutral-400 leading-relaxed mb-4">
                            GP Constellation is a <strong>Trust-Gated Operating System</strong>. It pivots from "Utility" (finding options) to "Authority" (curating decisions).
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-neutral-400">
                            <li><strong>Access Control:</strong> Dynamic capacity throttled by trust density, not demand.</li>
                            <li><strong>Chained Liability:</strong> If you invite a bad actor, your own Trust Score degrades.</li>
                            <li><strong>Eventized Commerce:</strong> "Monthly Drops" create scarcity and focus attention.</li>
                        </ul>
                    </div>
                </div>

                {/* 3. Strategy: The Delhi Moat */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 border-t border-white/10 pt-12">
                    <div className="lg:col-span-1">
                        <h3 className="text-3xl font-serif mb-6"><span className="text-gold">The Strategy:</span><br />Hyper-Local Dominance</h3>
                        <p className="text-neutral-400 leading-relaxed mb-6">
                            We do not launch "Global". We launch <strong>South Delhi</strong>.
                        </p>
                        <p className="text-neutral-400 leading-relaxed">
                            By capturing the "Legacy Builders" and "New Patrons" in a high-density zone, we build a <strong>Trust Moat</strong> that is socially impossible to fork. 15 years of brand equity (GP World) provides the initial "Trojan Horse".
                        </p>
                    </div>
                    <div className="lg:col-span-2">
                        <DelhiMoat />
                    </div>
                </div>

                {/* 4. Economics */}
                <div className="border-t border-white/10 pt-12 text-center">
                    <h3 className="text-3xl font-serif mb-12">The Business Model</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <div className="p-6 border border-white/10 bg-white/5 rounded-lg">
                            <h4 className="text-sm text-neutral-500 uppercase tracking-widest mb-2">Access Revenue</h4>
                            <div className="text-3xl text-white font-serif mb-2">Recurring</div>
                            <p className="text-xs text-neutral-600">Initiation Fees + Annual Membership. Pays for detailed vetting and Ops.</p>
                        </div>
                        <div className="p-6 border border-white/10 bg-white/5 rounded-lg">
                            <h4 className="text-sm text-neutral-500 uppercase tracking-widest mb-2">GMV Engine</h4>
                            <div className="text-3xl text-gold font-serif mb-2">Travel</div>
                            <p className="text-xs text-neutral-600">High-ticket, complex itineraries. 10-15% Commission or Service Fees.</p>
                        </div>
                        <div className="p-6 border border-white/10 bg-white/5 rounded-lg">
                            <h4 className="text-sm text-neutral-500 uppercase tracking-widest mb-2">Upside</h4>
                            <div className="text-3xl text-green-500 font-serif mb-2">Asset Mgmt</div>
                            <p className="text-xs text-neutral-600">Referral fees for Wealth/Assets (1-2%) led by Trust Data.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default DeckSlides;
