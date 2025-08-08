import { Check } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    "Qualify for a $750 Target gift card",
    "Complete qualification process", 
    "Instant digital delivery",
    "Help improve Target services",
    "Valid at any Target location",
    "No purchase necessary"
  ];

  return (
    <section className="py-20 bg-hero-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          Why Participate?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-center space-x-4 bg-background p-4 rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 animate-in fade-in slide-in-from-left-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <span className="text-lg text-foreground font-medium">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;