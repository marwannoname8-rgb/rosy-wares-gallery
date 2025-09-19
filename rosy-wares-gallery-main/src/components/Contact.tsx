import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 gradient-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-arabic font-bold text-foreground mb-4">
            تواصل معنا
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            نحب أن نسمع منك. تواصل معنا لأي استفسارات أو مساعدة.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              معلومات التواصل
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="w-12 h-12 rounded-full bg-pink-light flex items-center justify-center">
                  <Mail className="h-6 w-6 text-pink-deep" />
                </div>
                <div>
                  <div className="font-medium text-foreground">البريد الإلكتروني</div>
                  <div className="text-muted-foreground">hello@nelurraa.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="w-12 h-12 rounded-full bg-pink-light flex items-center justify-center">
                  <Phone className="h-6 w-6 text-pink-deep" />
                </div>
                <div>
                  <div className="font-medium text-foreground">الهاتف</div>
                  <div className="text-muted-foreground">+966 50 123 4567</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="w-12 h-12 rounded-full bg-pink-light flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-pink-deep" />
                </div>
                <div>
                  <div className="font-medium text-foreground">العنوان</div>
                  <div className="text-muted-foreground">شارع الموضة 123، الرياض، المملكة العربية السعودية</div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-12">
              <h4 className="text-lg font-semibold text-foreground mb-4">تابعنا</h4>
              <div className="flex space-x-4 space-x-reverse">
                <button className="w-10 h-10 rounded-full bg-pink-light hover:bg-pink-soft transition-colors flex items-center justify-center">
                  <Instagram className="h-5 w-5 text-pink-deep" />
                </button>
                <button className="w-10 h-10 rounded-full bg-pink-light hover:bg-pink-soft transition-colors flex items-center justify-center">
                  <Facebook className="h-5 w-5 text-pink-deep" />
                </button>
                <button className="w-10 h-10 rounded-full bg-pink-light hover:bg-pink-soft transition-colors flex items-center justify-center">
                  <Twitter className="h-5 w-5 text-pink-deep" />
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="gradient-card rounded-2xl p-8 shadow-soft">
            <h3 className="text-2xl font-semibold text-foreground mb-6">أرسل لنا رسالة</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    الاسم الأول
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="اسمك الأول"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    اسم العائلة
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="اسم عائلتك"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  الرسالة
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="رسالتك هنا..."
                />
              </div>
              
              <button className="btn-elegant w-full">
                إرسال الرسالة
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;