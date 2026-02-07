import { LegalPageLayout } from "@/components/institutional/LegalPageLayout";
import { Metadata } from "next";
import { ShieldAlert, MapPin, Heart, AlertTriangle, MessageCircle, Navigation, Phone, Globe, Shield } from "lucide-react";

export const metadata: Metadata = {
    title: "Dicas de Segurança - KarmFy",
    description: "Guia essencial para se manter seguro online e nos encontros presenciais.",
};

export default function SafetyPage() {
    return (
        <LegalPageLayout title="Guia de Segurança" lastUpdated="Fevereiro de 2026">


            <div className="not-prose grid gap-8">
                {/* Red Flags Section */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <ShieldAlert className="w-8 h-8 text-brand-coral" />
                        <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white">Red Flags Online</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-2xl bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 hover:shadow-lg transition-shadow">
                            <div className="mb-4 w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-500 font-bold text-xl">$</div>
                            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Pediu Dinheiro?</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">"Emergência médica", "Problema no visto" ou "Conta bloqueada". É 100% GOLPE. Denuncie.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/20 hover:shadow-lg transition-shadow">
                            <MessageCircle className="w-10 h-10 text-orange-500 mb-4" />
                            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Pressão pra Sair</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">"O app trava, vamos pro Zap?". Golpistas querem te tirar da nossa proteção para evitar rastreamento.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-pink-50 dark:bg-pink-900/10 border border-pink-100 dark:border-pink-900/20 hover:shadow-lg transition-shadow">
                            <Heart className="w-10 h-10 text-pink-500 mb-4" />
                            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Love Bombing</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Declarações de amor eterno em 2 dias? Cuidado. Manipuladores usam intensidade para baixar sua guarda.</p>
                        </div>
                    </div>
                </section>

                {/* IRL Safety Section */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <MapPin className="w-8 h-8 text-brand-purple" />
                        <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white">No Encontro (IRL)</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="flex flex-col gap-4 p-6 bg-gray-50 dark:bg-zinc-800/50 rounded-2xl border border-gray-100 dark:border-zinc-700">
                            <div className="flex items-center gap-3 font-bold text-brand-purple">
                                <Globe className="w-5 h-5" /> Público Sempre
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Shoppings, cafés movimentados. Nunca casa ou hotel no primeiro date.</p>
                        </div>
                        <div className="flex flex-col gap-4 p-6 bg-gray-50 dark:bg-zinc-800/50 rounded-2xl border border-gray-100 dark:border-zinc-700">
                            <div className="flex items-center gap-3 font-bold text-brand-purple">
                                <Navigation className="w-5 h-5" /> Rastreamento
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Mande sua localização em tempo real para um amigo de confiança.</p>
                        </div>
                        <div className="flex flex-col gap-4 p-6 bg-gray-50 dark:bg-zinc-800/50 rounded-2xl border border-gray-100 dark:border-zinc-700">
                            <div className="flex items-center gap-3 font-bold text-brand-purple">
                                <AlertTriangle className="w-5 h-5" /> Instinto
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Se algo parecer estranho, vá embora. Não seja educado(a) às custas da sua segurança.</p>
                        </div>
                    </div>
                </section>

                {/* Resources Section */}
                <section className="mt-8">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Phone className="w-6 h-6 text-green-600" />
                        Recursos de Apoio (Brasil)
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <a href="tel:190" className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 hover:border-brand-purple hover:shadow-md transition-all group">
                            <div className="bg-gray-100 dark:bg-zinc-800 p-2 rounded-lg group-hover:bg-brand-purple group-hover:text-white transition-colors font-bold">190</div>
                            <span className="font-medium text-sm">Polícia Militar</span>
                        </a>
                        <a href="tel:188" className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 hover:border-brand-purple hover:shadow-md transition-all group">
                            <div className="bg-gray-100 dark:bg-zinc-800 p-2 rounded-lg group-hover:bg-brand-purple group-hover:text-white transition-colors font-bold">188</div>
                            <span className="font-medium text-sm">CVV (Apoio)</span>
                        </a>
                        <a href="tel:180" className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 hover:border-brand-purple hover:shadow-md transition-all group">
                            <div className="bg-gray-100 dark:bg-zinc-800 p-2 rounded-lg group-hover:bg-brand-purple group-hover:text-white transition-colors font-bold">180</div>
                            <span className="font-medium text-sm">Mulher</span>
                        </a>
                        <a href="https://new.safernet.org.br/denuncie" target="_blank" className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 hover:border-brand-purple hover:shadow-md transition-all group">
                            <div className="bg-gray-100 dark:bg-zinc-800 p-2 rounded-lg group-hover:bg-brand-purple group-hover:text-white transition-colors font-bold">WWW</div>
                            <span className="font-medium text-sm">SaferNet</span>
                        </a>
                    </div>
                </section>
            </div>

        </LegalPageLayout>
    );
}
