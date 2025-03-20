import { db } from "./firebase";
import { collection, addDoc, doc, updateDoc, getDocs } from "firebase/firestore";

export const addResponses = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "responses"), data);
    console.log("Document written with ID:", docRef.id);
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
    console.log("Document updated with ID:", docId);
  } catch (error) {
    console.error("Error updating document:", error);
    throw error;
  }
};

export const getResponses = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "responses"));
    const responses = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log("Fetched Responses:", responses);
    return responses;
  } catch (error) {
    console.error("Error fetching documents:", error);
    throw error;
  }
};
