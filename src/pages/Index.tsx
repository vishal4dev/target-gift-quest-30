import TargetHeader from "@/components/TargetHeader";
import HeroSection from "@/components/HeroSection";
import ProcessSection from "@/components/ProcessSection";
import BenefitsSection from "@/components/BenefitsSection";
import TargetFooter from "@/components/TargetFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TargetHeader />
      <main>
        <HeroSection />
        <ProcessSection />
        <BenefitsSection />
      </main>
      <TargetFooter />
    </div>
  );
};

export default Index;
