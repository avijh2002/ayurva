import { db } from "./firebase";
import { collection, addDoc, doc, updateDoc, getDocs, deleteDoc,query, orderBy } from "firebase/firestore";

export const addResponses = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "responses"), data);
    return docRef.id; 
  } catch (error) {
    console.error("Error adding document:", error);
    throw error;
  }
};

export const updateResponse = async (docId, data) => {
  try {
    const docRef = doc(db, "responses", docId);
    await updateDoc(docRef, data);
  } catch (error) {
    console.error("Error updating document:", error);
    throw error;
  }
};


export const getResponses = async () => {
  try {
    const q = query(collection(db, "responses"), orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);
    const responses = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return responses;
  } catch (error) {
    console.error("Error fetching documents:", error);
    throw error;
  }
};

// export const getResponses = async () => {
//   try {
//     const querySnapshot = await getDocs(collection(db, "responses"));
//     const responses = querySnapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//     return responses;
//   } catch (error) {
//     console.error("Error fetching documents:", error);
//     throw error;
//   }
// };




export async function deleteResponse(id) {
  try {
    await deleteDoc(doc(db, "responses", id));
  } catch (error) {
    console.error("Error deleting response:", error);
    throw error;
  }
}