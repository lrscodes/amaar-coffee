'use client';

import { useState } from 'react';
import { MenuItem } from '@/types';
import Image from 'next/image';

interface MenuSectionProps {
  items: MenuItem[];
}

export default function MenuSection({ items }: MenuSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const categories = ['all', 'coffee', 'tea', 'food', 'treats', 'drinks'];
  const filteredItems = selectedCategory === 'all' 
    ? items 
    : items.filter(item => selectedCategory === 'treats' ? item.category === 'pastry' : item.category === selectedCategory);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Menu</h2>
        
        {/* Category Filter */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 bg-white rounded-lg p-1 shadow-md">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md capitalize transition-colors ${
                  selectedCategory === category
                    ? 'bg-amber-700 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {item.image && (
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <span className="text-lg font-bold text-amber-700">£{item.price.toFixed(2)}</span>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
                <span className="inline-block mt-2 px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full capitalize">
                  {item.category === 'pastry' ? 'treats' : item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}