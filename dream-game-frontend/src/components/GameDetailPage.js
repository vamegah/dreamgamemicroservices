import React, { useEffect, useState } from "react";
import { getGameDetails } from "../services/api";

const GameDetailPage = ({ match }) => {
  const { gameId } = match.params; // Assuming you use React Router for navigation
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const data = await getGameDetails(gameId);
        setGame(data);
      } catch (error) {
        console.error("Error fetching game details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGameDetails();
  }, [gameId]);

  if (loading) {
    return <div>Loading game details...</div>;
  }

  return (
    <div>
      <h1>{game.title}</h1>
      <p>{game.description}</p>
      <p>Genre: {game.genre}</p>
      <p>Release Date: {game.releaseDate}</p>
      <video src={game.videoUrl} controls />
    </div>
  );
};

export default GameDetailPage;
