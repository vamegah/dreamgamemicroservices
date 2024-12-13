import React, { useEffect, useState } from "react";
import { getRecommendations } from "../services/api";
import RecommendationComponent from "./RecommendationComponent";

const HomePage = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const userPreferences = { query: "soccer", genre: "Sports", tags: ["final"] }; // Example preferences
        const data = await getRecommendations(userPreferences);
        setRecommendations(data.recommended_games);
      } catch (error) {
        console.error("Error fetching recommendations", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, []);

  if (loading) {
    return <div>Loading recommendations...</div>;
  }

  return (
    <div>
      <h1>Welcome to Dream Game</h1>
      <h2>Your Personalized Recommendations</h2>
      <RecommendationComponent recommendations={recommendations} />
    </div>
  );
};

export default HomePage;
