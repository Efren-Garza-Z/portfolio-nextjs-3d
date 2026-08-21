import ColorfulHero from "@/components/ColorfulHero";
import MiniGameContainer from "@/components/MiniGameContainer";
import StackGameWindow from "@/components/StackGameWindow";
import Footer from "@/components/Footer";

export default function PortfolioPage() {
    return (
        <main className="w-full overflow-hidden">
            {/* Tu inicio súper colorido y abstracto */}
            <ColorfulHero />

            {/* Al hacer scroll, aparece la sección de tu juego */}
            <StackGameWindow />

            <Footer />
        </main>
    );
}