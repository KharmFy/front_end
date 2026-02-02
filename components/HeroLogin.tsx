"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import Image from "next/image";
import { useEffect, useState } from "react";

export function HeroLogin() {
    const [stars, setStars] = useState<Array<{ style: React.CSSProperties, duration: number, delay: number }>>([]);

    useEffect(() => {
        const generatedStars = [...Array(20)].map(() => ({
            style: {
                width: Math.random() * 3 + 1 + "px",
                height: Math.random() * 3 + 1 + "px",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
            },
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 5,
        }));
        setStars(generatedStars);
    }, []);

    return (
        <section className="relative flex items-center min-h-[110vh] px-6 md:px-12 overflow-hidden bg-[#050505]">

            {/* 1. IMMERSIVE BACKGROUND (The "Poster" Effect) */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/hero_cosmic.png"
                    alt="Universo de conexões"
                    fill
                    className="object-cover object-center opacity-70"
                    priority
                />

                {/* 2. CINEMATIC GRADIENT OVERLAY (Centered Focus) */}
                {/* Vignette style: Dark corners, lighter center, dark bottom */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_90%)]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
            </div>

            {/* 3. ATMOSPHERE (Living Mist & Stardust) */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* CRT SCANLINE EFFECT (Overlay) */}
                <div className="absolute inset-0 z-[1] opacity-20 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px]" />

                {/* Floating Nebulas (The "Mist") */}
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-purple/10 rounded-full filter blur-[100px] animate-blob mix-blend-screen" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-orange/10 rounded-full filter blur-[120px] animate-blob animation-delay-4000 mix-blend-screen" />

                {/* STARDUST SYSTEM: Dynamically generated twinkling stars */}
                {stars.map((star, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-white rounded-full mix-blend-overlay"
                        style={star.style}
                        animate={{
                            opacity: [0, 0.5, 0],
                            transform: [`scale(0)`, `scale(1.5)`, `scale(0)`]
                        }}
                        transition={{
                            duration: star.duration,
                            repeat: Infinity,
                            delay: star.delay,
                            ease: "easeInOut"
                        }}
                    />
                ))}

                {/* Shooting Star (More Cosmic & Subtle) */}
                <motion.div
                    className="absolute top-0 right-0 w-[300px] h-[1px] bg-gradient-to-l from-transparent via-white to-transparent opacity-0 rotate-[-45deg]"
                    animate={{
                        top: ["10%", "60%"],
                        right: ["10%", "60%"],
                        opacity: [0, 1, 0],
                        scale: [0.5, 1, 0.5]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 10,
                        ease: "easeInOut"
                    }}
                />
            </div>

            {/* 4. CONTENT (Centered Aligned) */}
            <motion.div
                className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="space-y-8">
                    <motion.div
                        className="space-y-6"
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.span
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="inline-block text-brand-orange font-display tracking-[0.3em] text-[10px] md:text-sm uppercase mb-2 border border-brand-orange/30 px-3 py-1 rounded-full bg-brand-orange/5 backdrop-blur-sm shadow-[0_0_15px_rgba(255,100,0,0.1)]"
                        >
                            Conexões Kármicas
                        </motion.span>
                        <h2 className="text-5xl sm:text-6xl md:text-7xl font-serif font-medium leading-[1.0] md:leading-[1.1] text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                            Reconheça quem <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-pink to-brand-orange animate-gradient-x">
                                a sua alma
                            </span> <br />
                            já conhece.
                        </h2>
                    </motion.div>

                    <motion.p
                        className="text-base md:text-xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto drop-shadow-md px-4"
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Não é coincidência. É sincronia. O KharmFy une pessoas não por algoritmos vazios, mas por afinidade de propósito.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center pt-8 px-4"
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <Button className="bg-white text-black hover:bg-gray-100 font-serif tracking-wide px-8 py-6 text-base shadow-[0_0_20px_rgba(255,255,255,0.1)] rounded-full hover:scale-105 transition-all group relative overflow-hidden">
                            <span className="relative z-10">Iniciar Jornada</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200/50 to-transparent -translate-x-full group-hover:animate-shimmer" />
                        </Button>
                        <Button variant="ghost" className="text-white hover:text-brand-orange border border-white/10 hover:bg-white/5 font-light tracking-wide px-6 py-6 rounded-full backdrop-blur-sm transition-colors duration-300">
                            Entender o Karma
                        </Button>
                    </motion.div>
                </div>
            </motion.div>

            {/* Bottom Fade to White (Transition to next section) */}
            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-transparent to-background z-20" />

            {/* Scroll indicator with Arrow */}
            <motion.div
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{
                    opacity: { delay: 2 },
                    y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
            >
                <span className="font-serif italic text-xs tracking-widest uppercase">Descubra</span>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 opacity-70"
                >
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </motion.div>
        </section>
    );
}
