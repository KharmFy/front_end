
import { LegalPageLayout } from "@/components/institutional/LegalPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Declaração de Acessibilidade - KarmFy",
    description: "Nosso compromisso em tornar o KarmFy acessível para todos.",
};

export default function AccessibilityPage() {
    return (
        <LegalPageLayout title="Declaração de Acessibilidade" lastUpdated="Fevereiro de 2026">
            <section className="mb-12">
                <h2>Compromisso com a Inclusão</h2>
                <p>
                    Acreditamos que conexões reais não devem ter barreiras. O KarmFy está empenhado em garantir acessibilidade digital para pessoas com deficiência. Estamos continuamente melhorando a experiência do usuário para todos e aplicando os padrões de acessibilidade relevantes.
                </p>

                <h3>Status de Conformidade</h3>
                <p>
                    As Diretrizes de Acessibilidade de Conteúdo da Web (WCAG) definem requisitos para designers e desenvolvedores melhorarem a acessibilidade para pessoas com deficiência. O KarmFy está parcialmente em conformidade com o <strong>WCAG 2.1 nível AA</strong>. Parcialmente conforme significa que algumas partes do conteúdo não estão totalmente em conformidade com o padrão de acessibilidade.
                </p>

                <h3>Medidas de Apoio à Acessibilidade</h3>
                <ul>
                    <li>Incluímos acessibilidade como parte de nossa declaração de missão interna.</li>
                    <li>Integramos acessibilidade em nossas práticas de aquisição.</li>
                    <li>Fornecemos treinamento contínuo de acessibilidade para nossa equipe.</li>
                </ul>

                <h3>Feedback</h3>
                <p>
                    Agradecemos seu feedback sobre a acessibilidade do KarmFy. Por favor, nos avise se encontrar barreiras de acessibilidade:
                </p>
                <ul>
                    <li><strong>E-mail:</strong> <a href="mailto:acessibilidade@karmfy.com" className="text-brand-pink underline">acessibilidade@karmfy.com</a></li>
                    <li><strong>Resposta:</strong> Tentamos responder ao feedback dentro de 2 dias úteis.</li>
                </ul>

                <h3>Especificações Técnicas</h3>
                <p>
                    A acessibilidade do KarmFy depende das seguintes tecnologias para funcionar com a combinação específica de navegador da web e quaisquer tecnologias assistivas ou plugins instalados em seu computador:
                </p>
                <ul>
                    <li>HTML</li>
                    <li>WAI-ARIA</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>
            </section>
        </LegalPageLayout>
    );
}
