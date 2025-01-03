"use client";

import ConfettiComponent from "@/components/ui/Confetti";
import TruckLoader from "@/components/ui/TruckLoader";
import axios from "axios";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ rating, setRating }) => {
  const [hover, setHover] = useState(0);
  const stars = [1, 2, 3, 4, 5];

  return (
    <div>
      <label className="block text-lg font-medium text-gray-700 mb-2">
        Rate your experience (1-5):
      </label>
      <div className="flex space-x-2">
        {stars.map((star) => (
          <FaStar
            key={star}
            size={30}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            color={star <= (hover || rating) ? "gold" : "gray"}
            className="cursor-pointer transition-colors duration-200"
          />
        ))}
      </div>
    </div>
  );
};

const FeedbackPage = ({ params }) => {
  const [feedbackData, setFeedbackData] = useState({
    feedback: "",
    name: "",
    mobile: "",
    college: "",
    rating: 0,
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedbackData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateInput = () => {
    if (!feedbackData.feedback) {
      setError("Feedback is required.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateInput()) return;

    setIsSubmitting(true);
    setError("");

    try {
      const response = await axios.post("/api/upload-feedback", {
        name: feedbackData.name,
        email: feedbackData.mobile,
        college: feedbackData.college,
        rating: feedbackData.rating,
        feedback: feedbackData.feedback,
        type: params.id != "0" ? "Event Specific" : "General",
        eventName:
          decodeURIComponent(params.id) != "0"
            ? decodeURIComponent(params.id)
            : "",
      });

      if (response.status === 200) {
        setIsSubmitted(true);
        setFeedbackData({
          feedback: "",
          name: "",
          mobile: "",
          college: "",
          rating: 0,
        });
      } else {
        setError("There was an error saving the data. Please try again later.");
      }
    } catch (error) {
      console.log("Error submitting feedback:", error);
      setError("There was an error saving the data. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAddMore = () => {
    setIsSubmitted(false);
    setError("");
  };

  return (
    <div className="max-w-xl md:mx-auto bg-white rounded-lg mt-28 mx-5">
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}
      {isSubmitting && (
        <div className="flex flex-col justify-center text-center">
          <TruckLoader />
          <h1 className="font-bold text-xl mt-5">
            Taking your opinion to our Headoffice 👍 <br />
            Please wait...
          </h1>
        </div>
      )}
      {isSubmitted && (
        <div className="text-center">
          <ConfettiComponent />
          <h1 className="max-w-lg mb-6 font-sans text-4xl text-center md:text-4xl font-bold leading-none tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:mx-auto">
            <span className="text-yellow-400 tracking-wider">Thank you</span>{" "}
            for your feedback!
          </h1>
          <h2 className="text-6xl font-bold mb-4"></h2>
          <button
            onClick={handleAddMore}
            className="relative inline-flex   items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-black rounded-full group bg-gradient-to-br from-[--primary-blue] to-[--primary-green] group-hover:from-[--primary-orange] group-hover:to-[--primary-red] hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-[--primary-orange] dark:focus:ring-[--primary-red]"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
              Add more suggestions +
            </span>
          </button>
        </div>
      )}
      {!isSubmitting && !isSubmitted && (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Feedback (required):
            </label>
            <textarea
              name="feedback"
              value={feedbackData.feedback}
              onChange={handleChange}
              required
              placeholder="Write your feedback here"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={feedbackData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Email:
            </label>
            <input
              type="text"
              name="mobile"
              value={feedbackData.mobile}
              onChange={handleChange}
              placeholder="Enter your Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              College Name:
            </label>
            <input
              type="text"
              name="college"
              value={feedbackData.college}
              onChange={handleChange}
              placeholder="Enter your college name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <StarRating
            rating={feedbackData.rating}
            setRating={(rating) =>
              setFeedbackData((prevState) => ({ ...prevState, rating }))
            }
          />

          <div className="mt-6">
            <button
              disabled={isSubmitting}
              className="relative inline-flex w-full  items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-black rounded-full group bg-gradient-to-br from-[--primary-blue] to-[--primary-green] group-hover:from-[--primary-orange] group-hover:to-[--primary-red] hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-[--primary-orange] dark:focus:ring-[--primary-red]"
            >
              <span className="relative px-5 py-2.5 w-full transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
                {isSubmitting ? "Submitting..." : "Submit Feedback"}
              </span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default FeedbackPage;
