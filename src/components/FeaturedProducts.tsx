import jewelrySet from "@/assets/jewelry-set.jpg";
import pinkHandbag from "@/assets/pink-handbag.jpg";
import silkScarf from "@/assets/silk-scarf.jpg";
import roseGoldWatch from "@/assets/rose-gold-watch.jpg";
import earringCollection from "@/assets/earring-collection.jpg";

const products = [
  {
    id: 1,
    name: "طقم مجوهرات ذهبية",
    price: "299 ر.س",
    image: jewelrySet,
    description: "قلادة وأقراط أنيقة من الذهب عيار 18"
  },
  {
    id: 2,
    name: "حقيبة يد جلدية وردية",
    price: "450 ر.س",
    image: pinkHandbag,
    description: "حقيبة جلدية فاخرة مع تفاصيل ذهبية وردية"
  },
  {
    id: 3,
    name: "وشاح حريري بالورود",
    price: "120 ر.س",
    image: silkScarf,
    description: "وشاح حرير فاخر بنقشة ورود رقيقة"
  },
  {
    id: 4,
    name: "ساعة ذهبية وردية",
    price: "350 ر.س",
    image: roseGoldWatch,
    description: "تصميم بسيط مع حزام جلدي وردي"
  },
  {
    id: 5,
    name: "مجموعة أقراط",
    price: "180 ر.س",
    image: earringCollection,
    description: "مجموعة أقراط متنوعة لكل المناسبات"
  }
];

const FeaturedProducts = () => {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-arabic font-bold text-foreground mb-4">
            المجموعة المميزة
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            قطع منتقاة بعناية تجسد الأناقة والرقي
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="product-card p-6 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square mb-6 overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-pink-deep">
                    {product.price}
                  </span>
                  <button className="px-6 py-2 bg-primary text-primary-foreground rounded-full hover:shadow-medium transition-all duration-300 hover:-translate-y-0.5">
                    أضف للسلة
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;