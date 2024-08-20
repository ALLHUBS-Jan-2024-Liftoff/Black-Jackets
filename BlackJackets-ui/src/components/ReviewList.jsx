import React from 'react';

const ReviewList = ({ reviews }) => {
    return (
        <div>
            <h2>Reviews</h2>
            {reviews.length > 0 ? (
                reviews.map((review, index) => (
                    <div key={index}>
                        <h3>{review.userName} rated it {review.rating} stars</h3>
                        <p>Comment: {review.comment}</p>
                    </div>
                ))
            ) : (
                <p>No reviews yet.</p>
            )}
        </div>
    );
};

export default ReviewList;
