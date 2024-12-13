const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 5002;

const CATALOG_API = 'http://localhost:5001/games'; // Content Catalog URL

app.get('/search', async (req, res) => {
  const query = req.query.query || '';
  try {
    const response = await axios.get(CATALOG_API);
    const results = response.data.filter(game => game.name.toLowerCase().includes(query.toLowerCase()));
    res.json(results);
  } catch (error) {
    res.status(500).send('Error fetching data from Content Catalog');
  }
});

app.listen(PORT, () => {
  console.log(`Search API running on port ${PORT}`);
});
