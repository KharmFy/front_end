import { LegalPageLayout } from "@/components/institutional/LegalPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Propriedade Intelectual e Acessibilidade - KharmFy",
    description: "Direitos autorais e nosso compromisso com a inclusão.",
};

export default function PropertyPage() {
    return (
        <LegalPageLayout title="Propriedade & Acessibilidade" lastUpdated="Fevereiro de 2026">

            <section className="mb-12">
                <h2>Propriedade Intelectual</h2>


                <ul>
                    <li><strong>Licença:</strong> Ao postar conteúdo, você concede à KharmFy uma licença mundial e não exclusiva para exibir esse conteúdo no serviço.</li>
                    <li><strong>Marca:</strong> É proibido copiar a identidade visual, logo ou o nome "KharmFy" sem autorização.</li>
                    <li><strong>Seu Conteúdo:</strong> Você mantém a propriedade total das fotos e textos que cria.</li>
                </ul>
            </section>

            <section>
                <h2>Declaração de Acessibilidade</h2>


                <ul>
                    <li><strong>Compromisso:</strong> Seguimos as diretrizes WCAG 2.1 (Nível AA).</li>
                    <li><strong>Recursos:</strong> Navegação compatível com leitores de tela (TalkBack/VoiceOver) e contraste adaptado.</li>
                    <li><strong>Canal Dedicado:</strong> Encontrou uma barreira? Avise-nos diretamente em <a href="mailto:acessibilidade@kharmfy.com">acessibilidade@kharmfy.com</a>.</li>
                </ul>
            </section>

        </LegalPageLayout>
    );
}
