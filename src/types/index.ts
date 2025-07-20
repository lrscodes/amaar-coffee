export interface CafeInfo {
  name: string;
  address: string;
  phone: string;
  hours: string;
  rating: number;
  totalReviews: number;
  photos: string[];
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'coffee' | 'tea' | 'food' | 'pastry' | 'drinks';
  image?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}