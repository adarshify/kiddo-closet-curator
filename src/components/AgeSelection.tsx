import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useNavigate, useLocation } from "react-router-dom";

const AgeSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const prefillData = location.state?.prefillData || {};
  
  const [age, setAge] = useState([3]); // Default to 3 years

  const handleNext = () => {
    navigate("/collection-selection", { 
      state: { 
        prefillData: { ...prefillData, age: age[0] } 
      } 
    });
  };

  const getAgeText = (ageValue: number) => {
    if (ageValue < 1) return "0-12 months";
    if (ageValue === 1) return "1 year";
    return `${ageValue} years`;
  };

  const ageOptions = [
    { value: 0, label: "0-12 months" },
    { value: 1, label: "1 year" },
    { value: 2, label: "2 years" },
    { value: 3, label: "3 years" },
    { value: 4, label: "4 years" },
    { value: 5, label: "5 years" },
    { value: 6, label: "6 years" },
    { value: 7, label: "7 years" },
    { value: 8, label: "8 years" },
    { value: 9, label: "9 years" },
    { value: 10, label: "10 years" },
    { value: 11, label: "11 years" },
    { value: 12, label: "12+ years" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-accent/20 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Please tell us the age of your kid
            </h1>
            <p className="text-lg text-muted-foreground">
              This helps us curate the perfect collection for your little one
            </p>
          </div>

          {/* Age Display */}
          <div className="mb-12">
            <div className="text-6xl font-bold text-primary mb-4">
              {getAgeText(age[0])}
            </div>
          </div>

          {/* Age Slider */}
          <div className="mb-12 px-8">
            <Slider
              value={age}
              onValueChange={setAge}
              max={12}
              min={0}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-muted-foreground mt-4">
              <span>0-12 months</span>
              <span>12+ years</span>
            </div>
          </div>

          {/* Quick Age Selection Buttons */}
          <div className="grid grid-cols-3 md:grid-cols-4 gap-3 mb-12">
            {ageOptions.map((option) => (
              <Button
                key={option.value}
                variant={age[0] === option.value ? "default" : "outline"}
                size="sm"
                onClick={() => setAge([option.value])}
                className="text-xs"
              >
                {option.label}
              </Button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/gender-selection", { state: { prefillData } })}
              className="text-muted-foreground hover:text-foreground"
            >
              ← Back
            </Button>
            
            <Button 
              variant="default" 
              size="lg"
              onClick={handleNext}
              className="px-12"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgeSelection;