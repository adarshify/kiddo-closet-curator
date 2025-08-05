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
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-accent/20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            KidsWear Hub
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Curated collections of beautiful children's clothing delivered to your doorstep
          </p>
        </div>

        {/* Banners Grid */}
        <div className="grid gap-8 max-w-6xl mx-auto">
          {banners.map((banner) => (
            <div
              key={banner.id}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => handleBannerClick(banner)}
            >
              <div className="aspect-[16/9] md:aspect-[21/9] relative">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex items-center">
                  <div className="text-white p-8 md:p-12 max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                      {banner.title}
                    </h2>
                    <p className="text-lg md:text-xl mb-4 opacity-90">
                      {banner.subtitle}
                    </p>
                    <p className="text-sm md:text-base mb-6 opacity-80">
                      {banner.description}
                    </p>
                    <Button 
                      variant="banner" 
                      size="lg"
                      className="group-hover:scale-105 transition-transform duration-300"
                    >
                      Explore Collection
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏠</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Home Delivery</h3>
            <p className="text-muted-foreground">
              Try before you buy in the comfort of your home
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Curated Collections</h3>
            <p className="text-muted-foreground">
              Handpicked styles from top brands for your little ones
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💝</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Easy Returns</h3>
            <p className="text-muted-foreground">
              Hassle-free returns for items that don't fit perfectly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;