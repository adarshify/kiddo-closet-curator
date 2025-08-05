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
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-accent/20 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Are you looking for clothes for a boy or girl?
            </h1>
            <p className="text-lg text-muted-foreground">
              Choose to see our curated collections
            </p>
          </div>

          {/* Gender Selection Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* Boy Selection */}
            <div
              className="group cursor-pointer"
              onClick={() => handleGenderSelect("boy")}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                <div className="aspect-square p-8">
                  <img
                    src={boySelection}
                    alt="Boy clothing selection"
                    className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <Button 
                    variant="selection" 
                    size="lg" 
                    className="w-full group-hover:scale-105 transition-transform duration-300"
                  >
                    Boy
                  </Button>
                </div>
              </div>
            </div>

            {/* Girl Selection */}
            <div
              className="group cursor-pointer"
              onClick={() => handleGenderSelect("girl")}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                <div className="aspect-square p-8">
                  <img
                    src={girlSelection}
                    alt="Girl clothing selection"
                    className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <Button 
                    variant="selection" 
                    size="lg" 
                    className="w-full group-hover:scale-105 transition-transform duration-300"
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