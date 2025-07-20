import Image from "next/image";
import { getCafeInfo, getMenuItems, getReviews } from '@/lib/data';
import MenuSection from '@/components/MenuSection';
import ReviewsSection from '@/components/ReviewsSection';

// Server Component - data is fetched on the server
export default async function Home() {
  // Server-side data fetching - runs on server, not in browser
  const [cafeInfo, menuItems, reviews] = await Promise.all([
    getCafeInfo(),
    getMenuItems(),
    getReviews()
  ]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-page-1.jpeg"
            alt="Amaar Coffee - Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-amber-900/30 to-amber-800/40"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 py-6 h-full min-h-screen">
          {/* Logo - Responsive sizing */}
          <div className="flex-shrink-0 mb-4 sm:mb-6">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 mx-auto relative">
              <Image
                src="/images/logo-round.png"
                alt="Amaar Coffee Logo"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
          
          {/* Brand Name - Responsive typography */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 drop-shadow-lg tracking-tight">
            {cafeInfo.name}
          </h1>
          
          {/* Tagline - Responsive and concise */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto drop-shadow-md leading-relaxed opacity-90">
            Premium coffee crafted with passion
          </p>
          
          {/* Action Buttons - Mobile-first grid */}
          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg space-y-3 sm:space-y-4">
            {/* Primary Actions - Full width on mobile, side by side on larger screens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a 
                href="#menu" 
                className="bg-amber-700/90 hover:bg-amber-800 backdrop-blur-sm text-white px-6 py-3.5 sm:py-4 rounded-2xl font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] text-center border border-amber-600/20"
              >
                View Menu
              </a>
              <a 
                href="#contact" 
                className="bg-amber-600/90 hover:bg-amber-700 backdrop-blur-sm text-white px-6 py-3.5 sm:py-4 rounded-2xl font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] text-center border border-amber-500/20"
              >
                Visit Us
              </a>
            </div>
            
            {/* Delivery Options - Compact on mobile */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-2">
              <a 
                href="https://www.just-eat.co.uk/restaurants-amaar-coffee-upper-edmonton/menu?serviceType=collection&utm_source=google&utm_medium=organic&utm_campaign=foodorder"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-900/80 hover:bg-amber-950 backdrop-blur-sm text-white px-4 py-2.5 sm:py-3 rounded-xl font-medium text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98] text-center border border-amber-800/20"
              >
                Just Eat
              </a>
              <a 
                href="https://www.ubereats.com/gb/store/amaar-coffee/eZG0_QKJV-2yBQCdiYM0sQ?srsltid=AfmBOopFD0bble5kFw6apUkjW4RjYCcEnSJerIy7uKu0t_zylJeiy90b"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-900/80 hover:bg-amber-950 backdrop-blur-sm text-white px-4 py-2.5 sm:py-3 rounded-xl font-medium text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98] text-center border border-amber-800/20"
              >
                Uber Eats
              </a>
            </div>
          </div>
          
          {/* Scroll indicator - Only show on larger screens */}
          <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Mobile First Design */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-amber-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <div className="max-w-xl">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight">
                  Welcome to <span className="text-amber-700">{cafeInfo.name}</span>
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  At Amaar Coffee, we believe that great coffee brings people together. Our expert baristas 
                  carefully craft each cup using premium, ethically-sourced beans roasted to perfection.
                </p>
                
                {/* Rating */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="flex text-yellow-400">
                      {Array.from({ length: 5 }, (_, i) => (
                        <span key={i} className={`text-lg sm:text-xl ${i < Math.floor(cafeInfo.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-lg sm:text-xl font-bold text-gray-900">{cafeInfo.rating}</span>
                  </div>
                  <span className="text-sm sm:text-base text-gray-600">
                    Based on {cafeInfo.totalReviews} customer reviews
                  </span>
                </div>

                {/* Key Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { icon: '☕', text: 'Premium Coffee' },
                    { icon: '🌱', text: 'Ethically Sourced' },
                    { icon: '👨‍🍳', text: 'Expert Baristas' },
                    { icon: '🏠', text: 'Cozy Atmosphere' }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-amber-100/50">
                      <span className="text-lg sm:text-xl">{feature.icon}</span>
                      <span className="text-sm sm:text-base font-medium text-gray-700">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Gallery - Mobile Optimized */}
            <div className="order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
                {cafeInfo.photos.slice(0, 4).map((photo, index) => (
                  <div 
                    key={index} 
                    className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] ${
                      index === 0 ? 'h-32 sm:h-40 lg:h-48' : 
                      index === 1 ? 'h-24 sm:h-32 lg:h-40' :
                      index === 2 ? 'h-24 sm:h-32 lg:h-40' :
                      'h-32 sm:h-40 lg:h-48'
                    }`}
                  >
                    <Image
                      src={photo}
                      alt={`Amaar Coffee atmosphere ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
              
              {/* Gallery Caption */}
              <div className="text-center mt-4 sm:mt-6">
                <p className="text-xs sm:text-sm text-gray-500 italic">
                  Experience our warm and inviting atmosphere
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section - Client Component */}
      <div id="menu">
        <MenuSection items={menuItems} />
      </div>

      {/* Reviews Section - Client Component */}
      <ReviewsSection 
        reviews={reviews} 
        rating={cafeInfo.rating} 
        totalReviews={cafeInfo.totalReviews} 
      />

      {/* Contact Section - Mobile First */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              Visit <span className="text-amber-400">Amaar Coffee</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto">
              Located in Upper Edmonton, we&apos;re easily accessible and ready to serve you
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              {[
                {
                  icon: '📍',
                  title: 'Address',
                  content: cafeInfo.address,
                  action: 'Get Directions'
                },
                {
                  icon: '📞',
                  title: 'Phone',
                  content: cafeInfo.phone,
                  action: 'Call Now'
                },
                {
                  icon: '🕒',
                  title: 'Opening Hours',
                  content: cafeInfo.hours,
                  action: null
                }
              ].map((item, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-700/50 hover:border-amber-500/30 transition-all duration-300 hover:bg-gray-700/50">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-amber-500/20 rounded-xl flex items-center justify-center group-hover:bg-amber-500/30 transition-colors duration-300">
                          <span className="text-xl sm:text-2xl">{item.icon}</span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{item.title}</h3>
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-3">{item.content}</p>
                        {item.action && (
                          <button className="text-xs sm:text-sm text-amber-400 hover:text-amber-300 font-medium transition-colors duration-300">
                            {item.action} →
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map and Directions */}
            <div className="lg:pl-8">
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-gray-700/50 shadow-2xl">
                <div className="text-center mb-6 sm:mb-8">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-amber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl sm:text-3xl">🗺️</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Find Us Easily</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    We&apos;re located in the heart of Upper Edmonton with convenient parking and public transport links
                  </p>
                </div>

                {/* Quick Info Cards */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  {[
                    { icon: '🚗', text: 'Free Parking' },
                    { icon: '🚌', text: 'Bus Routes' },
                    { icon: '♿', text: 'Accessible' },
                    { icon: '📶', text: 'Free WiFi' }
                  ].map((feature, index) => (
                    <div key={index} className="bg-gray-700/50 rounded-xl p-3 text-center border border-gray-600/30">
                      <div className="text-lg sm:text-xl mb-1">{feature.icon}</div>
                      <div className="text-xs sm:text-sm text-gray-300 font-medium">{feature.text}</div>
                    </div>
                  ))}
                </div>

                {/* Directions Button */}
                <a 
                  href="https://www.google.com/maps/place/Amaar+Coffee/@51.6151654,-0.0639887,17z/data=!3m1!4b1!4m6!3m5!1s0x48761fa2d7faa38b:0x8a0f1cb69be92f95!8m2!3d51.6151654!4d-0.0639887!16s%2Fg%2F11sd7p6w3s?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-6 py-4 rounded-2xl font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] text-center block"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>Open in Google Maps</span>
                    <span className="text-lg">🗺️</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">{cafeInfo.name}</h3>
          <p className="text-gray-400 mb-4">Crafting exceptional coffee experiences since day one</p>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://www.instagram.com/amaarcoffee/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Instagram
            </a>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700">
            <p className="text-gray-400 text-sm">© 2024 Amaar Coffee. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
