import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

async function fetchQuestions() {
    try {
        const questionsRef = collection(db, "questions");
        const querySnapshot = await getDocs(questionsRef);

        const questionsArray = querySnapshot.docs.map(doc => {
            const data = doc.data();
            return {
                id: doc.id,
                question: data.question || "",
                options: data.options || [] 
            };
        });

        questionsArray.sort((a, b) => {
            const numA = parseInt(a.id.replace("q", ""), 10);
            const numB = parseInt(b.id.replace("q", ""), 10);
            return numA - numB;
        });

        return questionsArray;
    } catch (error) {
        console.error("Error fetching questions:", error);
        return [];
    }
}

export default fetchQuestions;
