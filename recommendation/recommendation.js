// Mock function to generate recommendations
function generateRecommendations(userHistory, contentCatalog) {
    const recommendations = contentCatalog.filter((item) =>
      userHistory.interests.includes(item.category)
    );
  
    return recommendations.slice(0, 5); // Return the top 5 recommendations
  }
  
  module.exports = {
    generateRecommendations,
  };
  