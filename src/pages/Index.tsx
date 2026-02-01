import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ReadingProgress from "@/components/ReadingProgress";
import { useConsoleMessage } from "@/hooks/useConsoleMessage";

const Index = () => {
  useConsoleMessage();

  return (
    <main className="min-h-screen bg-background">
      <ReadingProgress />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
