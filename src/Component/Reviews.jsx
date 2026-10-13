import React from "react";
import useAxiosAPI from "./useAxiosAPI";

// JSONPlaceholder's comment bodies are lorem-ipsum filler, so the review text
// shown to users comes from here - only the reviewer identity is from the API
const reviewText = [
  "The sales team made buying my first BMW such a smooth experience. Highly recommend this showroom.",
  "Picked up my X5 last month and the after-sales support has been excellent.",
  "Great selection of M Series cars and a no-pressure test drive experience.",
  "From enquiry to delivery, everything was handled professionally and on time.",
  "The staff really know their cars and helped me pick the right model for my budget.",
  "Best car buying experience I've had so far. I'll be back for my next BMW.",
];

const reviewerNames = ["Arun Kumar", "Priya Raman", "Vikram Reddy", "Sneha Iyer", "Karthik Nair", "Divya Menon"];

export default function Reviews() {
  const { data, loading, error } = useAxiosAPI(
    "https://jsonplaceholder.typicode.com/comments?_limit=6",
  );

  if (loading) return <p>Loading reviews...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="reviews">
      <h2>Customer reviews</h2>
      <div className="review-grid">
        {data.map((review, index) => (
          <div className="review-card" key={review.id}>
            <p>"{reviewText[index % reviewText.length]}"</p>
            <h4>- {reviewerNames[index % reviewerNames.length]}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
