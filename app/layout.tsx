import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KharmFy - Conexões com Propósito",
  description: "Rede social de encontros focada em conexões reais, sem swipe. Construa seu Karma e encontre pessoas com propósito.",
  openGraph: {
    title: "KharmFy - Conexões com Propósito",
    description: "Abandone o swipe. Conheça o sistema de Karma.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={clsx(
          inter.variable,
          montserrat.variable,
          "antialiased min-h-screen font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
