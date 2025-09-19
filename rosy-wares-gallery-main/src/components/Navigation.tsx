import { useState } from "react";
import { Menu, X, Heart, ShoppingBag } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-arabic font-bold text-foreground">
              نيلورا
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            <a href="#home" className="text-foreground hover:text-pink-deep transition-colors">
              الرئيسية
            </a>
            <a href="#products" className="text-foreground hover:text-pink-deep transition-colors">
              المنتجات
            </a>
            <a href="#categories" className="text-foreground hover:text-pink-deep transition-colors">
              الفئات
            </a>
            <a href="#about" className="text-foreground hover:text-pink-deep transition-colors">
              من نحن
            </a>
            <a href="#contact" className="text-foreground hover:text-pink-deep transition-colors">
              اتصل بنا
            </a>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            <ThemeToggle />
            <button className="p-2 text-foreground hover:text-pink-deep transition-colors">
              <Heart className="h-5 w-5" />
            </button>
            <button className="p-2 text-foreground hover:text-pink-deep transition-colors">
              <ShoppingBag className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2 space-x-reverse">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground hover:text-pink-deep transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              <a
                href="#home"
                className="block px-3 py-2 text-foreground hover:text-pink-deep transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                الرئيسية
              </a>
              <a
                href="#products"
                className="block px-3 py-2 text-foreground hover:text-pink-deep transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                المنتجات
              </a>
              <a
                href="#categories"
                className="block px-3 py-2 text-foreground hover:text-pink-deep transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                الفئات
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-foreground hover:text-pink-deep transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                من نحن
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-foreground hover:text-pink-deep transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                اتصل بنا
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;