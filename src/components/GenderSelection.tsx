import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import boySelection from "@/assets/boy-selection.jpg";
import girlSelection from "@/assets/girl-selection.jpg";

const GenderSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const prefillData = location.state?.prefillData || {};

  const handleGenderSelect = (gender: "boy" | "girl") => {
    navigate("/age-selection", { 
      state: { 
        prefillData: { ...prefillData, gender } 
      } 
    });
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6 leading-tight">
              Are you looking for clothes for a <span className="text-accent">boy</span> or <span className="text-primary">girl</span>?
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose to see our curated collections
            </p>
          </div>

          {/* Gender Selection Cards */}
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Boy Selection */}
            <div
              className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
              onClick={() => handleGenderSelect("boy")}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="aspect-square p-4">
                  <img
                    src={boySelection}
                    alt="Boy clothing selection"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="p-6 text-center">
                  <Button 
                    className="w-full bg-accent hover:bg-accent/90 text-white rounded-lg font-medium py-3"
                  >
                    Boy
                  </Button>
                </div>
              </div>
            </div>

            {/* Girl Selection */}
            <div
              className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
              onClick={() => handleGenderSelect("girl")}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="aspect-square p-4">
                  <img
                    src={girlSelection}
                    alt="Girl clothing selection"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="p-6 text-center">
                  <Button 
                    className="w-full bg-accent hover:bg-accent/90 text-white rounded-lg font-medium py-3"
                  >
                    Girl
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-12">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/")}
              className="text-muted-foreground hover:text-foreground"
            >
              ← Back to Collections
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenderSelection;