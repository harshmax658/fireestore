import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCiMsYsZMRqgUp67Lz5g3b9J9EcgSHLdeE",
  authDomain: "fireestore-f6e28.firebaseapp.com",
  projectId: "fireestore-f6e28",
  storageBucket: "fireestore-f6e28.appspot.com",
  messagingSenderId: "971868951837",
  appId: "1:971868951837:web:553a3ecdb325c7b27b3df4",
};

export const createUserProfileDocument = async (user, addtionalData) => {
  if (!user) return;

  const ref = firestore.collection("users").doc(`${user.uid}`);
  // const collectionref = firestore.collection("users");
  const snapShot = await ref.get();

  // const collectionSnapshot = await collectionref.get();
  // console.log({ collectionSnapshot });
  if (!snapShot.exists) {
    const { displayName, email } = user;
    const createdDate = new Date();

    try {
      await ref.set({
        displayName,
        createdDate,
        email,
        ...addtionalData,
      });
    } catch (error) {
      console.log("error creating User ", error.message);
    }
  }
  return ref;
};

export const addCollectionAndDocuments = async (
  collectionName,
  collectionData
) => {
  const collectionRef = firestore.collection(collectionName);

  const batch = firestore.batch();
  collectionData.forEach((obj) => {
    const newDocref = collectionRef.doc();
    batch.set(newDocref, obj);
  });

  return await batch.commit();
};

export const convertCollectionSnapShotsToMap = (collection) => {
  const newTransformData = collection.docs.map((snapshot) => {
    const { title, items } = snapshot.data();

    return {
      title,
      items,
      id: snapshot.id,
    };
  });

  return newTransformData.reduce((accumulator, data) => {
    accumulator[data.title.toLowerCase()] = data;
    return accumulator;
  }, {});
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};
export default firebase;
