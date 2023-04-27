const express = require("express");

const app = express();
//app.use(express.json());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: true }));

// middleware
function addCorsHeaders(req, res, next) {
  // Set the headers to allow cross-origin requests for browers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
}
app.use(addCorsHeaders);


app.use("/products", require("./Routes/products.js"));
app.use("/users", require("./Routes/users.js"));
app.use("/stores", require("./Routes/stores.js"));

app.listen( 4000, () => {
    console.log("listening on port 4000");
  })