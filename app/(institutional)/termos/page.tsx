import { LegalPageLayout } from "@/components/institutional/LegalPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Termos de Uso - KharmFy",
    description: "Contrato de serviço e regras da comunidade KharmFy.",
};

export default function TermsPage() {
    return (
        <LegalPageLayout title="Termos de Uso" lastUpdated="Fevereiro de 2026">


            <p className="lead">
                Bem-vindo ao KharmFy. Ao utilizar nosso serviço, você concorda em fazer parte de uma comunidade baseada em respeito e responsabilidade.
            </p>

            <hr className="my-12 border-brand-purple/10" />

            <h2>1. Aceitação e Elegibilidade</h2>
            <p>O KharmFy não é para todos. Para entrar, você precisa cumprir requisitos estritos:</p>
            <ul>
                <li>Você deve ter <strong>pelo menos 18 anos</strong> completos.</li>
                <li>Você declara, sob pena da lei, que <strong>nunca foi condenado</strong> por crimes sexuais, violência doméstica ou assédio.</li>
            </ul>

            <hr className="my-12 border-brand-purple/10" />

            <h2>2. O Código KharmFy (Regras da Comunidade)</h2>
            <p>Mantemos um padrão elevado de comportamento. Violações resultam em perda de Karma ou banimento imediato:</p>
            <ul>
                <li><strong>Zero Tolerância:</strong> Qualquer forma de assédio, racismo, homofobia ou discurso de ódio resultará em Banimento Permanente e denúncia às autoridades se aplicável.</li>
                <li><strong>Conteúdo Proibido:</strong> Nudez, pornografia ou conteúdo sexualmente explícito não são permitidos em perfis públicos.</li>
                <li><strong>Segurança Financeira:</strong> É estritamente proibido pedir dinheiro, promover esquemas de investimento ou vender produtos.</li>
            </ul>

            <hr className="my-12 border-brand-purple/10" />

            <h2>3. Isenção de Responsabilidade</h2>
            <p>Embora nos esforcemos para manter a segurança:</p>
            <ul>
                <li>A KharmFy conecta pessoas, mas <strong>não controla o comportamento delas fora do app</strong> (offline).</li>
                <li>Você concorda em isentar a KharmFy de responsabilidade por danos resultantes de encontros presenciais.</li>
                <li>Atualmente, a KharmFy <strong>não realiza checagem de antecedentes criminais</strong> em tempo real no Brasil, devido a limitações de dados públicos unificados.</li>
            </ul>

            <hr className="my-12 border-brand-purple/10" />

            <h2>4. Foro</h2>
            <p>Para dirimir quaisquer controvérsias oriundas deste Termo, fica eleito o Foro da Comarca de <strong>São Paulo/SP</strong>, com renúncia expressa a qualquer outro.</p>
        </LegalPageLayout>
    );
}
