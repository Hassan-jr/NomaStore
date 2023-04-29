//import { updateStore } from "./api/store";

import { updateStore } from "./api/store.js";


const homePageHtml = ()=>{
return `
<button id="homeeditbtn" style="position: absolute; right: 40px; top: 20px; font-size: 34px;  color: #f02d35; border: none; cursor: pointer;"> <i class="fa fa-pencil" aria-hidden="true"></i></button>
<iframe src="../pages/mystore.html" frameborder="0" scrolling="yes" width="100%" height="1000" style="margin-top: -100px;"></iframe>

<-- ********************************** POP UP ************************** --!>

<div id="homeedit" class="popup">
<span  class="closePopUp">&times;</span>
      <h1>Edit Your Home Page</h1>
  <form id="homepageEditForm" class="homepageEdit">
  <h2 style="color: #313BAC;">Current Header Image</h2>
  <img src="../assets/cart4.png" alt="homeEditImage"/>
     <div class="hamePageForm">
       <label for="homebackgroundImg">Header Image</label>
       <input id="homebackgroundImg" type="file" name="backgroundImg" accept="image/*" />
     </div>
     <div class="hamePageForm">
      <label for="set">Set Image as Background</label>
      <input id="set" type="checkbox"    name="set"/>
     </div>
     <div class="hamePageForm">
     <label for="title1">Header Title 1</label>
     <input id="title1" type="text" placeholder="Enter Header Title 1" name="title1"/>
    </div>
    <div class="hamePageForm">
     <label for="title2">Header Title 2</label>
     <input id="title2" type="text" placeholder="Enter Header Title 2" name="title2"/>
    </div>
    <div class="hamePageForm">
     <label for="desc">Header desc</label>
     <input id="desc" type="text" placeholder="Enter Header  desc" name="desc"/>
    </div>
     <div class="hamePageForm">
     <label for="banner">Banner Producnt</label>
     <input id="banner" type="text" placeholder="Paste Product Id Here From Edit Product Section" name="set"/>
    </div>

    <button type="submit">Update</button>
  </form>

</div>
`
}

const homePageEditForm = (id, homePageData)=>{
  const homepageForm = document.getElementById("homepageEditForm");
  const currentImgUrl = homePageData?.imgURL;
  homepageForm.elements["title1"].value = homePageData?.title1
  homepageForm.elements["title2"].value = homePageData?.title2
  homepageForm.elements["desc"].value = homePageData?.description
  homepageForm.elements["banner"].value = homePageData?.banner
 // Handle Form
 const reader = new FileReader();
 homepageForm &&
   homepageForm.addEventListener("submit",  (event) => {
     event.preventDefault(); // Prevent form submission
     const homePageImage = document.getElementById("homebackgroundImg").files[0];
     const title1 = homepageForm.elements["title1"].value;
     const title2 = homepageForm.elements["title2"].value;
     const description = homepageForm.elements["desc"].value;
     const backgroundIMG = document.getElementById("set").checked;
     const banner = homepageForm.elements["banner"].value;
     let imgURL;
     let HomeData;
     reader.onload = async(e) => {
       imgURL = e.target.result;
       HomeData = {
         imgURL,
         backgroundIMG,
         banner,
         title1,
         title2,
         description,
       };
       updateStore(id,{HomeData : HomeData})
       window.location.reload()
     };
     homePageImage ? reader.readAsDataURL(homePageImage): updateStore(id, {HomeData : {
        imgURL : currentImgUrl,
        backgroundIMG,
        banner,
        title1,
        title2,
        description,
      }});
      window.location.reload()
    // !homePageImage && updateStore(id, HomeData)
  

   });
}

export {homePageHtml, homePageEditForm}