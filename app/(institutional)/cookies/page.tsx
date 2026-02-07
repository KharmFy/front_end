import { LegalPageLayout } from "@/components/institutional/LegalPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Política de Cookies - KarmFy",
    description: "Entenda como usamos cookies para melhorar sua experiência no KarmFy.",
};

export default function CookiesPage() {
    return (
        <LegalPageLayout title="Política de Cookies" lastUpdated="Fevereiro de 2026">


            <p className="lead">
                Cookies são pequenos arquivos de texto salvos no seu navegador. Nós os usamos com parcimônia, apenas para garantir que o app funcione corretamente e para entender como melhorá-lo.
            </p>

            <hr className="my-12 border-brand-purple/10" />

            <h2>Tipos de Cookies que utilizamos</h2>
            <ol>
                <li>
                    <strong>Essenciais (Sessão):</strong>
                    <br />
                    <code>karmfy_auth_token</code> — Fundamental. É o que mantém você logado. Sem ele, você teria que digitar a senha a cada clique.
                </li>
                <li>
                    <strong>Preferências:</strong>
                    <br />
                    <code>theme_mode</code> — Lembra se você prefere usar o KarmFy no Modo Escuro (Dark) ou Claro (Light).
                </li>
                <li>
                    <strong>Segurança:</strong>
                    <br />
                    <code>csrf_token</code> — Uma camada vital de proteção que impede que hackers se passem por você.
                </li>
                <li>
                    <strong>Analíticos (Anônimos):</strong>
                    <br />
                    <code>_ga</code> (Google Analytics) — Nos ajuda a entender quais recursos são mais usados (ex: "Quantas pessoas clicam no botão de Denúncia?"). Esses dados são agregados e não identificam você individualmente.
                </li>
            </ol>

            <p className="mt-8 text-sm text-gray-500">
                Você pode gerenciar as preferências de cookies diretamente nas configurações do seu navegador.
            </p>
        </LegalPageLayout>
    );
}
