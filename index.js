import { db } from "./firebaseConfig.js";
import {
  doc,
  setDoc,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  runTransaction,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// Create a new document or overwrite it if it already exists with the same ID
const setCar = async () => {
  try {
    await setDoc(doc(db, "carBrands", "001"), {
      brandName: "Los Angeles",
      years: 2008,
      transmition: "USA",
    });
    console.log("Document set successfully");
  } catch (error) {
    console.error("Error setting document:", error);
  }
};

// Add a new document to the "carBrands" collection with a generated ID
const adding = async () => {
  try {
    const docRef = await addDoc(collection(db, "carBrands"), {
      brandName: "toyota",
      years: 2008,
      transmition: "manual",
    });
    console.log("Document added with ID:", docRef.id);
  } catch (error) {
    console.error("Error adding document:", error);
  }
};

// Update an existing document in the "carBrands" collection
const update = async () => {
  try {
    await updateDoc(doc(db, "carBrands", "001"), {
      brandName: "ford",
      years: 1999,
      transmition: "automatic",
    });
    console.log("Document updated successfully");
  } catch (error) {
    console.error("Error updating document:", error);
  }
};

// Delete a document from the "carBrands" collection
const deleteData = async () => {
  try {
    await deleteDoc(doc(db, "carBrands", "001"));
    console.log("Document deleted successfully");
  } catch (error) {
    console.error("Error deleting document:", error);
  }
};

// Retrieve a single document by its ID
const getCar = async () => {
  try {
    const docSnap = await getDoc(doc(db, "carBrands", "001"));
    if (docSnap.exists()) {
      console.log(docSnap.data()); // Logs the document's data
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error getting document:", error);
  }
};

// Retrieve all documents from the "carBrands" collection
const getAllCars = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "carBrands"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  } catch (error) {
    console.error("Error getting documents:", error);
  }
};

// Query documents with a specific condition
const getCarBrand = async () => {
  try {
    const q = query(
      collection(db, "carBrands"),
      where("brandName", ">=", "toyota")
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  } catch (error) {
    console.error("Error querying documents:", error);
  }
};

// Order documents by a specific field
const orderCars = async () => {
  try {
    const q = query(collection(db, "carBrands"), orderBy("brandName"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  } catch (error) {
    console.error("Error ordering documents:", error);
  }
};

// Limit the number of documents retrieved
const limitCarsToTwo = async () => {
  try {
    const q = query(collection(db, "carBrands"), limit(2));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  } catch (error) {
    console.error("Error limiting documents:", error);
  }
};

// Perform a transaction to update a document atomically in the "carBrands" collection
const updateCarBrandTransaction = async () => {
  try {
    const result = await runTransaction(db, async (transaction) => {
      const docRef = doc(db, "carBrands", "001"); // Use specific brand ID (e.g., "001")
      const docSnap = await transaction.get(docRef); // Get the document snapshot

      if (!docSnap.exists()) {
        throw "Document does not exist!";
      }

      const currentData = docSnap.data();
      console.log("Current Car Brand:", currentData.brandName);

      const updatedBrandName = currentData.brandName + " Updated";
      const updatedYear = currentData.years + 1; // Increment years, for example

      transaction.update(docRef, {
        brandName: updatedBrandName,
        years: updatedYear,
      });

      return { updatedBrandName, updatedYear };
    });
    console.log("Transaction successfully updated car brand:", result);
  } catch (error) {
    console.error("Error in transaction:", error);
  }
};
