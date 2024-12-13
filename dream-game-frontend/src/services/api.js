import axios from "axios";

const API_URL = "http://localhost:8000"; // API Gateway URL

export const getGameDetails = async (gameId) => {
  try {
    const response = await axios.get(`${API_URL}/content-catalog/${gameId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching game details:", error);
    throw error;
  }
};

export const searchGames = async (query, genre) => {
  try {
    const response = await axios.get(`${API_URL}/search/`, {
      params: { query, genre },
    });
    return response.data;
  } catch (error) {
    console.error("Error searching games:", error);
    throw error;
  }
};

export const getRecommendations = async (userPreferences) => {
  try {
    const response = await axios.post(`${API_URL}/recommend/`, userPreferences);
    return response.data;
  } catch (error) {
    console.error("Error getting recommendations:", error);
    throw error;
  }
};
