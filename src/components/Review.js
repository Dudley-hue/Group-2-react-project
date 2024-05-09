import React from 'react';
import './Review.css'; 

const Review = ({ reviewData }) => {
  return (
    <div className="review">
      <h2>{reviewData.title}</h2>
      <p>{reviewData.body}</p>
      <p>Rating: {reviewData.rating}</p>
      <p>Author: {reviewData.author}</p>
      <p>Date: {reviewData.date}</p>
    </div>
  );
};

export default Review;
