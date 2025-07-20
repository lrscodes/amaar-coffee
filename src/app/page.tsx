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
        <div className="relative z-10 text-center text-white px-4 py-8 max-w-4xl mx-auto">
          <div className="mb-2">
            <div className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[32rem] lg:h-[32rem] mx-auto mb-2 relative flex items-center justify-center">
              <Image
                src="/images/logo-round.png"
                alt="Amaar Coffee Logo"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 drop-shadow-lg">{cafeInfo.name}</h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md leading-relaxed">
            Experience the finest coffee crafted with passion and served with love
          </p>
          <div className="flex flex-col gap-4 justify-center items-center max-w-lg mx-auto">
            {/* Primary Actions */}
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <a 
                href="#menu" 
                className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex-1 text-center"
              >
                View Menu
              </a>
              <a 
                href="#contact" 
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex-1 text-center"
              >
                Visit Us
              </a>
            </div>
            {/* Delivery Options */}
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <a 
                href="https://www.just-eat.co.uk/restaurants-amaar-coffee-upper-edmonton/menu?serviceType=collection&utm_source=google&utm_medium=organic&utm_campaign=foodorder"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-900 hover:bg-amber-950 text-white px-6 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 flex-1"
              >
                Just Eat
              </a>
              <a 
                href="https://www.ubereats.com/gb/store/amaar-coffee/eZG0_QKJV-2yBQCdiYM0sQ?srsltid=AfmBOopFD0bble5kFw6apUkjW4RjYCcEnSJerIy7uKu0t_zylJeiy90b"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-900 hover:bg-amber-950 text-white px-6 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 flex-1"
              >
                Uber Eats
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Welcome to {cafeInfo.name}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Amaar Coffee, we believe that great coffee brings people together. Our expert baristas 
                carefully craft each cup using premium, ethically-sourced beans roasted to perfection. 
                Whether you're starting your day, meeting friends, or finding a quiet moment to work, 
                our warm and inviting atmosphere makes every visit special.
              </p>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex text-yellow-400">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} className={`text-xl ${i < Math.floor(cafeInfo.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-lg font-semibold text-gray-700">{cafeInfo.rating}</span>
                <span className="text-gray-600">({cafeInfo.totalReviews} reviews)</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {cafeInfo.photos.slice(0, 4).map((photo, index) => (
                <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src={photo}
                    alt={`Amaar Coffee ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
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

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Visit Us Today</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-amber-400 mt-1">📍</div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-gray-300">{cafeInfo.address}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-amber-400 mt-1">📞</div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-300">{cafeInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-amber-400 mt-1">🕒</div>
                  <div>
                    <h3 className="font-semibold mb-1">Hours</h3>
                    <p className="text-gray-300">{cafeInfo.hours}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Get Directions</h3>
              <p className="text-gray-300 mb-6">
                Located in the heart of downtown, we're easily accessible by car or public transport. 
                Street parking and nearby parking garages available.
              </p>
              <a 
                href="https://www.google.com/maps/place/Amaar+Coffee/@51.6151654,-0.0639887,17z/data=!3m1!4b1!4m6!3m5!1s0x48761fa2d7faa38b:0x8a0f1cb69be92f95!8m2!3d51.6151654!4d-0.0639887!16s%2Fg%2F11sd7p6w3s?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full text-center block"
              >
                Open in Maps
              </a>
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
