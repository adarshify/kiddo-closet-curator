import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import infantBanner from "@/assets/infant-banner.jpg";
import monsoonBanner from "@/assets/monsoon-banner.jpg";
import growingBanner from "@/assets/growing-banner.jpg";

const LandingPage = () => {
  const navigate = useNavigate();

  const banners = [
    {
      id: "infant",
      title: "Shop for Your Infant",
      subtitle: "From the comfort of your house",
      description: "Discover our curated collection of soft, comfortable, and adorable clothing for your little one",
      image: infantBanner,
      prefillData: { category: "infant", ageRange: "0-12 months" }
    },
    {
      id: "monsoon",
      title: "Get Monsoon Ready",
      subtitle: "Raincoats & warmer clothes brought home",
      description: "Stay dry and cozy with our collection of raincoats, jackets, and warm clothing",
      image: monsoonBanner,
      prefillData: { category: "monsoon", season: "rainy" }
    },
    {
      id: "growing",
      title: "Don't We Love Kids Growing Up!",
      subtitle: "Replenish their wardrobe with latest styles",
      description: "Trendy, comfortable, and stylish clothing that grows with your child",
      image: growingBanner,
      prefillData: { category: "trendy", style: "latest" }
    }
  ];

  const handleBannerClick = (banner: typeof banners[0]) => {
    navigate("/gender-selection", { state: { prefillData: banner.prefillData } });
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6 leading-tight">
            Zoddle
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Curated collections of beautiful children's clothing delivered to your doorstep
          </p>
        </div>

        {/* Main Banner */}
        <div className="max-w-4xl mx-auto mb-16">
          <div
            className="relative overflow-hidden rounded-2xl shadow-xl cursor-pointer"
            onClick={() => handleBannerClick(banners[0])}
          >
            <div className="aspect-[16/9] relative">
              <img
                src={banners[0].image}
                alt={banners[0].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center">
                <div className="text-white p-8 max-w-lg">
                  <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
                    {banners[0].title}
                  </h2>
                  <p className="text-lg mb-6 opacity-95">
                    {banners[0].subtitle}
                  </p>
                  <p className="text-sm mb-6 opacity-85 leading-relaxed">
                    {banners[0].description}
                  </p>
                  <Button 
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium"
                  >
                    Explore Collection
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Banner */}
        <div className="max-w-4xl mx-auto">
          <div
            className="relative overflow-hidden rounded-2xl shadow-xl cursor-pointer"
            onClick={() => handleBannerClick(banners[1])}
          >
            <div className="aspect-[16/9] relative">
              <img
                src={banners[1].image}
                alt={banners[1].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center">
                <div className="text-white p-8 max-w-lg">
                  <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
                    {banners[1].title}
                  </h2>
                  <p className="text-lg mb-6 opacity-95">
                    {banners[1].subtitle}
                  </p>
                  <p className="text-sm mb-6 opacity-85 leading-relaxed">
                    {banners[1].description}
                  </p>
                  <Button 
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium"
                  >
                    Explore Collection
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;