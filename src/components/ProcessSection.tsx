import { DollarSign, ShoppingCart, Star } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: DollarSign,
      title: "Take the Survey",
      description: "Answer a few quick questions about your Target shopping experience"
    },
    {
      icon: ShoppingCart,
      title: "Share Feedback", 
      description: "Tell us about your shopping preferences and experiences"
    },
    {
      icon: Star,
      title: "Get Rewarded",
      description: "Qualify for your $750 Target gift card after completing the survey"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          Simple 3-Step Process
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            
            return (
              <div 
                key={index}
                className="bg-muted p-8 rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <IconComponent className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;