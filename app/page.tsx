import { SplashScreen } from "@/components/SplashScreen";
import { Navbar } from "@/components/Navbar";
import { HeroLogin } from "@/components/HeroLogin";
import { ValueProps } from "@/components/ValueProps";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col bg-background text-foreground overflow-x-hidden">
      <SplashScreen />
      <Navbar />
      <HeroLogin />
      <ValueProps />
      <Footer />
    </main>
  );
}
