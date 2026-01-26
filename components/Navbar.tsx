"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";

export function Navbar() {
    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-white/50 dark:bg-black/20"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ delay: 2.8, duration: 0.8, type: "spring" }} // Delays until Splash ends
        >
            <div className="text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-purple">
                KharmFy
            </div>
            <div>
                <Button size="sm" variant="outline">
                    Entrar
                </Button>
            </div>
        </motion.nav>
    );
}
