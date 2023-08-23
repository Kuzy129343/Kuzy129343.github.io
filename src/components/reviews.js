import React, { useState } from 'react';

const Reviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const reviewItems = [
        'Feedback from a client in 5-6 lines feedback from a client feedback from a client Feedback from a client in 5-6 lines feedback from a client feedback from a client Feedback from a client in 5-6 lines feedback from a client feedback from a client m a client in 5-6 lines feedback from a client feedback from a client',
        'Another feedback from a different client in 5-6 lines feedback from a client feedback from a client Feedback from a client in 5-6 lines feedback from a client feedback from a client Feedback from a client in 5-6 lines feedback from a client feedback from a client m a client in 5-6 lines feedback from a client feedback from a client',
        'Yet another feedback from yet another different client in 5-6 lines feedback from a client feedback from a client Feedback from a client in 5-6 lines feedback from a client feedback from a client Feedback from a client in 5-6 lines feedback from a client feedback from a client m a client in 5-6 lines feedback from a client feedback from a client'
    ];

    const handlePrevClick = () => {
        setCurrentIndex((currentIndex - 1 + reviewItems.length) % reviewItems.length);
    };

    const handleNextClick = () => {
        setCurrentIndex((currentIndex + 1) % reviewItems.length);
    };

    return (
        <section className="reviews">
            <div className="container">
                <div className="review-title">
                    <h1>Only real testimonials</h1>
                </div>

                <div className="review-holder">
                    <div className="review-image">
                        <img className="review-img" src="/asset/rev.png" alt="" />
                    </div>

                    <div className="review-items">
                        {reviewItems.map((item, index) => (
                            <div key={index} className={`review-item ${index === currentIndex ? 'active' : ''}`}>
                                <p>{item}</p>
                            </div>
                        ))}
                        <div className="review-scrol">
                            <button className="scrol-btn prev" onClick={handlePrevClick}><img className="scrol-img" src="/asset/arrow.png" alt="" /></button>
                            <h2><span className="current-review">{currentIndex + 1}</span>/<span className="total-reviews">{reviewItems.length}</span></h2>
                            <button className="scrol-btn next" onClick={handleNextClick}><img className="scrol scrol-img" src="/asset/arrow.png" alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Reviews;
