const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const insertDocuments = require('./insertdocs');
const findDocuments = require('./finddocs');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'mongoTutorial';

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true,
									  useNewUrlParser: true });

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  // insertDocuments(db, function() {
    findDocuments(db, function() {
		client.close();
	  });
});