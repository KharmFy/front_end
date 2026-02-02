import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function InstitutionalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            {/* Reusing main Navbar for consistency, but could be simplified if requested */}
            <Navbar />
            <main className="flex-grow pt-20"> {/* PT-20 to account for fixed navbar */}
                {children}
            </main>
            <Footer />
        </div>
    );
}
