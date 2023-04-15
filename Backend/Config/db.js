const {MongoClient} = require('mongodb');


const uri = "mongodb+srv://Abdi:Abdi12316@nomastorecluster.yvbvono.mongodb.net/"
//"mongodb://localhost:27017"
async function connectToDb() {
//  const uri = "mongodb+srv://Abdi:Abdi12316@nomastorecluster.yvbvono.mongodb.net/?retryWrites=true&w=majority";
    


 try {
    // Connect to the MongoDB cluster
    const client = await MongoClient.connect(uri);
    // await client.connect();
    const db =  client.db("nomaStore")
    console.log("DB CONNECTED");
    return  db
      
 } catch (e) {
     console.error(e);
 } 
 
}


module.exports = {
    connectToDb,
}