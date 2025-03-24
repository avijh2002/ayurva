import { collection, addDoc, getDocs, deleteDoc, doc, query, orderBy,serverTimestamp } from "firebase/firestore";
import { db } from "./firebase"; 


async function addInquiries(data) {
  try {
    const docRef = await addDoc(collection(db, "inquiries"), {
      ...data,
      createdAt: serverTimestamp(), // Add server-side timestamp
    });
    console.log("Inquiry added with ID:", docRef.id);
  } catch (error) {
    console.error("Error adding Inquiry:", error);
  }
}



export async function getInquiries() {
  try {
    const q = query(collection(db, "inquiries"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    const inquiries = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || null, // Convert Firestore timestamp to JS Date
    }));
    return inquiries;
  } catch (error) {
    console.error("Error fetching inquiries:", error);
    throw error;
  }
}



export async function deleteInquiry(id) {
  try {
    await deleteDoc(doc(db, "inquiries", id));
  } catch (error) {
    console.error("Error deleting inquiry:", error);
    throw error;
  }
}


export default addInquiries;
