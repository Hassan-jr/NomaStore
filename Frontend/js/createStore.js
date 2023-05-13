import { getOneUserData } from "./api/user.js";
import { getUserProfileCard } from "./components.js";
import {createStore} from "./api/store.js"
const userID = JSON.parse(localStorage.getItem('userID'));

// Set the loader to false
const loader = document.getElementById("loader");
loader.style.display = "block";

const userData = await getOneUserData(userID)
loader.style.display = "none";
console.log(userData);
const createStoreProfile = document.getElementById("UserProfileCard")
createStoreProfile.innerHTML = getUserProfileCard(userData)


// Forme
const createStoreFrom = document.getElementById("createStore")
const storeName = document.getElementById("storeName")
createStoreFrom.addEventListener("submit", (e)=>{
    e.preventDefault()
    console.log(storeName.value);
    createStore( storeName.value, userID)
    
})