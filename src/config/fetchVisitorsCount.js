import {doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export async function incrementVisitorCount() {
    const docRef = doc(db, "analytics", "visitorsCount");
  
    try {
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        const currentCount = docSnap.data().count || 0;
        await updateDoc(docRef, { count: currentCount + 1 });
        console.log(`Visitor Count Updated: ${currentCount + 1}`);
      } else {
        await setDoc(docRef, { count: 1 });
        console.log("Visitor Count Started: 1");
      }
    } catch (error) {
      console.error("Error updating visitor count:", error);
    }
  }
  
  export async function getVisitorCount() {
    const docRef = doc(db, "analytics", "visitorsCount");
  
    try {
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        return docSnap.data().count;
      } else {
        console.warn("No visitor data found. Returning 0.");
        return 0;
      }
    } catch (error) {
      console.error("Error fetching visitor count:", error);
      return 0;
    }
  }