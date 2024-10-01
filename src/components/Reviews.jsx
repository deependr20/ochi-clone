import { div } from 'framer-motion/m';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Reviews = () => {
    // Track which review is expanded
    const [expandedReview, setExpandedReview] = useState(null);

    // Array of reviews
    const reviews = [
        { company: 'Karman Ventures', src:'https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png', author: 'Moris Ghosh', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non mauris eget neque fermentum congue.' },
        { company: 'TechNova', src:'https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png', author: 'Sarah Smith', content: 'Donec vel est id nisi consectetur ultricies vel vel nunc. Donec convallis massa sed enim condimentum.' },
        { company: 'Horizon Group', src:'https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png', author: 'James Rohes', content: 'Nulla facilisi. Sed sagittis, lectus vel condimentum consectetur, nulla velit ultricies neque.' },
        { company: 'Velocity Inc.', src:'https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png', author: 'Sahil Force', content: 'Integer ut justo vel est placerat scelerisque. Nullam vel turpis at justo ultricies bibendum.' },
        { company: 'Stratosphere Corp.',src:'https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png', author: 'David Smith', content: 'Aliquam erat volutpat. Donec vel justo id libero laoreet laoreet sit amet ac nisl.' }
    ];

    return (
        <div   className="w-full  py-12 bg-[#F1F1F1]">
            <div className="px-12 w-full">
                <h1 className="text-6xl mb-12">Clients’ reviews</h1>
            </div>

            {/* Render the reviews dynamically */}
            {reviews.map((review, index) => (
                <div key={index} className={`border-t-[1px] ${index === reviews.length - 1 ? "border-b-[1px]" : ""} px-12 w-full border-zinc-400`}>
                    <div className="flex justify-between  items-center py-6">
                        <h1>{review.company}</h1>
                        <h1 className=''>{review.author}</h1>
                        <Link onClick={() => setExpandedReview(expandedReview === index ? null : index)}>
                            {expandedReview === index ? 'CLOSE' : 'READ'}
                        </Link>
                    </div>
                    {/* Conditionally render the content when a review is expanded */}
                    {expandedReview === index && (
                        <div className="w-full py-5">
                            <div className="flex justify-between items-center">
                                <h1 className="text-xl mb-4">{review.company}</h1>
                                <h1 className="text-xl">{review.author}</h1>
                            </div>
                            <div className="text-xl">
                                <p>{review.content}</p>
                            </div>
                            <img className='w-52 h-40' src={review.src} alt="" />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Reviews;
