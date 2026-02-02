"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

function AccordionItem({ question, answer, isOpen, onClick }: AccordionItemProps) {
    return (
        <div className="border-b border-gray-200 dark:border-gray-800 last:border-0">
            <button
                className="w-full py-4 px-2 flex items-center justify-between text-left focus:outline-none group"
                onClick={onClick}
            >
                <span className={cn("font-medium text-lg transition-colors", isOpen ? "text-brand-purple" : "text-gray-700 dark:text-gray-200 group-hover:text-brand-purple")}>
                    {question}
                </span>
                {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-brand-purple" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-brand-purple" />
                )}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 px-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

interface AccordionProps {
    items: { question: string; answer: string }[];
}

export function Accordion({ items }: AccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="w-full border border-gray-200 dark:border-gray-800 rounded-2xl bg-white dark:bg-gray-900 overflow-hidden shadow-sm">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
            ))}
        </div>
    );
}
