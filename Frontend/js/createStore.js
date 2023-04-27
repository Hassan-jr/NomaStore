import { getOneUserData } from "./api/user.js";
import { getUserProfileCard } from "./components.js";
import {createStore} from "./api/store.js"
const userID = JSON.parse(localStorage.getItem('userID'));

const userData = await getOneUserData(userID)
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