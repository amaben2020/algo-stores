import {
  DocumentData,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";

import { db } from "@/firebase/index";

import IProducts from "~/types/types";
import { FIREBASE_CONFIG, FIREBASE_FAVORITE_CONFIG } from "../../helpers/enum";

export class Firebase {
  async setDocument(
    data: Record<string, string>,
  ): Promise<"Succesful operation" | "Failed to create"> {
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

  async getDocument(): Promise<DocumentData> {
    const document = doc(
      db,
      FIREBASE_CONFIG.collection,
      FIREBASE_CONFIG.document,
    );

    const documentRef = await getDoc(document);

    return documentRef.exists() ? documentRef.data() : {};
  }

  async addToFavorites(id: string, data: IProducts) {
    const favoritesCollection = collection(
      db,
      FIREBASE_FAVORITE_CONFIG.collection,
    );

    await setDoc(doc(favoritesCollection, id), data);

    const favoritesRef = doc(db, FIREBASE_FAVORITE_CONFIG.collection, id);

    const favoritesSnapShot = await getDoc(favoritesRef);

    return favoritesSnapShot.exists() || favoritesSnapShot.data()
      ? "Succesful operation"
      : "Failed to create";
  }

  async deleteFromFavorites(id: string) {
    await deleteDoc(doc(db, FIREBASE_FAVORITE_CONFIG.collection, id));
  }

  async getFavorites(): Promise<DocumentData> {
    const querySnapshot = await getDocs(
      collection(db, FIREBASE_FAVORITE_CONFIG.collection),
    );
    const favorites: DocumentData = [];
    querySnapshot.forEach((doc) => {
      favorites.push(doc.data());
    });

    return favorites;
  }
}
