const { Client } = require("@elastic/elasticsearch");

const elasticClient = new Client({
  node: process.env.ELASTICSEARCH_URL || "http://localhost:9200",
});

async function checkConnection() {
  try {
    const health = await elasticClient.cluster.health();
    console.log("Elasticsearch is ready:", health);
  } catch (error) {
    console.error("Error connecting to Elasticsearch:", error);
    process.exit(1);
  }
}

checkConnection();

module.exports = elasticClient;
