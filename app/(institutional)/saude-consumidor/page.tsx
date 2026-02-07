import { LegalPageLayout } from "@/components/institutional/LegalPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Política de Dados de Saúde - KarmFy",
    description: "Compromisso KarmFy sobre a não-comercialização do seu bem-estar e dados sensíveis.",
};

export default function HealthDataPage() {
    return (
        <LegalPageLayout title="Dados de Saúde do Consumidor" lastUpdated="Fevereiro de 2026">


            <p className="lead">
                A KarmFy leva a sério a proteção de dados sensíveis. Entendemos que informações de saúde são privadas e não devem ser transformadas em mercadoria publicitária.
            </p>

            <hr className="my-12 border-brand-purple/10" />

            <h2>Definição de Dados de Saúde</h2>
            <p>Consideramos "Dados de Saúde do Consumidor" qualquer informação que possa inferir seu estado físico ou mental, histórico de cirurgias, deficiências ou uso de medicamentos.</p>

            <hr className="my-12 border-brand-purple/10" />

            <h2>Nossos Compromissos</h2>
            <ol>
                <li>
                    <strong>Coleta Mínima Necessária:</strong> Nós <strong>não solicitamos</strong>, rastreamos ou armazenamos seu histórico médico, carteira de vacinação ou dados genéticos.
                </li>
                <li>
                    <strong>Dados Públicos vs. Privados:</strong> Se você optar livremente por mencionar uma condição de saúde em sua Bio ou em conversas de chat, isso é tratado como dado tornado manifesto pelo titular.
                </li>
                <li>
                    <strong>Acessibilidade & Suporte:</strong> Caso você solicite adaptações de acessibilidade no app, esse registro é mantido em absoluto sigilo e restrito à equipe técnica.
                </li>
                <li>
                    <strong>Proibição de Uso Comercial:</strong> É terminantemente proibido o uso de inferências de saúde para precificação dinâmica de assinaturas ou direcionamento de publicidade de terceiros dentro do KarmFy.
                </li>
            </ol>
        </LegalPageLayout>
    );
}
