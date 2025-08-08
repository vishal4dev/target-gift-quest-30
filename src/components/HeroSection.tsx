import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import giftCardImage from "@/assets/target-gift-card.jpg";

const HeroSection = () => {
  const handleStartSurvey = () => {
    // Analytics tracking would go here
    console.log("Survey started");
  };

  return (
    <section className="bg-hero-bg pt-16 pb-20">
      <div className="container mx-auto">
        <div className="px-4 md:px-0 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <img 
            src={giftCardImage} 
            alt="Target $750 Gift Card - Complete survey to qualify" 
            className="w-full max-w-lg mx-auto mb-8 rounded-xl shadow-elegant"
          />
          
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Get a <span className="text-primary">$750 Target</span> Gift Card
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Complete our survey about your shopping experience at Target to qualify for a $750 gift card.
            </p>
            
            <Button 
              onClick={handleStartSurvey}
              size="lg"
              className="bg-primary hover:bg-primary-hover text-primary-foreground text-xl px-12 py-6 rounded-full font-semibold transition-all duration-300 shadow-elegant hover:shadow-xl hover:scale-105 h-auto"
            >
              Start Survey Now 
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;