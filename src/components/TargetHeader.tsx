import { Target } from "lucide-react";

const TargetHeader = () => {
  return (
    <header className="w-full bg-primary py-4">
      <div className="container mx-auto px-4 flex items-center">
        <Target className="w-8 h-8 text-white mr-3" />
        <h1 className="text-white text-2xl md:text-3xl font-bold tracking-tight">
          Target
        </h1>
        <span className="text-white ml-2 mt-1 font-medium">Survey</span>
      </div>
    </header>
  );
};

export default TargetHeader;