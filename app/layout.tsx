import type { Metadata } from "next";
import { Inter, Montserrat, Playfair_Display } from "next/font/google"; // Added Serif Font
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

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "KarmFy - Conexões com Propósito",
  description: "Rede social de encontros focada em conexões reais, sem swipe. Construa seu Karma e encontre pessoas com propósito.",
  openGraph: {
    title: "KarmFy - Conexões com Propósito",
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
          playfair.variable, // Added Serif Variable
          "antialiased min-h-screen font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
