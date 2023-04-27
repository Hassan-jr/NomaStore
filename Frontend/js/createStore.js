import { ProfileJS, profileHMTL } from "./profile.js";
import { getUsers } from "./api/user.js";

const userData = getUsers()
const createStoreProfile = document.getElementById("createStoreProfile")
createStoreProfile.innerHTML = profileHMTL(userData)
ProfileJS()