import { CafeInfo, MenuItem, Review } from '@/types';

// Server-side data fetching - simulating Google Business API data
export async function getCafeInfo(): Promise<CafeInfo> {
  // In production, this would fetch from Google Places API
  return {
    name: "Amaar Coffee",
    address: "391 Fore Street, Upper Edmonton, London N9 0NR",
    phone: "020 3929 7663",
    hours: "Monday - Sunday: 6:00 AM - 10:00 PM",
    rating: 4.8,
    totalReviews: 247,
    photos: [
      "/images/pic2.jpg",
      "/images/pic3.jpg",
      "/images/pic4.jpg",
      "/images/pic5.jpg"
    ]
  };
}

export async function getMenuItems(): Promise<MenuItem[]> {
  // Server-side menu data based on actual Amaar Coffee Uber Eats menu
  return [
    // Hot Drinks
    {
      id: '1',
      name: 'Americano',
      description: 'Rich espresso with hot water',
      price: 2.50,
      category: 'coffee'
    },
    {
      id: '2',
      name: 'Cappuccino',
      description: 'Perfect balance of espresso, steamed milk and foam',
      price: 3.00,
      category: 'coffee'
    },
    {
      id: '3',
      name: 'Latte',
      description: 'Smooth espresso with steamed milk and beautiful latte art',
      price: 3.50,
      category: 'coffee'
    },
    {
      id: '4',
      name: 'Flat White',
      description: 'Double shot espresso with microfoam milk',
      price: 3.50,
      category: 'coffee'
    },
    {
      id: '5',
      name: 'Mocha',
      description: 'Espresso with chocolate and steamed milk',
      price: 4.00,
      category: 'coffee'
    },
    {
      id: '6',
      name: 'Hot Chocolate',
      description: 'Rich and creamy hot chocolate',
      price: 3.50,
      category: 'coffee'
    },
    {
      id: '7',
      name: 'Turkish Coffee',
      description: 'Traditional Turkish coffee served with Turkish delight',
      price: 4.50,
      category: 'coffee'
    },
    {
      id: '8',
      name: 'Espresso',
      description: 'Strong and bold single shot espresso',
      price: 2.00,
      category: 'coffee'
    },
    {
      id: '9',
      name: 'Double Espresso',
      description: 'Double shot of rich espresso',
      price: 2.50,
      category: 'coffee'
    },
    {
      id: '10',
      name: 'Macchiato',
      description: 'Espresso with a dollop of steamed milk foam',
      price: 3.00,
      category: 'coffee'
    },
    // Cold Drinks
    {
      id: '11',
      name: 'Iced Coffee',
      description: 'Refreshing cold brew coffee',
      price: 3.00,
      category: 'coffee'
    },
    {
      id: '12',
      name: 'Iced Latte',
      description: 'Cold espresso with chilled milk over ice',
      price: 3.50,
      category: 'coffee'
    },
    {
      id: '13',
      name: 'Iced Americano',
      description: 'Espresso with cold water over ice',
      price: 2.50,
      category: 'coffee'
    },
    {
      id: '14',
      name: 'Frappuccino',
      description: 'Blended coffee drink with ice and cream',
      price: 4.50,
      category: 'coffee'
    },
    {
      id: '15',
      name: 'Cold Brew',
      description: 'Smooth cold-brewed coffee',
      price: 3.50,
      category: 'coffee'
    },
    // Teas
    {
      id: '16',
      name: 'English Breakfast Tea',
      description: 'Classic black tea blend',
      price: 2.00,
      category: 'tea'
    },
    {
      id: '17',
      name: 'Earl Grey',
      description: 'Bergamot-flavored black tea',
      price: 2.00,
      category: 'tea'
    },
    {
      id: '18',
      name: 'Green Tea',
      description: 'Fresh and light green tea',
      price: 2.00,
      category: 'tea'
    },
    {
      id: '19',
      name: 'Chamomile Tea',
      description: 'Soothing herbal tea',
      price: 2.50,
      category: 'tea'
    },
    {
      id: '20',
      name: 'Mint Tea',
      description: 'Refreshing mint herbal tea',
      price: 2.50,
      category: 'tea'
    },
    {
      id: '21',
      name: 'Chai Latte',
      description: 'Spiced tea with steamed milk',
      price: 3.50,
      category: 'tea'
    },
    // Breakfast Items
    {
      id: '22',
      name: 'Full English Breakfast',
      description: 'Eggs, bacon, sausage, beans, toast, and hash browns',
      price: 8.50,
      category: 'food'
    },
    {
      id: '23',
      name: 'Eggs Benedict',
      description: 'Poached eggs on English muffin with hollandaise sauce',
      price: 7.50,
      category: 'food'
    },
    {
      id: '24',
      name: 'Scrambled Eggs on Toast',
      description: 'Fluffy scrambled eggs on buttered toast',
      price: 5.50,
      category: 'food'
    },
    {
      id: '25',
      name: 'Avocado Toast',
      description: 'Fresh avocado on sourdough with seasoning',
      price: 6.50,
      category: 'food'
    },
    {
      id: '26',
      name: 'Pancakes',
      description: 'Stack of fluffy pancakes with syrup',
      price: 6.00,
      category: 'food'
    },
    {
      id: '27',
      name: 'French Toast',
      description: 'Golden French toast with butter and syrup',
      price: 6.50,
      category: 'food'
    },
    // Sandwiches & Light Meals
    {
      id: '28',
      name: 'Club Sandwich',
      description: 'Triple-decker with chicken, bacon, lettuce, and tomato',
      price: 7.50,
      category: 'food'
    },
    {
      id: '29',
      name: 'BLT Sandwich',
      description: 'Bacon, lettuce, and tomato on toasted bread',
      price: 6.00,
      category: 'food'
    },
    {
      id: '30',
      name: 'Grilled Chicken Panini',
      description: 'Grilled chicken with cheese and vegetables',
      price: 7.00,
      category: 'food'
    },
    {
      id: '31',
      name: 'Tuna Melt',
      description: 'Tuna salad with melted cheese on toasted bread',
      price: 6.50,
      category: 'food'
    },
    {
      id: '32',
      name: 'Vegetarian Wrap',
      description: 'Fresh vegetables and hummus in a tortilla wrap',
      price: 5.50,
      category: 'food'
    },
    {
      id: '33',
      name: 'Caesar Salad',
      description: 'Crisp romaine lettuce with Caesar dressing and croutons',
      price: 6.00,
      category: 'food'
    },
    // Pastries & Desserts
    {
      id: '34',
      name: 'Croissant',
      description: 'Buttery, flaky French croissant',
      price: 2.50,
      category: 'pastry'
    },
    {
      id: '35',
      name: 'Pain au Chocolat',
      description: 'Croissant filled with rich chocolate',
      price: 3.00,
      category: 'pastry'
    },
    {
      id: '36',
      name: 'Almond Croissant',
      description: 'Croissant filled with almond cream',
      price: 3.50,
      category: 'pastry'
    },
    {
      id: '37',
      name: 'Danish Pastry',
      description: 'Sweet pastry with fruit or cream filling',
      price: 3.00,
      category: 'pastry'
    },
    {
      id: '38',
      name: 'Muffin',
      description: 'Fresh baked muffins - blueberry, chocolate chip, or banana',
      price: 2.50,
      category: 'pastry'
    },
    {
      id: '39',
      name: 'Scone',
      description: 'Traditional British scone with jam and cream',
      price: 3.00,
      category: 'pastry'
    },
    {
      id: '40',
      name: 'Cheesecake Slice',
      description: 'Rich and creamy New York style cheesecake',
      price: 4.50,
      category: 'pastry'
    },
    {
      id: '41',
      name: 'Chocolate Brownie',
      description: 'Fudgy chocolate brownie',
      price: 3.50,
      category: 'pastry'
    },
    {
      id: '42',
      name: 'Carrot Cake',
      description: 'Moist carrot cake with cream cheese frosting',
      price: 4.00,
      category: 'pastry'
    },
    {
      id: '43',
      name: 'Baklava',
      description: 'Traditional Middle Eastern pastry with nuts and honey',
      price: 3.50,
      category: 'pastry'
    },
    {
      id: '44',
      name: 'Tiramisu',
      description: 'Classic Italian coffee-flavored dessert',
      price: 4.50,
      category: 'pastry'
    },
    {
      id: '45',
      name: 'Donut',
      description: 'Fresh glazed or filled donuts',
      price: 2.00,
      category: 'pastry'
    },
    // Drinks - Milkshakes & Smoothies
    {
      id: '46',
      name: 'Vanilla Milkshake',
      description: 'Creamy vanilla ice cream blended with milk',
      price: 4.50,
      category: 'drinks'
    },
    {
      id: '47',
      name: 'Chocolate Milkshake',
      description: 'Rich chocolate ice cream milkshake',
      price: 4.50,
      category: 'drinks'
    },
    {
      id: '48',
      name: 'Strawberry Milkshake',
      description: 'Fresh strawberry milkshake with real fruit',
      price: 4.50,
      category: 'drinks'
    },
    {
      id: '49',
      name: 'Banana Milkshake',
      description: 'Creamy banana milkshake',
      price: 4.50,
      category: 'drinks'
    },
    {
      id: '50',
      name: 'Oreo Milkshake',
      description: 'Vanilla milkshake blended with Oreo cookies',
      price: 5.00,
      category: 'drinks'
    },
    {
      id: '51',
      name: 'Mango Smoothie',
      description: 'Fresh mango blended with yogurt and honey',
      price: 4.00,
      category: 'drinks'
    },
    {
      id: '52',
      name: 'Berry Smoothie',
      description: 'Mixed berries with yogurt and banana',
      price: 4.00,
      category: 'drinks'
    },
    {
      id: '53',
      name: 'Green Smoothie',
      description: 'Spinach, apple, banana, and pineapple blend',
      price: 4.50,
      category: 'drinks'
    },
    {
      id: '54',
      name: 'Tropical Smoothie',
      description: 'Pineapple, mango, and coconut smoothie',
      price: 4.50,
      category: 'drinks'
    },
    {
      id: '55',
      name: 'Protein Smoothie',
      description: 'Banana, peanut butter, and protein powder',
      price: 5.50,
      category: 'drinks'
    },
    {
      id: '56',
      name: 'Fresh Orange Juice',
      description: 'Freshly squeezed orange juice',
      price: 3.50,
      category: 'drinks'
    },
    {
      id: '57',
      name: 'Apple Juice',
      description: 'Pure apple juice',
      price: 3.00,
      category: 'drinks'
    },
    {
      id: '58',
      name: 'Lemonade',
      description: 'Fresh homemade lemonade',
      price: 3.00,
      category: 'drinks'
    },
    {
      id: '59',
      name: 'Sparkling Water',
      description: 'Refreshing sparkling water',
      price: 2.00,
      category: 'drinks'
    },
    {
      id: '60',
      name: 'Still Water',
      description: 'Pure still water',
      price: 1.50,
      category: 'drinks'
    }
  ];
}

export async function getReviews(): Promise<Review[]> {
  // Server-side reviews data
  return [
    {
      id: '1',
      author: 'Sarah M.',
      rating: 5,
      text: 'Amazing coffee and atmosphere! The baristas really know their craft. My go-to spot for morning coffee.',
      date: '2024-01-15'
    },
    {
      id: '2',
      author: 'Mike R.',
      rating: 5,
      text: 'Best latte art in the city! The cold brew is exceptional too. Highly recommend the avocado toast.',
      date: '2024-01-12'
    },
    {
      id: '3',
      author: 'Emma L.',
      rating: 4,
      text: 'Cozy place with great coffee. Perfect for working or catching up with friends. Love the outdoor seating.',
      date: '2024-01-10'
    },
    {
      id: '4',
      author: 'David K.',
      rating: 5,
      text: 'Outstanding service and quality. The signature espresso is a must-try. Will definitely be back!',
      date: '2024-01-08'
    },
    {
      id: '5',
      author: 'Lisa T.',
      rating: 5,
      text: 'Fresh pastries and excellent coffee. The staff is friendly and the ambiance is perfect for relaxation.',
      date: '2024-01-05'
    }
  ];
}