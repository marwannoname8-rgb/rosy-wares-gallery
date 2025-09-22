import { Heart, Award, Users, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-arabic font-bold text-foreground mb-6">
              قصتنا
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              تأسست نيلورا بشغف للأناقة الخالدة، وقد كانت تقوم بتنسيق إكسسوارات استثنائية 
              للعملاء المميزين الذين يقدرون الجودة والحرفية.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              كل قطعة في مجموعتنا يتم اختيارها بعناية لضمان تلبيتها لمعاييرنا العالية 
              من الجمال والجودة والأصالة. نحن نؤمن أن الإكسسوار المناسب يمكن أن يحول أي 
              إطلالة ويعزز ثقتك بنفسك.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-pink-light flex items-center justify-center">
                  <Heart className="h-8 w-8 text-pink-deep" />
                </div>
                <div className="text-2xl font-bold text-foreground">5000+</div>
                <div className="text-muted-foreground">عميل سعيد</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-pink-light flex items-center justify-center">
                  <Award className="h-8 w-8 text-pink-deep" />
                </div>
                <div className="text-2xl font-bold text-foreground">10+</div>
                <div className="text-muted-foreground">سنوات خبرة</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-pink-light flex items-center justify-center">
                  <Users className="h-8 w-8 text-pink-deep" />
                </div>
                <div className="text-2xl font-bold text-foreground">50+</div>
                <div className="text-muted-foreground">شريك تجاري</div>
              </div>
            </div>
          </div>

          {/* Image/Visual Element */}
          <div className="relative">
            <div className="aspect-square rounded-2xl gradient-card shadow-strong p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-pink-soft flex items-center justify-center">
                  <Sparkles className="h-16 w-16 text-pink-deep animate-float" />
                </div>
                <h3 className="text-2xl font-arabic font-bold text-foreground mb-4">
                  مصنوع بحب
                </h3>
                <p className="text-muted-foreground">
                  كل إكسسوار يحكي قصة من التفاني والفنية والاهتمام بالتفاصيل.
                </p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-pink-medium/20 animate-float delay-500" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-pink-soft/30 animate-float delay-1000" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;