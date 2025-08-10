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
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/10 flex items-center justify-center relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 text-4xl animate-float opacity-30">👶</div>
      <div className="absolute top-40 right-20 text-5xl animate-bounce-gentle opacity-40">🎈</div>
      <div className="absolute bottom-40 left-20 text-3xl animate-wiggle opacity-30">🌈</div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12 sm:mb-16">
            <div className="text-5xl sm:text-6xl mb-4 animate-bounce-gentle">👕👗</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4 leading-tight px-4">
              Are you looking for clothes for a boy or girl?
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4 rounded-full"></div>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              ✨ Choose to see our curated collections ✨
            </p>
          </div>

          {/* Gender Selection Cards */}
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {/* Boy Selection */}
            <div
              className="group cursor-pointer transform hover:scale-105 transition-all duration-500"
              onClick={() => handleGenderSelect("boy")}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 glass backdrop-blur-lg">
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 text-3xl animate-bounce-gentle opacity-80">👦</div>
                <div className="absolute top-4 left-4 text-2xl animate-wiggle opacity-60">⚽</div>
                
                <div className="aspect-square p-6 sm:p-8">
                  <img
                    src={boySelection}
                    alt="Boy clothing selection"
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-700 shadow-lg"
                  />
                </div>
                <div className="p-6 sm:p-8 bg-gradient-to-t from-white/90 to-transparent">
                  <div className="text-center mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">Boys Collection</h3>
                    <p className="text-sm text-muted-foreground">Trendy & comfortable styles</p>
                  </div>
                  <Button 
                    variant="selection" 
                    size="lg" 
                    className="w-full btn-toddler text-white shadow-lg group-hover:scale-105 transition-all duration-300 text-lg font-semibold py-3"
                  >
                    🧒 Choose Boy
                  </Button>
                </div>
              </div>
            </div>

            {/* Girl Selection */}
            <div
              className="group cursor-pointer transform hover:scale-105 transition-all duration-500"
              onClick={() => handleGenderSelect("girl")}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 glass backdrop-blur-lg">
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 text-3xl animate-bounce-gentle opacity-80">👧</div>
                <div className="absolute top-4 left-4 text-2xl animate-float opacity-60">🌸</div>
                
                <div className="aspect-square p-6 sm:p-8">
                  <img
                    src={girlSelection}
                    alt="Girl clothing selection"
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-700 shadow-lg"
                  />
                </div>
                <div className="p-6 sm:p-8 bg-gradient-to-t from-white/90 to-transparent">
                  <div className="text-center mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">Girls Collection</h3>
                    <p className="text-sm text-muted-foreground">Pretty & stylish outfits</p>
                  </div>
                  <Button 
                    variant="selection" 
                    size="lg" 
                    className="w-full btn-toddler text-white shadow-lg group-hover:scale-105 transition-all duration-300 text-lg font-semibold py-3"
                  >
                    👧 Choose Girl
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