const {MongoClient} = require('mongodb');


// const uri = "mongodb+srv://Abdi:Abdi12316@nomastorecluster.yvbvono.mongodb.net/"
const uri = "mongodb://localhost:27017"
async function connectToDb() {
 
 try {
    // Connect to the MongoDB cluster
    const client = await MongoClient.connect(uri);
    // await client.connect();
    const db =  client.db("NomaStore")
    console.log("DB CONNECTED");
    return  db
      
 } catch (e) {
     console.error(e);
 } 
 
}


module.exports = {
    connectToDb,
}