import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReviewComponent = ({ venueId }) => {
    const [reviews, setReviews] = useState([]);
    const [userName, setUserName] = useState('');
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(1);

    useEffect(() => {
        axios.get(`/api/reviews/venue/${venueId}`)
            .then(response => {
                setReviews(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the reviews!", error);
            });
    }, [venueId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newReview = { userName, comment, rating, venue: { id: venueId } };

        axios.post('/api/reviews', newReview)
            .then(response => {
                setReviews([...reviews, response.data]);
                setUserName('');
                setComment('');
                setRating(1);
            })
            .catch(error => {
                console.error("There was an error submitting the review!", error);
            });
    };

    return (
        <div>
            <h2>Guest Reviews</h2>
            <ul>
                {reviews.map(review => (
                    <li key={review.id}>
                        <p><strong>{review.userName}</strong> ({review.rating} stars): {review.comment}</p>
                    </li>
                ))}
            </ul>
            <h3>Leave a Review</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Comment:</label>
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Rating:</label>
                    <select
                        value={rating}
                        onChange={(e) => setRating(Number(e.target.value))}
                        required
                    >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default GuestView;
