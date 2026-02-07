import { LegalPageLayout } from "@/components/institutional/LegalPageLayout";
import { Accordion } from "@/components/ui/Accordion";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Perguntas Frequentes (FAQ) - KarmFy",
    description: "Tire suas dúvidas sobre Karma, Planos e Segurança no KarmFy.",
};

const faqItems = [
    {
        question: "O que é o Karma?",
        answer: "É sua reputação. Ele sobe com feedback positivo de outros usuários (Ex: 'Pontual', 'Respeitoso') e desce com denúncias ou ghosting."
    },
    {
        question: "É gratuito?",
        answer: "Sim! O plano básico permite conexões ilimitadas."
    },
    {
        question: "Como verifico minha conta?",
        answer: "Vá em Perfil > Verificação. Você precisará enviar uma foto do documento (CNH/RG) e fazer uma selfie de vídeo rápida."
    },
    {
        question: "Posso excluir minha conta?",
        answer: "Sim. Vá em Configurações > Privacidade > Excluir Conta. Seus dados são apagados definitivamente em até 30 dias."
    }
];

export default function FAQPage() {
    return (
        <LegalPageLayout title="Perguntas Frequentes" lastUpdated="Fevereiro de 2026">


            <div className="not-prose mt-8">
                <Accordion items={faqItems} />
            </div>

            <p className="mt-8 text-center text-gray-500 text-sm">
                Não encontrou sua dúvida? <a href="/contato">Fale com o suporte.</a>
            </p>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqItems.map(item => ({
                            "@type": "Question",
                            "name": item.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": item.answer
                            }
                        }))
                    })
                }}
            />
        </LegalPageLayout>
    );
}
