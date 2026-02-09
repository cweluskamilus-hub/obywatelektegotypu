import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAeyFDdG_2LFBJNG14vDXFOcDI91kMzARM",
  authDomain: "lubudubu-fbd9c.firebaseapp.com",
  projectId: "lubudubu-fbd9c",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
