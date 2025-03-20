import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

import { doc, getDoc } from "firebase/firestore";

export const fetchQuestions = async (questionID) => {
  try {
    const questionDoc = await getDoc(doc(db, "questions", questionID));
    if (questionDoc.exists()) {
        console.log(questionDoc.data());
      return questionDoc.data();
    } else {
      return null; 
    }
  } catch (error) {
    console.error("Error fetching question:", error);
    return null;
  }
};


export default fetchQuestions;
