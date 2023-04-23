const { connectToDb } = require("../Config/db.js");
const { ObjectId } = require("mongodb");

// Get the collection for the db
async function getCollection() {
  const db = await connectToDb();
  const collection = db.collection("Stores");
  return collection;
}

// Get the collection for the db // FOR PRODUCTS
async function getProductsCollection() {
  const db = await connectToDb();
  const collection = db.collection("Products");
  return collection;
}

// ************* Get Stores *********
const getStores = async (req, res) => {
  try {
    const collection = await getCollection();
    const StoresCursor = collection.find({});
    const Stores = await StoresCursor.toArray();
    //   Get Products
    const ProductsCollection = await getProductsCollection();
    // The store data to be returned
    const Data = await Promise.all( Stores.map(async (store) => {
       const  StoreProducts = await ProductsCollection.find({
            seller: await store.ShopName,
          }).toArray()
      return {
        ...store,
        StoreProducts,
      };
    }));
    if (!Stores) {
      res.status(400);
      throw new Error("Stores not found");
    }
    res.send(Data);
    await StoresCursor.close();
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

// ****************** Post Request/ Creating *************
const createStore = async (req, res) => {
  const newStore = {
    ShopName: req.body.ShopName,
    HomeData: {
      imgURL: "",
      backgroundIMG: false,
      banner: "",
      title1: "Header Titile 1 Here",
      title2: "Header Title 2 Here",
      description:
        "You can Edit your homePage From the Dashboard under Home Page Tab",
    },
    Orders: [],
    Subscribers: [],
    timestamp: new Date().toISOString(),
  };
  try {
    const collection = await getCollection();
    await collection.createIndex({ ShopName: 1 }, { unique: true });
    const result = await collection.insertOne(newStore);
    res.send({ id: result.insertedId });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

// ****************** DeleteStore Request/ Delete Store *************
const deleteStore = async (req, res) => {
  const collection = await getCollection();
  const StoreId = req.params.id;
  // console.log("To Be DELETED", StoreId);

  // Delete the Store with the given ID
  collection
    .deleteOne({ _id: new ObjectId(StoreId) })
    .then((result) => {
      if (result.deletedCount === 0) {
        return res.status(404).send("Store not found");
      }
      res.send("Store Deleted");
    })
    .catch((err) => {
      console.error(`Error deleting Store: ${err}`);
      res.status(500).send("Error deleting Store");
    });
};

// ************************** Update Store / Put Request ***********************
const updateStore = async (req, res) => {
  const collection = await getCollection();
  const StoreId = await req.params.id;
  const updates = req.body;


  // Update the Store with the given ID
  collection
    .updateOne({ _id: new ObjectId(StoreId) }, { $set: updates })
    .then((result) => {
      if (result.modifiedCount === 0) {
        return res.status(404).send("Store not found");
      }
      console.log("The result is ", result);
      res.send("Store Updated Successfully");
    })
    .catch((err) => {
      console.error(`Error Updating Store: ${err}`);
      res.status(500).send("Error Updating Store");
    });
};

// ************************************************* SUBSCRIBERWS ****************************
const addSubs = async (req,res)=>{
    const collection = await getCollection();
    const StoreId = await req.params.id;
    console.log(StoreId);
    const store = await collection.find({_id : new ObjectId(StoreId)}).toArray();
    console.log("The store is ", store[0]);
    const email = await req.body.subscriber
    const subscribers =  await store[0].Subscribers
    

    // Update the Store subscriber with the given ID
  collection
  .updateOne({ _id: new ObjectId(StoreId) }, { $set: {Subscribers : [...subscribers,email]} })
  .then((result) => {
    if (result.modifiedCount === 0) {
      return res.status(404).send("Store not found");
    }
    console.log("The result is ", result);
    res.send("subscribers Updated Successfully");
  })
  .catch((err) => {
    console.error(`Error Updating Store: ${err}`);
    res.status(500).send("Error Updating Store");
  });
}

const delSubs = async (req,res)=>{
    const collection = await getCollection();
    const StoreId = await req.params.id;
    const store = await collection.find({_id :new ObjectId(StoreId)}).toArray();
    const subscriber = await req.body.subscriber
    const subscribers =await  store[0].Subscribers
    const Updatedsubscribers = await subscribers.filter((itemsub) => itemsub != subscriber);
    // DELETE SUB BY UPDATING THE SUBS ATTRIBUTE IN THE COLLECTION
  collection
  .updateOne({ _id: new ObjectId(StoreId) }, { $set: {Subscribers : Updatedsubscribers} })
  .then((result) => {
    if (result.modifiedCount === 0) {
      return res.status(404).send("subscriber not found");
    }
    console.log("The result is ", result);
    res.send("subscriber  deleted Successfully");
  })
  .catch((err) => {
    console.error(`Error Deleting subscriber: ${err}`);
    res.status(500).send("Error Deleting subscriber");
  });
}


module.exports = {
  getStores,
  createStore,
  deleteStore,
  updateStore,
  addSubs,
  delSubs
};

//
