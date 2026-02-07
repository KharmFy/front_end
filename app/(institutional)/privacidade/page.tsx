import { LegalPageLayout } from "@/components/institutional/LegalPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Política de Privacidade - KarmFy",
    description: "Entenda como a KarmFy coleta, usa e protege seus dados pessoais. Transparência radical e conformidade com a LGPD.",
};

export default function PrivacyPage() {
    return (
        <LegalPageLayout title="Política de Privacidade" lastUpdated="Fevereiro de 2026">


            <p className="lead">
                Sua privacidade é inegociável. A KarmFy foi construída sobre os pilares de Transparência Radical e Controle do Usuário. Abaixo, detalhamos exatamente o que sabemos sobre você.
            </p>

            <hr className="my-12 border-brand-purple/10" />

            <h2>1. O que coletamos</h2>
            <p>Para criar conexões reais baseadas em Karma, precisamos de alguns dados essenciais:</p>
            <ul>
                <li><strong>Cadastro Básico:</strong> Nome, data de nascimento (para verificação de idade +18) e e-mail.</li>
                <li><strong>Seu Perfil Público:</strong> Fotos, Bio e suas "Tags de Propósito" (interesses).</li>
                <li><strong>Dados Técnicos:</strong> Endereço IP, modelo do dispositivo e ID de publicidade (usados estritamente para segurança e prevenção de fraudes).</li>
            </ul>

            <hr className="my-12 border-brand-purple/10" />

            <h2>2. Como funcionam as Sugestões (O Algoritmo)</h2>
            <p>Diferente de apps que focam apenas na aparência física, nosso algoritmo de matching prioriza a compatibilidade de valores:</p>
            <ol>
                <li><strong>Proximidade:</strong> Pessoas geograficamente próximas a você.</li>
                <li><strong>Afinidade de Karma:</strong> Conectamos usuários com níveis de reputação similares para garantir comprometimento mútuo.</li>
                <li><strong>Tags de Propósito:</strong> Priorizamos quem busca o mesmo objetivo que você (ex: "Relacionamento Sério" vs "Novas Amizades").</li>
            </ol>

            <hr className="my-12 border-brand-purple/10" />

            <h2>3. Seus Direitos (LGPD)</h2>
            <p>Você está no controle total dos seus dados. A qualquer momento, você pode:</p>
            <ul>
                <li>Solicitar um arquivo completo com tudo que sabemos sobre você (Portabilidade).</li>
                <li>Excluir sua conta permanentemente (Direito ao Esquecimento).</li>
                <li>Revogar permissões de localização ou notificações nas configurações do seu celular.</li>
            </ul>
        </LegalPageLayout>
    );
}
