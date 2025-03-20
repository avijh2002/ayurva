import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase"; // Named import

async function addInquiries(data) {
    try {
        console.log("Firestore instance:", db);  // Debugging line
        const docRef = await addDoc(collection(db, "inquiries"), data); 
        console.log("Inquiry added with ID:", docRef.id);
    } catch (error) {
        console.error("Error adding Inquiry:", error);
    }
}


export async function getInquiries() {
  try {
    const querySnapshot = await getDocs(collection(db, "inquiries"));
    const inquiries = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    return inquiries;
  } catch (error) {
    console.error("Error fetching inquiries:", error);
    throw error;
  }
}


export default addInquiries;
