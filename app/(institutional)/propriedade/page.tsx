import { LegalPageLayout } from "@/components/institutional/LegalPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Propriedade Intelectual - KarmFy",
    description: "Direitos autorais e uso da marca.",
};

export default function PropertyPage() {
    return (
        <LegalPageLayout title="Propriedade Intelectual" lastUpdated="Fevereiro de 2026">

            <section className="mb-12">
                <h2>Propriedade Intelectual</h2>


                <ul>
                    <li><strong>Licença:</strong> Ao postar conteúdo, você concede à KarmFy uma licença mundial e não exclusiva para exibir esse conteúdo no serviço.</li>
                    <li><strong>Marca:</strong> É proibido copiar a identidade visual, logo ou o nome "KarmFy" sem autorização.</li>
                    <li><strong>Seu Conteúdo:</strong> Você mantém a propriedade total das fotos e textos que cria.</li>
                </ul>
            </section>



        </LegalPageLayout>
    );
}
