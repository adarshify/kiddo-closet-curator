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
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6 leading-tight">
              Please tell us the age of your kid
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              This helps us curate the perfect collection for your little one
            </p>
          </div>

          {/* Age Display */}
          <div className="mb-12">
            <div className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              {getAgeText(age[0])}
            </div>
          </div>

          {/* Age Slider */}
          <div className="mb-12 max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <Slider
                value={age}
                onValueChange={setAge}
                max={12}
                min={0}
                step={1}
                className="w-full mb-6"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>0-12 months</span>
                <span>12+ years</span>
              </div>
            </div>
          </div>

          {/* Quick Age Selection Buttons */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold mb-6 text-center">Or click to select quickly</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
              {ageOptions.map((option) => (
                <Button
                  key={option.value}
                  variant={age[0] === option.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setAge([option.value])}
                  className={`py-3 transition-all duration-300 ${
                    age[0] === option.value 
                      ? 'bg-primary text-white shadow-lg' 
                      : 'bg-white border-gray-200 hover:border-primary'
                  }`}
                >
                  {option.label}
                </Button>
              ))}
            </div>
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
              size="lg"
              onClick={handleNext}
              className="bg-primary hover:bg-primary/90 text-white px-12 rounded-lg"
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