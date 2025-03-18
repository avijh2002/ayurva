import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

// import { db } from "./firebaseConfig"; // Import Firestore instance
import { doc, getDoc } from "firebase/firestore";

// Function to fetch a question from Firestore
export const fetchQuestions = async (questionID) => {
  try {
    const questionDoc = await getDoc(doc(db, "questions", questionID));
    if (questionDoc.exists()) {
        console.log(questionDoc.data());
      return questionDoc.data(); // Return the question data
    } else {
      return null; // Handle case where question doesn't exist
    }
  } catch (error) {
    console.error("Error fetching question:", error);
    return null;
  }
};


export default fetchQuestions;
