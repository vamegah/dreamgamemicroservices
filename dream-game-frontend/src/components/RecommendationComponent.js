import React from "react";

const RecommendationComponent = ({ recommendations }) => {
  return (
    <div>
      {recommendations.length > 0 ? (
        <ul>
          {recommendations.map((game) => (
            <li key={game.id}>
              <h3>{game.title}</h3>
              <p>{game.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No recommendations found</p>
      )}
    </div>
  );
};

export default RecommendationComponent;
