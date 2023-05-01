const express = require("express");
const {connectToDb} = require("./Config/db.js");
const {ObjectId} = require('mongodb');


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

const stripe = require("stripe")(key)


app.use("/products", require("./Routes/products.js"));
app.use("/users", require("./Routes/users.js"));
app.use("/stores", require("./Routes/stores.js"));




// ************* Get Products *********
const Products = async () => {
try {
  const db = await connectToDb()
  const collection =   db.collection("Products")
  const productsCursor =  collection.find({})
  const products = await productsCursor.toArray()
  await productsCursor.close()
  return products
} catch (error) {
  console.error(error);
}
};


app.post("/checkout", async (req, res) => {
  try {
    const storeItems = await Products()
    console.log("Storeitems ", storeItems.length);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: await Promise.all(req.body.items.map(async(item) => {
        const storeItem = storeItems.find(productItem => productItem._id == item._id)
        return {
          price_data: {
            currency: "usd",
            product_data: {
              id: storeItem._id,
              name: storeItem.title,
              description: storeItem.description,
              images: storeItem.images,
            },
            unit_amount: storeItem.price * 100,
          },
          quantity: item.qty,
        }
      })),
      success_url: `http://127.0.0.1:5500/Frontend/pages/cart.html`,
      cancel_url: `http://127.0.0.1:5500/Frontend/pages/cart.html`,
    })
    res.json({ url: await session.url })
    console.log('CODE EXECUTED');
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})

app.listen( 4000, () => {
    console.log("listening on port 4000");
  })