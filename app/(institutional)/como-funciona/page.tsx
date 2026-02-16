
import { LegalPageLayout } from "@/components/institutional/LegalPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Como Funciona o KarmFy - Conexões com Propósito",
    description: "Entenda o Sistema de Karma, o fim do swipe e como criamos conexões reais.",
};

export default function HowItWorksPage() {
    return (
        <LegalPageLayout title="Como Funciona" lastUpdated="Fevereiro de 2026">
            <section className="mb-12 space-y-8">
                <div>
                    <h2>O Fim da Era do Swipe</h2>
                    <p>
                        Cansamos da descartabilidade das relações digitais. No <strong>KarmFy</strong>, você não "passa" pessoas. Você navega por um <strong>Mural de Intenções</strong>, onde cada perfil é uma história, não uma foto.
                    </p>
                </div>

                <div>
                    <h2>O Sistema de Karma</h2>
                    <p>
                        Sua reputação é sua moeda mais valiosa. Diferente de outros apps, aqui suas ações têm consequências positivas ou negativas.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-700 dark:text-gray-300">
                        <li><strong>Ganhe Karma:</strong> Sendo gentil, respondendo mensagens, completando seu perfil e recebendo feedbacks positivos.</li>
                        <li><strong>Perca Karma:</strong> Com ghosting, desrespeito ou denúncias confirmadas.</li>
                    </ul>
                    <p className="mt-4">
                        Usuários com <strong>Alto Karma</strong> desbloqueiam eventos exclusivos, têm mais visibilidade e acesso a recursos premium gratuitamente.
                    </p>
                </div>

                <div>
                    <h2>Níveis de Segurança</h2>
                    <p>
                        Para garantir um ambiente livre de fakes e bots, criamos uma jornada de verificação:
                    </p>
                    <ol className="list-decimal pl-6 space-y-2 mt-4 text-gray-700 dark:text-gray-300">
                        <li><strong>Visitante:</strong> Acesso limitado, apenas visualização.</li>
                        <li><strong>Membro Verificado:</strong> Foto e telefone confirmados. Pode interagir.</li>
                        <li><strong>Embaixador:</strong> Identidade validada e alto Karma. Acesso total.</li>
                    </ol>
                </div>

                <div>
                    <h2>Mimos e Quebra-Gelo</h2>
                    <p>
                        Esqueça o "Oi, tudo bem?". Aqui você pode iniciar conexões enviando <strong>Mimos Virtuais</strong> (como um café ou uma flor) que mostram interesse real e generosidade.
                    </p>
                </div>
            </section>
        </LegalPageLayout>
    );
}
