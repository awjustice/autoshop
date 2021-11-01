import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Reviews.css";

const Reviews = () => {
  const [rating, setRating] = useState(null);
  const [reviews, setReviews] = useState(null);

  // const url = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&libraries=places`;
  // const place_id = "ChIJu05ObHdV2YARcw7PYoI0dqc";

  useEffect(() => {
    const fetchData = async () => {
      const returnedData = await axios.get(
        `https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJu05ObHdV2YARcw7PYoI0dqc&fields=name,rating,user_ratings_total&key=${process.env.REACT_APP_API_KEY}`
      );

      const rating = returnedData.data.result.rating;
      const reviews = returnedData.data.result.user_ratings_total;

      console.log(rating);
      console.log(reviews);

      setRating(rating);
      setReviews(reviews);

      return returnedData;
    };

    fetchData();
  }, []);

  return (
    <div id="reviews">
      <h5>GOOGLE REVIEWS</h5>
      <p id="rating">Overall Rating: {rating} 4.6</p>
      <p id="number">Number of Reviews: {reviews} 12</p>
    </div>
  );
};

export default Reviews;
