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
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/10 flex items-center justify-center relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 text-4xl animate-float opacity-30">🎂</div>
      <div className="absolute top-40 right-20 text-3xl animate-wiggle opacity-40">📏</div>
      <div className="absolute bottom-40 left-20 text-5xl animate-bounce-gentle opacity-30">🎈</div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12 sm:mb-16">
            <div className="text-5xl sm:text-6xl mb-4 animate-bounce-gentle">👶➡️🧒</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4 leading-tight px-4">
              Please tell us the age of your kid
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4 rounded-full"></div>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              ✨ This helps us curate the perfect collection for your little one ✨
            </p>
          </div>

          {/* Age Display */}
          <div className="mb-12">
            <div className="glass rounded-2xl p-6 sm:p-8 mx-auto max-w-md mb-8">
              <div className="text-sm text-muted-foreground mb-2">Selected Age</div>
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-bounce-gentle">
                {getAgeText(age[0])}
              </div>
              <div className="text-lg text-muted-foreground mt-2">Perfect fit guaranteed!</div>
            </div>
          </div>

          {/* Age Slider */}
          <div className="mb-12 px-4 sm:px-8">
            <div className="glass rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-semibold mb-6 text-center">Use the slider to select age</h3>
              <Slider
                value={age}
                onValueChange={setAge}
                max={12}
                min={0}
                step={1}
                className="w-full mb-4"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-4 px-2">
                <span className="flex items-center gap-1">
                  <span className="text-lg">👶</span>
                  <span>0-12 months</span>
                </span>
                <span className="flex items-center gap-1">
                  <span>12+ years</span>
                  <span className="text-lg">🧒</span>
                </span>
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
                  className={`text-xs sm:text-sm py-3 transition-all duration-300 ${
                    age[0] === option.value 
                      ? 'btn-toddler text-white shadow-lg scale-105' 
                      : 'hover:scale-105 glass'
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