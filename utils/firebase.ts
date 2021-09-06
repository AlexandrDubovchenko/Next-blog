import { getApps, initializeApp } from "firebase/app";
import "firebase/firestore";
import { DocumentReference, getDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5C8t5Qgy2LHTbebbkra4glPI5iNYLXh4",
  authDomain: "next-blog-24028.firebaseapp.com",
  projectId: "next-blog-24028",
  storageBucket: "next-blog-24028.appspot.com",
  messagingSenderId: "718305325134",
  appId: "1:718305325134:web:9c278b579c7276f0f1131f",
};

const apps = getApps();

export const firestore = getFirestore(apps[0] ?? initializeApp(firebaseConfig));

export const getDataFromRefs = async (refs: DocumentReference[]) => {
  const promises = refs.map((ref) => getDoc(ref));
  const results = await Promise.all(promises);
  return results.map((res) => res.data());
};
