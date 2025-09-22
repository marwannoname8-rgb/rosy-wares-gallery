import { Sparkles, Watch, ShoppingBag, Gem } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "المجوهرات",
    description: "قطع رائعة لكل المناسبات",
    icon: Sparkles,
    color: "text-pink-deep"
  },
  {
    id: 2,
    name: "الساعات",
    description: "أناقة خالدة في معصمك",
    icon: Watch,
    color: "text-pink-medium"
  },
  {
    id: 3,
    name: "الحقائب",
    description: "حقائب فاخرة تصنع انطباعاً",
    icon: ShoppingBag,
    color: "text-pink-deep"
  },
  {
    id: 4,
    name: "الأحجار الكريمة",
    description: "جواهر نادرة للهواة",
    icon: Gem,
    color: "text-pink-medium"
  }
];

const Categories = () => {
  return (
    <section id="categories" className="py-20 gradient-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-arabic font-bold text-foreground mb-4">
            فئاتنا
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            استكشف مجموعتنا المتنوعة عبر فئات مختلفة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="text-center group cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full gradient-card shadow-soft group-hover:shadow-medium flex items-center justify-center transition-all duration-300 group-hover:-translate-y-2">
                  <IconComponent className={`h-10 w-10 ${category.color}`} />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-pink-deep transition-colors">
                  {category.name}
                </h3>
                <p className="text-muted-foreground">
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;