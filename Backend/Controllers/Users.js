const {connectToDb} = require("../Config/db.js");
const {productsforUser} = require("./products.js")
const {ObjectId} = require('mongodb');
  
  // Get the collection for the db
async function getCollection(){
          const db = await connectToDb()
          const collection =  db.collection("Users")
          return collection
  }
  
  
  // ************* Get Users *********
  const getUsers = async (req, res) => {
      try {
          const collection = await getCollection()
          const UsersCursor =  collection.find({})
          const Users = await UsersCursor.toArray()
          console.log(Users.length);
        if (!Users) {
          res.status(400);
          throw new Error("Users not found");
        }
        res.send(Users);
        await UsersCursor.close()
      } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
      }
    };
  
  
  // ****************** Post Request/ Creating *************
  const createUser = async(req,res)=>{

      const newUser = {
        profileIMG: req.body.profileIMG,
        Firstname: req.body.Firstname,
        Lastname: req.body.Lastname,
        Email : req.body.Email,
        Phone: req.body.Phone,
        Address: req.body.Address,
        City: req.body.City,
        Password: req.body.Password,
        Carts : req.body.Carts || [],
        Orders : req.body.Orders || [],
        HasStore : false,
        StoreName : null,
        timestamp: new Date().toISOString()
      };
      try {
        const collection = await getCollection()
        await collection.createIndex( { StoreName: 1 }, { unique: true } )
        const result = await collection.insertOne(newUser)
        res.send({ id: result.insertedId }); 
        
      } catch (error) {
          console.error(error);
        res.status(500).send("Server error");
      }
  }
  
  
  // ****************** DeleteUser Request/ Delete User *************
  const deleteUser = async(req,res)=>{
      const collection = await getCollection()
      const UserId =  (req.params.id);
      // console.log("To Be DELETED", UserId);
  
      // Delete the User with the given ID
     collection.deleteOne({ _id: new ObjectId(UserId) })
    .then(result => {
      if (result.deletedCount === 0) {
        return res.status(404).send('User not found');
      }
      res.send('User Deleted');
    })
    .catch(err => {
      console.error(`Error deleting User: ${err}`);
      res.status(500).send('Error deleting User');
    });
  }
  
  
  // ************************** Update User / Put Request ***********************
  const updateUser = async(req,res)=>{
    const collection = await getCollection()
    const UserId = await (req.params.id);
    const updates = req.body;
    console.log("To Be Updated", UserId);
  
    // Update the User with the given ID
  collection.updateOne({ _id: new ObjectId(UserId) }, { $set: updates })
  .then(result => {
    if (result.modifiedCount === 0) {
      return res.status(404).send('User not found');
    }
    console.log("The result is ", result);
    res.send('User Updated Successfully');
  })
  .catch(err => {
    console.error(`Error Updating User: ${err}`);
    res.status(500).send('Error Updating User');
  });
  }
  module.exports = {
      getUsers,
      createUser,
      deleteUser,
      updateUser
  }