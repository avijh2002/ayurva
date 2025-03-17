import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase"; // Named import

async function addUser(data) {
    try {
        console.log("Firestore instance:", db);  // Debugging line
        const docRef = await addDoc(collection(db, "users"), data); 
        console.log("User added with ID:", docRef.id);
    } catch (error) {
        console.error("Error adding user:", error);
    }
}

export default addUser;
