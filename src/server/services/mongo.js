const mongoose = require('mongoose');
/**
 * Set to Node.js native promises
 * Per http://mongoosejs.com/docs/promises.html
 */
mongoose.Promise = global.Promise;

// Cosmos DB Connection String
// eslint-disable-next-line max-len
// &replicaSet=globaldb`;
const key = encodeURIComponent(process.env.COSMOSDB_KEY);
const mongoUri = `mongodb://${process.env.COSMOSDB_ACCOUNT}:${key}@${
  process.env.COSMOSDB_ACCOUNT
  }.documents.azure.com:${process.env.COSMOSDB_PORT}/${process.env.COSMOSDB_DB}?ssl=true`;
console.log(mongoUri);
// Local MongoDB Connection String
// const mongoUri = `mongodb://localhost:27017/heroes-db`;

function connect() {
  mongoose.set('debug', true);
  return mongoose.connect(mongoUri);
  // return mongoose.connect(mongoUri, { useMongoClient: true });
}

module.exports = {
  connect,
  mongoose
};
