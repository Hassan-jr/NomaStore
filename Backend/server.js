const express = require("express");



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/products", require("./Routes/products.js"));

app.listen( 4000, () => {
    console.log("listening on port 4000");
  })