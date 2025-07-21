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
            <span key={i} className={`text-base sm:text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'} transition-colors duration-300`}>
                ★
            </span>
        ));
    };

    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-amber-50/30 to-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-32 h-32 bg-amber-300 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-amber-400 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">
                        What Our <span className="text-amber-700">Customers</span> Say
                    </h2>

                    {/* Overall Rating */}
                    <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-white/80 backdrop-blur-sm rounded-2xl px-6 sm:px-8 py-4 sm:py-5 shadow-lg border border-amber-100/50">
                        <div className="flex items-center space-x-2">
                            <div className="flex">
                                {renderStars(Math.floor(rating))}
                            </div>
                            <span className="text-xl sm:text-2xl font-bold text-gray-900">{rating}</span>
                        </div>
                        <div className="text-center sm:text-left">
                            <p className="text-sm sm:text-base text-gray-600 font-medium">
                                Excellent rating from {totalReviews} happy customers
                            </p>
                        </div>
                    </div>
                </div>

                {/* Reviews Grid - Mobile Optimized */}
                <div className="mb-8 sm:mb-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {displayedReviews.map((review, index) => (
                            <div
                                key={review.id}
                                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl border border-amber-100/50 hover:border-amber-200/50 transition-all duration-500 transform hover:scale-[1.02]"
                                style={{
                                    animationDelay: `${index * 150}ms`,
                                    animation: 'fadeInUp 0.8s ease-out forwards'
                                }}
                            >
                                {/* Review Header */}
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 mb-4">
                                    <div className="flex items-center space-x-2">
                                        <div className="flex">
                                            {renderStars(review.rating)}
                                        </div>
                                    </div>
                                    <span className="text-xs sm:text-sm text-gray-500 font-medium">
                                        {new Date(review.date).toLocaleDateString('en-GB', {
                                            day: 'numeric',
                                            month: 'short',
                                            year: 'numeric'
                                        })}
                                    </span>
                                </div>

                                {/* Review Text */}
                                <blockquote className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 italic">
                                    &ldquo;{review.text}&rdquo;
                                </blockquote>

                                {/* Author */}
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                                        {review.author.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-sm sm:text-base font-semibold text-gray-900">
                                            {review.author}
                                        </p>
                                        <p className="text-xs sm:text-sm text-gray-500">
                                            Verified Customer
                                        </p>
                                    </div>
                                </div>

                                {/* Hover decoration */}
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Show More/Less Button */}
                {reviews.length > 3 && (
                    <div className="text-center">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <span>
                                {showAll ? 'Show Less Reviews' : `Read All ${reviews.length} Reviews`}
                            </span>
                            <span className={`transform transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}>
                                ↓
                            </span>
                        </button>
                    </div>
                )}

                {/* Trust Indicators */}
                <div className="mt-8 sm:mt-12 lg:mt-16">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                        {[
                            { icon: '⭐', text: '4.8/5 Rating', subtext: 'Excellent' },
                            { icon: '👥', text: `${totalReviews}+ Reviews`, subtext: 'Happy Customers' },
                            { icon: '🏆', text: 'Top Rated', subtext: 'Local Favorite' },
                            { icon: '💯', text: '100% Authentic', subtext: 'Real Reviews' }
                        ].map((item, index) => (
                            <div key={index} className="text-center p-3 sm:p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-amber-100/50">
                                <div className="text-xl sm:text-2xl mb-2">{item.icon}</div>
                                <div className="text-xs sm:text-sm font-bold text-gray-900 mb-1">{item.text}</div>
                                <div className="text-xs text-gray-600">{item.subtext}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}