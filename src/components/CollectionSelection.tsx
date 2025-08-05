import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate, useLocation } from "react-router-dom";

const CollectionSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const prefillData = location.state?.prefillData || {};
  
  const [selectedCollections, setSelectedCollections] = useState<string[]>([]);

  const collections = [
    {
      id: "everyday-essentials",
      name: "Everyday Essentials",
      description: "We will bring you comfortable basics ensuring we give you enough options for daily wear, playtime, and casual outings.",
      image: "👕",
      brands: ["Carter's", "H&M Kids", "Zara Kids"],
      items: ["T-shirts", "Pants", "Shorts", "Basic Tops"]
    },
    {
      id: "special-occasions",
      name: "Special Occasions",
      description: "We will bring you elegant formal wear ensuring we give you enough options for parties, family gatherings, and special events.",
      image: "🎀",
      brands: ["Polo Ralph Lauren", "Tommy Hilfiger Kids", "Burberry Kids"],
      items: ["Dresses", "Formal Shirts", "Dress Pants", "Blazers"]
    },
    {
      id: "active-play",
      name: "Active & Play",
      description: "We will bring you durable activewear ensuring we give you enough options for sports, playground fun, and outdoor adventures.",
      image: "🏃",
      brands: ["Nike Kids", "Adidas Kids", "Under Armour"],
      items: ["Sportswear", "Sneakers", "Athletic Shorts", "Active Tops"]
    },
    {
      id: "seasonal-must-haves",
      name: "Seasonal Must-Haves",
      description: "We will bring you weather-appropriate clothing ensuring we give you enough options for current season needs and upcoming weather changes.",
      image: "🌈",
      brands: ["The North Face Kids", "Patagonia Kids", "Columbia"],
      items: ["Jackets", "Sweaters", "Weather Gear", "Seasonal Accessories"]
    },
    {
      id: "trendy-fashion",
      name: "Trendy Fashion",
      description: "We will bring you latest style pieces ensuring we give you enough options for fashion-forward looks and current trends.",
      image: "✨",
      brands: ["Stella McCartney Kids", "Mini Rodini", "Bobo Choses"],
      items: ["Designer Pieces", "Trendy Accessories", "Statement Items", "Fashion Basics"]
    },
    {
      id: "comfort-sleep",
      name: "Comfort & Sleep",
      description: "We will bring you cozy sleepwear ensuring we give you enough options for bedtime comfort, lounging, and relaxation.",
      image: "🌙",
      brands: ["PJ Salvage Kids", "Hatley", "Little Sleepies"],
      items: ["Pajamas", "Nightgowns", "Robes", "Slippers"]
    }
  ];

  const handleCollectionToggle = (collectionId: string) => {
    setSelectedCollections(prev => 
      prev.includes(collectionId)
        ? prev.filter(id => id !== collectionId)
        : [...prev, collectionId]
    );
  };

  const handleNext = () => {
    if (selectedCollections.length === 0) return;
    
    navigate("/contact-form", { 
      state: { 
        prefillData: { ...prefillData, selectedCollections } 
      } 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-accent/20 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Customize what we bring
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select which collections we should include to help us get you the right things
            </p>
          </div>

          {/* Collections Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {collections.map((collection) => (
              <Card 
                key={collection.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedCollections.includes(collection.id)
                    ? 'ring-2 ring-primary shadow-lg scale-105'
                    : 'hover:scale-102'
                }`}
                onClick={() => handleCollectionToggle(collection.id)}
              >
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-3">{collection.image}</div>
                  <CardTitle className="text-lg">{collection.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-sm leading-relaxed">
                    {collection.description}
                  </CardDescription>
                  
                  {/* Items Preview */}
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-2">Includes:</p>
                    <div className="flex flex-wrap gap-1">
                      {collection.items.map((item) => (
                        <Badge key={item} variant="secondary" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Brands */}
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-2">Featured Brands:</p>
                    <div className="flex flex-wrap gap-1">
                      {collection.brands.map((brand) => (
                        <Badge key={brand} variant="outline" className="text-xs">
                          {brand}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Selection Indicator */}
                  <div className="pt-2">
                    <Button
                      variant={selectedCollections.includes(collection.id) ? "default" : "outline"}
                      size="sm"
                      className="w-full"
                    >
                      {selectedCollections.includes(collection.id) ? "Selected ✓" : "Select"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Selected Count */}
          {selectedCollections.length > 0 && (
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                <span className="font-medium">
                  {selectedCollections.length} collection{selectedCollections.length !== 1 ? 's' : ''} selected
                </span>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/age-selection", { state: { prefillData } })}
              className="text-muted-foreground hover:text-foreground"
            >
              ← Back
            </Button>
            
            <Button 
              variant="default" 
              size="lg"
              onClick={handleNext}
              disabled={selectedCollections.length === 0}
              className="px-12"
            >
              Continue ({selectedCollections.length})
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionSelection;