import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

function randomToken(length = 20) {
   const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
   let result = "";
   for(let i=0;i<length;i++){
      result += chars[Math.floor(Math.random()*chars.length)];
   }
   return result;
}

document.getElementById("createToken").onclick = async () => {

   const token = randomToken();

   await addDoc(collection(db,"tokens"),{
      token: token,
      used:false,
      maxUses:1,
      usedCount:0,
      created: Date.now()
   });

   document.getElementById("result").innerText =
      location.origin + "/index.html?token=" + token;
};
