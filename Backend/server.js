const express = require("express");
const {connectToDb} = require("./Config/db.js");

const db = connectToDb().catch(console.error);


async function getDB(){
    console.log( await db);
}
getDB()

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.listen( 4000, () => {
    console.log("listening on port 4000");
  })