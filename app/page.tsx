import HeroSection from "@/components/HeroSection";
import NarrativeSection from "@/components/NarrativeSection";
import PillarsSection from "@/components/PillarsSection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <HeroSection />
      <NarrativeSection />
      <PillarsSection />
      <ContactSection />
    </main>
  );
}
