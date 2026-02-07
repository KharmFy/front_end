"use client";

import { LegalPageLayout } from "@/components/institutional/LegalPageLayout";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Mail, Shield, AlertTriangle } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState("submitting");
        // Simulate API call
        setTimeout(() => {
            setFormState("success");
        }, 1500);
    };

    return (
        <LegalPageLayout title="Contato" lastUpdated="Fevereiro de 2026">
            <section className="mb-12 not-prose grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-brand-orange/10 rounded-xl border border-brand-orange/20">
                    <Mail className="w-8 h-8 text-brand-orange mb-4" />
                    <h3 className="text-lg font-bold mb-2">Suporte Geral</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Dúvidas sobre conta, app ou planos.</p>
                    <a href="mailto:suporte@karmfy.com" className="text-brand-orange font-medium hover:underline">suporte@karmfy.com</a>
                </div>
                <div className="p-6 bg-brand-purple/10 rounded-xl border border-brand-purple/20">
                    <Shield className="w-8 h-8 text-brand-purple mb-4" />
                    <h3 className="text-lg font-bold mb-2">Central de Segurança</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Denúncias graves e questões legais.</p>
                    <a href="mailto:seguranca@karmfy.com" className="text-brand-purple font-medium hover:underline">seguranca@karmfy.com</a>
                </div>
                <div className="p-6 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-900/30">
                    <AlertTriangle className="w-8 h-8 text-blue-500 mb-4" />
                    <h3 className="text-lg font-bold mb-2">Imprensa & Dados</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Para jornalistas e DPO.</p>
                    <a href="mailto:press@karmfy.com" className="text-blue-500 font-medium hover:underline">press@karmfy.com</a>
                </div>
            </section>

            <section className="not-prose bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                <h3 className="text-2xl font-bold mb-6">Envie uma mensagem</h3>

                {formState === "success" ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12"
                    >
                        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">✓</div>
                        <h4 className="text-xl font-bold mb-2">Mensagem Recebida!</h4>
                        <p className="text-gray-500">Nossa equipe retornará em até 24 horas.</p>
                        <button
                            onClick={() => setFormState("idle")}
                            className="mt-6 text-brand-purple font-medium hover:underline"
                        >
                            Enviar outra mensagem
                        </button>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">Nome</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-brand-purple outline-none transition-all"
                                    placeholder="Seu nome"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">E-mail</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-brand-purple outline-none transition-all"
                                    placeholder="seu@email.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Assunto</label>
                            <select className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-brand-purple outline-none transition-all">
                                <option>Suporte Geral</option>
                                <option>Denúncia</option>
                                <option>Feedback</option>
                                <option>Outros</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Mensagem</label>
                            <textarea
                                required
                                rows={5}
                                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-brand-purple outline-none transition-all resize-none"
                                placeholder="Como podemos ajudar?"
                            />
                        </div>

                        <Button
                            type="submit"
                            variant="primary"
                            className="w-full md:w-auto px-8"
                            disabled={formState === "submitting"}
                        >
                            {formState === "submitting" ? "Enviando..." : "Enviar Mensagem"}
                        </Button>
                    </form>
                )}
            </section>
        </LegalPageLayout>
    );
}
