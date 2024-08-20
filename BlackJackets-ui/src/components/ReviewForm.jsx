import React, { useState } from 'react';

const ReviewForm = ({ addReview }) => {
    const [userName, setUserName] = useState('');
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(5);

    const handleSubmit = (e) => {
        e.preventDefault();
        addReview({ userName, comment, rating });
        setUserName('');
        setComment('');
        setRating(5);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>User Name: </label>
                <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Comment: </label>
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Rating: </label>
                <input
                    type="number"
                    min="1"
                    max="5"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Submit Review</button>
        </form>
    );
};

export default ReviewForm;
