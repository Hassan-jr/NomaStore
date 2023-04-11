const MongoClient = require('mongodb').MongoClient;

async function connectToDb() {
 
 const client = new MongoClient(uri);

 try {
     // Connect to the MongoDB cluster
    const result = await client.connect();
    const db = await result.db()
    console.log("DB CONNECTED");
    return db
      
 } catch (e) {
     console.error(e);
 } finally {
     await client.close();
 }
}

module.exports = {
    connectToDb,
}