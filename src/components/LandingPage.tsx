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
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/10 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 text-6xl animate-float opacity-30">🎈</div>
      <div className="absolute top-40 right-20 text-4xl animate-bounce-gentle opacity-40">🧸</div>
      <div className="absolute bottom-40 left-20 text-5xl animate-wiggle opacity-30">⭐</div>
      <div className="absolute bottom-20 right-10 text-3xl animate-float opacity-40">🎀</div>
      
      <div className="container mx-auto px-4 py-8 sm:py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="mb-6">
            <div className="text-6xl sm:text-8xl mb-4 animate-bounce-gentle">👶</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4 leading-tight">
              Toddler's Closet
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4 rounded-full"></div>
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            ✨ Curated collections of beautiful children's clothing delivered to your doorstep ✨
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <span className="text-2xl animate-wiggle">🌈</span>
            <span className="text-2xl animate-bounce-gentle">👕</span>
            <span className="text-2xl animate-float">👗</span>
            <span className="text-2xl animate-wiggle">🧦</span>
          </div>
        </div>

        {/* Banners Grid */}
        <div className="grid gap-6 sm:gap-8 max-w-6xl mx-auto">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 cursor-pointer transform hover:-translate-y-2"
              onClick={() => handleBannerClick(banner)}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="aspect-[16/9] md:aspect-[21/9] relative glass">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-accent/30 to-transparent" />
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 text-3xl sm:text-4xl animate-bounce-gentle opacity-80">
                  {banner.id === 'infant' ? '🍼' : banner.id === 'monsoon' ? '☔' : '🌟'}
                </div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex items-center">
                  <div className="text-white p-6 sm:p-8 md:p-12 max-w-3xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      <span className="text-sm sm:text-base font-medium uppercase tracking-wide opacity-90">
                        Premium Collection
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
                      {banner.title}
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl mb-4 opacity-95 font-medium">
                      {banner.subtitle}
                    </p>
                    <p className="text-sm sm:text-base mb-6 opacity-85 leading-relaxed max-w-xl">
                      {banner.description}
                    </p>
                    <Button 
                      variant="banner" 
                      size="lg"
                      className="btn-toddler text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold"
                    >
                      ✨ Explore Collection
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-16 sm:mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          <div className="text-center p-6 sm:p-8 glass rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-xl">
            <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-gentle">
              <span className="text-3xl">🏠</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Home Delivery
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Try before you buy in the comfort of your home with our doorstep service
            </p>
          </div>
          <div className="text-center p-6 sm:p-8 glass rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-xl">
            <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-wiggle">
              <span className="text-3xl">✨</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Curated Collections
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Handpicked styles from premium brands specially chosen for your little ones
            </p>
          </div>
          <div className="text-center p-6 sm:p-8 glass rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-xl sm:col-span-2 lg:col-span-1">
            <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
              <span className="text-3xl">💝</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Easy Returns
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Hassle-free returns for items that don't fit perfectly - customer satisfaction guaranteed
            </p>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <span className="animate-pulse">👇</span>
            <span>Click any collection above to get started</span>
            <span className="animate-pulse">👇</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;