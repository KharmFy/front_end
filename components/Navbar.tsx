"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { LogIn } from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
    const pathname = usePathname();
    const isHome = pathname === "/";

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-white/50 dark:bg-black/20"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ delay: isHome ? 2.8 : 0, duration: 0.8, type: "spring" }} // Delay only on Home (SplashScreen)
        >
            <Link
                href="/"
                className="text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-purple hover:opacity-80 transition-opacity"
            >
                KarmFy
            </Link>
            <div>
                <Button
                    size="sm"
                    className="relative group overflow-hidden border-none text-white shadow-[0_0_20px_rgba(247,44,152,0.3)] hover:shadow-[0_0_30px_rgba(247,44,152,0.6)] rounded-full px-6 transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-orange via-brand-pink to-brand-purple opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10 flex items-center gap-2 font-medium tracking-wide">
                        Entrar
                        <LogIn className="w-4 h-4 ml-1 opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </span>
                    {/* Shine Effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent z-20" />
                </Button>
            </div>
        </motion.nav>
    );
}
