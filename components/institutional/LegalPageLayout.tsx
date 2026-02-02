import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface LegalPageLayoutProps {
  title: string;
  lastUpdated?: string;
  children: ReactNode;
}

export function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <div className="relative min-h-[50vh]">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 opacity-10 dark:opacity-5 overflow-hidden pointer-events-none">
        <div className="w-[500px] h-[500px] bg-brand-orange rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
        <div className="w-[400px] h-[400px] bg-brand-purple rounded-full blur-[100px] translate-x-1/4 translate-y-0" />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <header className="mb-16 text-center md:text-left relative">
          <div className="inline-block p-2 px-4 rounded-full bg-brand-purple/5 text-brand-purple text-xs font-bold tracking-wider mb-4 border border-brand-purple/10">
            INSTITUCIONAL
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-pink to-brand-purple mb-6 leading-tight">
            {title}
          </h1>
          {lastUpdated && (
            <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Atualizado em: {lastUpdated}
            </div>
          )}
        </header>

        <article className="prose prose-lg prose-gray dark:prose-invert max-w-none 
          prose-p:leading-relaxed prose-p:text-gray-600 dark:prose-p:text-gray-300
          
          /* Headings (Titles & Subtitles) */
          prose-headings:font-display prose-headings:font-black prose-headings:tracking-tight
          prose-h2:text-3xl prose-h2:md:text-4xl prose-h2:bg-gradient-to-r prose-h2:from-brand-purple prose-h2:to-brand-pink prose-h2:bg-clip-text prose-h2:text-transparent prose-h2:w-fit prose-h2:mt-16 prose-h2:mb-8
          prose-h3:text-2xl prose-h3:text-brand-purple prose-h3:mt-10
          
          /* Highlights (Bold text) */
          prose-strong:text-brand-orange prose-strong:font-black
          
          /* Links */
          prose-a:text-brand-pink prose-a:font-bold prose-a:no-underline hover:prose-a:text-brand-purple prose-a:transition-colors hover:prose-a:underline
          
          /* Lists */
          prose-li:marker:text-brand-purple prose-ul:list-none
          prose-li:pl-0 prose-li:relative prose-li:before:content-[''] prose-li:before:absolute prose-li:before:left-[-1.5em] prose-li:before:top-[0.6em] prose-li:before:w-2 prose-li:before:h-2 prose-li:before:bg-brand-orange prose-li:before:rounded-full
          
          /* Blockquotes */
          prose-blockquote:border-l-4 prose-blockquote:border-brand-coral prose-blockquote:bg-brand-coral/5 prose-blockquote:py-4 prose-blockquote:px-8 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:text-gray-700 dark:prose-blockquote:text-gray-200">
          {children}
        </article>
      </div>
    </div>
  );
}
