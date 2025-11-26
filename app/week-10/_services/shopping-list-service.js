import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc} from "firebase/firestore";


export async function getItems(userId) {
    const itemsRef = collection(db, "users", userId, "items");
    const querySnapshot = await getDocs(itemsRef);
    
    const items = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }));
    
    return items;
}
export async function addItem(userId, item) {
    const itemsCollection = collection(db, "users", userId, "items");
    const newDocRef = await addDoc(itemsCollection, item);
    return newDocRef.id;
}
