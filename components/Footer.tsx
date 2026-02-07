export function Footer() {
    return (
        <footer className="bg-neutral-900 text-white py-12 mt-auto">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <span className="text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-pink">KarmFy</span>
                        <p className="mt-4 text-gray-400 text-sm">
                            Conexões reais baseadas em propósito e reputação. Sem swipe, apenas Karma.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-brand-orange">Sobre</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="/#features" className="hover:text-brand-pink transition-colors">Como Funciona</a></li>
                            <li><a href="/faq" className="hover:text-brand-pink transition-colors">Perguntas Frequentes</a></li>
                            <li><a href="/contato" className="hover:text-brand-pink transition-colors">Fale Conosco</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-brand-orange">Legal</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="/termos" className="hover:text-brand-pink transition-colors">Termos de Uso</a></li>
                            <li><a href="/privacidade" className="hover:text-brand-pink transition-colors">Privacidade</a></li>
                            <li><a href="/cookies" className="hover:text-brand-pink transition-colors">Cookies</a></li>
                            <li><a href="/saude-consumidor" className="hover:text-brand-pink transition-colors">Dados de Saúde</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-brand-orange">Segurança</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="/seguranca" className="hover:text-brand-pink transition-colors">Dicas de Segurança</a></li>
                            <li><a href="/propriedade" className="hover:text-brand-pink transition-colors">Propriedade Intelectual</a></li>
                            <li><a href="/acessibilidade" className="hover:text-brand-pink transition-colors">Acessibilidade</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} KarmFy. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
