import heroImage from "@/assets/hero-accessories.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden gradient-hero">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Elegant fashion accessories collection"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-pink-light/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-arabic font-bold text-foreground mb-6 animate-fade-in">
            إكسسوارات
            <span className="block text-pink-deep">أنيقة</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up">
            اكتشف مجموعتنا المختارة من الإكسسوارات المتطورة التي تعزز أناقتك.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
            <button className="btn-elegant">
              تسوق المجموعة
            </button>
            <button className="btn-outline-elegant">
              اعرف أكثر
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 rounded-full bg-pink-soft/30 animate-float hidden lg:block" />
      <div className="absolute bottom-32 right-32 w-16 h-16 rounded-full bg-pink-medium/20 animate-float delay-1000 hidden lg:block" />
    </section>
  );
};

export default Hero;