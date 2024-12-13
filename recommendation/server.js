const express = require('express');
const app = express();
const PORT = 5003;

app.get('/recommendations', (req, res) => {
  // Simulate personalized recommendations (You can later integrate with real user data)
  const recommendations = [
    { "id": 1, "name": "Soccer Match 1", "category": "Soccer" },
  { "id": 2, "name": "Soccer Match 2", "category": "Soccer" },
  { "id": 3, "name": "Soccer Match 3", "category": "Soccer" },
  { "id": 4, "name": "Basketball Finals 2024", "category": "Basketball" },
  { "id": 5, "name": "Basketball Playoffs Game 1", "category": "Basketball" },
  { "id": 6, "name": "NBA Finals Game 7", "category": "Basketball" },
  { "id": 7, "name": "Baseball World Series Game 1", "category": "Baseball" },
  { "id": 8, "name": "Baseball Playoff Game 5", "category": "Baseball" },
  { "id": 9, "name": "MLB All-Star Game", "category": "Baseball" },
  { "id": 10, "name": "NFL Super Bowl LVIII", "category": "Football" },
  { "id": 11, "name": "NFL Playoff Game 3", "category": "Football" },
  { "id": 12, "name": "College Football Championship", "category": "Football" },
  { "id": 13, "name": "Tennis US Open Final", "category": "Tennis" },
  { "id": 14, "name": "Wimbledon Final 2024", "category": "Tennis" },
  { "id": 15, "name": "French Open Semifinal", "category": "Tennis" },
  { "id": 16, "name": "Formula 1 Monaco Grand Prix", "category": "Formula 1" },
  { "id": 17, "name": "Formula 1 British Grand Prix", "category": "Formula 1" },
  { "id": 18, "name": "Formula 1 Italian Grand Prix", "category": "Formula 1" },
  { "id": 19, "name": "Olympic 100m Final", "category": "Track and Field" },
  { "id": 20, "name": "Olympic 4x100m Relay", "category": "Track and Field" },
  { "id": 21, "name": "Olympic Decathlon", "category": "Track and Field" },
  { "id": 22, "name": "Rugby World Cup Final", "category": "Rugby" },
  { "id": 23, "name": "Rugby Six Nations Championship", "category": "Rugby" },
  { "id": 24, "name": "Rugby Test Match - England vs New Zealand", "category": "Rugby" },
  { "id": 25, "name": "Golf Masters Tournament Final", "category": "Golf" },
  { "id": 26, "name": "PGA Championship Final Round", "category": "Golf" },
  { "id": 27, "name": "British Open Golf Championship", "category": "Golf" },
  { "id": 28, "name": "MMA Championship Fight", "category": "MMA" },
  { "id": 29, "name": "UFC Main Event", "category": "MMA" },
  { "id": 30, "name": "WWE Royal Rumble", "category": "Wrestling" },
  { "id": 31, "name": "WWE WrestleMania", "category": "Wrestling" },
  { "id": 32, "name": "Olympic Basketball Gold Medal Game", "category": "Basketball" },
  { "id": 33, "name": "Volleyball Olympic Final", "category": "Volleyball" },
  { "id": 34, "name": "Volleyball World Cup Final", "category": "Volleyball" },
  { "id": 35, "name": "Ice Hockey Stanley Cup Final", "category": "Ice Hockey" },
  { "id": 36, "name": "NHL Playoffs Game 7", "category": "Ice Hockey" },
  { "id": 37, "name": "Winter Olympics Ice Hockey Gold Medal", "category": "Ice Hockey" },
  { "id": 38, "name": "Cricket World Cup Final", "category": "Cricket" },
  { "id": 39, "name": "Ashes Series - England vs Australia", "category": "Cricket" },
  { "id": 40, "name": "IPL Final", "category": "Cricket" },
  { "id": 41, "name": "Cycling Tour de France Final", "category": "Cycling" },
  { "id": 42, "name": "Cycling Paris-Roubaix", "category": "Cycling" },
  { "id": 43, "name": "Cycling Olympic Road Race", "category": "Cycling" },
  { "id": 44, "name": "Badminton World Championship Final", "category": "Badminton" },
  { "id": 45, "name": "Table Tennis Olympic Final", "category": "Table Tennis" },
  { "id": 46, "name": "Swimming Olympic Gold Medal 100m Freestyle", "category": "Swimming" },
  { "id": 47, "name": "Swimming 4x100m Relay Final", "category": "Swimming" },
  { "id": 48, "name": "Gymnastics Olympic Final", "category": "Gymnastics" },
  { "id": 49, "name": "Handball World Cup Final", "category": "Handball" },
  { "id": 50, "name": "Lacrosse World Championship", "category": "Lacrosse" }
  ];

  res.json(recommendations);
});

app.listen(PORT, () => {
  console.log(`Recommendation Engine API running on port ${PORT}`);
});
