"use client";

import { useUser } from "@/store/UserProvider";
import React, { useState, FormEvent } from "react";
import { FaStar } from "react-icons/fa";

const ReviewForm = ({
  tourId,
  addReview,
}: {
  tourId: string;
  addReview: (
    review: string,
    rating: number,
    tourId: string,
    userId: string
  ) => Promise<void>;
}) => {
  const [review, setReview] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number | null>(null);
  const user = useUser()((state) => state.user);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const reviews = await addReview(review, rating, tourId, user._id);

    console.log(reviews);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <textarea
        value={review}
        name="review"
        rows={4}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Tell us about your experience!"
        required
        className="border-2 border-transparent text-gray-900 bg-slate-100 border-gray-300 rounded-lg placeholder-shown : p-2"
      />

      <div className="flex items-center">
        {[...Array(5)].map((_, i) => {
          const ratingValue = i + 1;

          return (
            <label key={i}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
                className="hidden"
              />
              <FaStar
                className="cursor-pointer transition ease-in-out delay-150"
                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                size={30}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>

      <button
        type="submit"
        className="transition ease-in-out delay-150 uppercase py-2 px-4 rounded-lg w-28 bg-orange-500 border-2 border-transparent text-white text-md mr-4 hover:bg-orange-600 mt-6"
      >
        Submit
      </button>
    </form>
  );
};

export default ReviewForm;
