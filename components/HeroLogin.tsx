"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";

export function HeroLogin() {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden pt-20">
            {/* Background Blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-purple rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
                <div className="absolute -bottom-32 left-20 w-[500px] h-[500px] bg-brand-pink rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
            </div>

            <motion.div
                className="relative z-10 w-full max-w-4xl grid md:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                {/* Left Column: Copy */}
                <div className="text-center md:text-left space-y-6">
                    <motion.h2
                        className="text-4xl md:text-6xl font-display font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-br from-brand-purple to-brand-orange"
                    >
                        Chega de Swipes. <br />
                        <span className="text-foreground">Conecte-se com Propósito.</span>
                    </motion.h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 md:text-xl font-light">
                        KharmFy valoriza quem você é. Construa seu Karma, suba de nível e encontre pessoas que buscam o mesmo que você.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Button size="lg">
                            Começar Agora
                        </Button>
                        <Button variant="outline" size="lg">
                            Saber Mais
                        </Button>
                    </div>
                </div>

                {/* Right Column: Fake Login Card */}
                <motion.div
                    className="bg-white/40 dark:bg-black/40 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="space-y-4">
                        <div className="text-center mb-6">
                            <h3 className="text-xl font-bold font-display">Acesse sua conta</h3>
                            <p className="text-sm text-gray-500">Entre para verificar seu nível.</p>
                        </div>
                        <div className="space-y-2">
                            <input
                                type="email"
                                placeholder="Seu email"
                                className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/50 border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-brand-purple outline-none transition-all"
                            />
                            <input
                                type="password"
                                placeholder="Sua senha"
                                className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/50 border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-brand-purple outline-none transition-all"
                            />
                        </div>
                        <Button className="w-full shadow-lg shadow-brand-purple/20">
                            Entrar
                        </Button>
                        <div className="text-center text-xs text-gray-500 mt-4">
                            Ainda não tem conta? <a href="#" className="text-brand-pink font-bold hover:underline">Cadastre-se</a>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-purple/50 animate-bounce"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14" /><path d="m19 12-7 7-7-7" /></svg>
            </motion.div>
        </section>
    );
}
