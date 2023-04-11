const express = require("express");
const {connectToDb} = require("./Config/db.js");




async function getDB(){
    const db = await connectToDb()
    const data =  db.collection("Products").find({}).toArray()
    return data
}


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async(req, res)=>{
  const data = await getDB()
  res.send(data)
})

app.listen( 4000, () => {
    console.log("listening on port 4000");
  })