import { collection, doc, getDoc, setDoc } from "firebase/firestore";

import { db } from "@/firebase/index";
import { FIREBASE_CONFIG } from "./enum";

export class Firebase {
  async setDocument(data: Record<string, string>) {
    // replace with orders collection when its ready
    const orderCollection = collection(db, "cities");

    // SF should be replaced with user email from session object in next auth
    await setDoc(doc(orderCollection, "SF"), {
      name: "San Francisco",
      state: "CA",
      country: "USA",
      capital: false,
      population: 860000,
      regions: ["west_coast", "norcal"],
      ...data,
    });

    // checking if successfully inserted to collection
    const orderRef = doc(db, "cities", "SF");
    const docSnap = await getDoc(orderRef);

    return docSnap.exists() || docSnap.data()
      ? "Succesful operation"
      : "Failed to create";
  }

  async getDocument() {
    const document = doc(
      db,
      FIREBASE_CONFIG.collection,
      FIREBASE_CONFIG.document,
    );
    const documentRef = await getDoc(document);

    return documentRef.exists() ? documentRef.data() : {};
  }
}
