'use client';

import { useState } from 'react';
import { Review } from '@/types';

interface ReviewsSectionProps {
    reviews: Review[];
    rating: number;
    totalReviews: number;
}

export default function ReviewsSection({ reviews, rating, totalReviews }: ReviewsSectionProps) {
    const [showAll, setShowAll] = useState(false);
    const displayedReviews = showAll ? reviews : reviews.slice(0, 3);

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                ★
            </span>
        ));
    };

    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">What Our Customers Say</h2>
                    <div className="flex items-center justify-center space-x-2 mb-2">
                        {renderStars(Math.floor(rating))}
                        <span className="text-xl font-semibold text-gray-700">{rating}</span>
                    </div>
                    <p className="text-gray-600">Based on {totalReviews} reviews</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {displayedReviews.map((review) => (
                        <div key={review.id} className="bg-gray-50 rounded-lg p-6 shadow-sm">
                            <div className="flex items-center mb-3">
                                <div className="flex mr-2">
                                    {renderStars(review.rating)}
                                </div>
                                <span className="text-sm text-gray-500">
                                    {new Date(review.date).toLocaleDateString()}
                                </span>
                            </div>
                            <p className="text-gray-700 mb-3 italic">"{review.text}"</p>
                            <p className="text-sm font-semibold text-gray-800">- {review.author}</p>
                        </div>
                    ))}
                </div>

                {reviews.length > 3 && (
                    <div className="text-center">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="bg-amber-700 text-white px-6 py-2 rounded-lg hover:bg-amber-800 transition-colors"
                        >
                            {showAll ? 'Show Less' : `Show All ${reviews.length} Reviews`}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}