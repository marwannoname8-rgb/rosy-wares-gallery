const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-arabic font-bold mb-4">نيلورا</h3>
            <p className="text-background/80 mb-4 max-w-md">
              وجهتك للإكسسوارات الأنيقة التي تكمل أسلوبك الفريد. 
              الجودة والحرفية والجمال الخالد في كل قطعة.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#home" className="hover:text-background transition-colors">الرئيسية</a></li>
              <li><a href="#products" className="hover:text-background transition-colors">المنتجات</a></li>
              <li><a href="#categories" className="hover:text-background transition-colors">الفئات</a></li>
              <li><a href="#about" className="hover:text-background transition-colors">من نحن</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">خدمة العملاء</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">معلومات الشحن</a></li>
              <li><a href="#" className="hover:text-background transition-colors">الإرجاع</a></li>
              <li><a href="#" className="hover:text-background transition-colors">دليل المقاسات</a></li>
              <li><a href="#contact" className="hover:text-background transition-colors">اتصل بنا</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p>&copy; 2024 نيلورا. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;