"use client";

import { motion } from "framer-motion";
import { XCircle, Star, ShieldCheck, Heart } from "lucide-react";

const features = [
    {
        icon: XCircle,
        color: "text-brand-orange",
        title: "Sem Swipe",
        description: "Fim do julgamento superficial. Na KharmFy, você navega por um Mural de Intenções e decide com calma, analisando perfis completos.",
    },
    {
        icon: Star,
        color: "text-brand-pink",
        title: "Sistema de Karma",
        description: "Sua reputação importa. Feedbacks positivos aumentam seu nível e visibilidade. Comportamentos tóxicos te isolam.",
    },
    {
        icon: ShieldCheck,
        color: "text-brand-purple",
        title: "5 Níveis de Segurança",
        description: "Evolua de Visitante a Embaixador. Cada nível desbloqueia privilégios exclusivos e garante um ambiente livre de bots.",
    },
    {
        icon: Heart,
        color: "text-brand-coral",
        title: "Mimos & Economia",
        description: "Quebre o gelo enviando Mimos virtuais que valem benefícios. Generosidade é a melhor forma de começar uma conversa.",
    },
];

export function ValueProps() {
    return (
        <section className="py-24 px-6 md:px-12 bg-white dark:bg-black relative z-10" id="sobre">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-display font-bold">
                        Por que a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-pink">KharmFy</span> é diferente?
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                        Estamos redefinindo as conexões online. Menos quantidade, mais qualidade e respeito.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            className="p-6 rounded-2xl bg-gray-50 dark:bg-zinc-900 border border-transparent hover:border-brand-purple/20 transition-all hover:shadow-xl hover:-translate-y-1"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                        >
                            <feature.icon className={`w-12 h-12 mb-6 ${feature.color}`} />
                            <h3 className="text-xl font-bold mb-3 font-display">{feature.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
