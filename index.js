import { db } from "./firebaseConfig.js";
import { doc, setDoc, collection, addDoc, updateDoc, deleteDoc } from'https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js';

// Add a new document in collection "cities"
await setDoc(doc(db, "carBrands", "001"), {
  brandName: "Los Angeles",
  years: 2008,
  transmition: "USA"
});

const adding = async () => {
    const docRef = await addDoc(collection(db, "carBrands"), {
        brandName: "AAAAAAAAAAAAAAAAAA",
        years: 2008666,
        transmition: "USAAAAAAAAAAAAAA"
      });
}

const update = async() => {
    // Set the "capital" field of the city 'DC'
    await updateDoc(doc(db, "carBrands", "001"), {
        brandName: "newnewnew",
        years: 1,
        transmition: "newnewnew"
    });
}

const deleteData = async() => {
    await deleteDoc(doc(db, "carBrands", "001"));
}

deleteData();
//update();
// adding();