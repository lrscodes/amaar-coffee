'use client';

import { useState } from 'react';
import { MenuItem } from '@/types';
import Image from 'next/image';

interface MenuSectionProps {
  items: MenuItem[];
}

export default function MenuSection({ items }: MenuSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('coffee');
  
  const categories = [
    { id: 'coffee', name: 'Coffee', icon: '☕' },
    { id: 'tea', name: 'Tea', icon: '🍵' },
    { id: 'food', name: 'Food', icon: '🥪' },
    { id: 'treats', name: 'Treats', icon: '🧁' },
    { id: 'drinks', name: 'Drinks', icon: '🥤' }
  ];
  
  const filteredItems = items.filter(item => 
    selectedCategory === 'treats' ? item.category === 'pastry' : item.category === selectedCategory
  );

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-amber-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
            Our Menu
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Crafted with premium ingredients and served with passion
          </p>
        </div>
        
        {/* Modern Category Tabs - Mobile Optimized */}
        <div className="mb-6 sm:mb-8">
          <div className="flex justify-center">
            <div className="inline-flex bg-white/80 backdrop-blur-sm rounded-2xl p-1 shadow-lg border border-amber-100/50 overflow-x-auto scrollbar-hide">
              <div className="flex space-x-1 min-w-max px-1">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-1.5 sm:space-x-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-300 whitespace-nowrap ${
                      selectedCategory === category.id
                        ? 'bg-amber-700 text-white shadow-md transform scale-105'
                        : 'text-gray-600 hover:text-amber-700 hover:bg-amber-50/50'
                    }`}
                  >
                    <span className="text-sm sm:text-base">{category.icon}</span>
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Menu Items Container - Optimized for Mobile */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl border border-amber-100/50 overflow-hidden">
          {/* Category Header */}
          <div className="bg-gradient-to-r from-amber-700 to-amber-600 px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <span className="text-lg sm:text-xl">
                  {categories.find(cat => cat.id === selectedCategory)?.icon}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white capitalize">
                  {categories.find(cat => cat.id === selectedCategory)?.name}
                </h3>
              </div>
              <div className="text-xs sm:text-sm text-amber-100 font-medium">
                {filteredItems.length} items
              </div>
            </div>
          </div>
          
          {/* Scrollable Menu Items */}
          <div className="h-[60vh] sm:h-[65vh] lg:h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-amber-300 scrollbar-track-amber-50">
            <div className="p-3 sm:p-4 lg:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                {filteredItems.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100/50 hover:border-amber-200 transform hover:scale-[1.02]"
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: 'fadeInUp 0.6s ease-out forwards'
                    }}
                  >
                    {/* Item Image - Conditional rendering */}
                    {item.image && (
                      <div className="relative h-32 sm:h-36 lg:h-40 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    )}
                    
                    {/* Item Content */}
                    <div className="p-3 sm:p-4">
                      {/* Name and Price */}
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base leading-tight group-hover:text-amber-700 transition-colors">
                          {item.name}
                        </h4>
                        <div className="flex-shrink-0 ml-2">
                          <span className="text-lg sm:text-xl font-bold text-amber-700 bg-amber-50 px-2 py-1 rounded-lg">
                            £{item.price.toFixed(2)}
                          </span>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3 line-clamp-2">
                        {item.description}
                      </p>
                      
                      {/* Category Badge */}
                      <div className="flex justify-between items-center">
                        <span className="inline-flex items-center px-2 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full">
                          {item.category === 'pastry' ? 'treats' : item.category}
                        </span>
                        
                        {/* Add to Order Button - Future Enhancement */}
                        <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-amber-700 hover:text-amber-800 text-xs font-medium">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Empty State */}
              {filteredItems.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-4xl mb-4">🔍</div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No items found</h3>
                  <p className="text-gray-600">Try selecting a different category</p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-6 sm:mt-8">
          <p className="text-sm sm:text-base text-gray-600 mb-4">
            Ready to order? Choose your preferred delivery method
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <a 
              href="https://www.just-eat.co.uk/restaurants-amaar-coffee-upper-edmonton/menu?serviceType=collection&utm_source=google&utm_medium=organic&utm_campaign=foodorder"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Order on Just Eat
            </a>
            <a 
              href="https://www.ubereats.com/gb/store/amaar-coffee/eZG0_QKJV-2yBQCdiYM0sQ?srsltid=AfmBOopFD0bble5kFw6apUkjW4RjYCcEnSJerIy7uKu0t_zylJeiy90b"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Order on Uber Eats
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}