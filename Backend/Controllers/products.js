const {connectToDb} = require("../Config/db.js");


// Get the collection for the db
async function getCollection(){
        const db = await connectToDb()
        const collection =  db.collection("Products")
        return collection
}


// ************* Get Products *********
const getProducts = async (req, res) => {
    try {
        const collection = await getCollection()
        const productsCursor =  collection.find({})
        const products = await productsCursor.toArray()
      if (!products) {
        res.status(400);
        throw new Error("Products not found");
      }
      res.send(products);
      await productsCursor.close()
    } catch (error) {
      console.error(error);
      res.status(500).send("Server error");
    }
  };


// ****************** Post Request/ Creating *************
const createProduct = async(req,res)=>{
    const newProduct = {
        category: await req.body.category,
        title: await req.body.title,
        price: await req.body.price,
        rating: await req.body.rating,
        reviews: await req.body.reviews,
        seller: await req.body.seller,
        images: await req.body.images,
        description: await req.body.description,
        brand: await req.body.brand
    };

    try {
        const collection = await getCollection()
        const result = await collection.insertOne(newProduct);
        res.send({ id: result.insertedId });
    } catch (error) {
        console.error(error);
      res.status(500).send("Server error");
    }
}


// ****************** DeleteProduct Request/ Delete Product *************
const deleteProduct = async(req,res)=>{
    const collection = await getCollection()
    const productId =  (req.params.id);
    console.log("To Be DELETED", productId);

    // Delete the product with the given ID
   collection.deleteOne({ _id: productId })
  .then(result => {
    if (result.deletedCount === 0) {
      return res.status(404).send('Product not found');
    }
    res.status(204).send();
  })
  .catch(err => {
    console.error(`Error deleting product: ${err}`);
    res.status(500).send('Error deleting product');
  });
}
  



  





module.exports = {
    getProducts,
    createProduct,
    deleteProduct
}