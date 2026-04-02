import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ReadingProgress from "@/components/ReadingProgress";
import { useConsoleMessage } from "@/hooks/useConsoleMessage";

const Index = () => {
  useConsoleMessage();

  return (
    <div className="flex min-h-screen bg-background">
      <Navigation />

      {/* Main content – offset by sidebar width on md+ */}
      <main className="flex-1 md:ml-64 min-w-0">
        <ReadingProgress />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
