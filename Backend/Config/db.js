const {MongoClient} = require('mongodb');

async function connectToDb() {
 
 const dbName = "nomaStore"
 const client = new MongoClient(uri);

 try {
    // Connect to the MongoDB cluster
    await client.connect();
    const db =  client.db("nomaStore")
    console.log("DB CONNECTED");
    return db
      
 } catch (e) {
     console.error(e);
 } 
 finally {
    //  await client.close();
 }
}

module.exports = {
    connectToDb,
}