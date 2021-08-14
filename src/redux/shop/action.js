import {
  firestore,
  convertCollectionSnapShotsToMap,
} from "../../firebase/firebase";

export const UPDATE_COLLECTIONS = "update_collections";

export const fetchCollectionData = () => {
  console.log("object");
  return (dispatch) => {
    const collectionRef = firestore.collection("collection");

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionMap = convertCollectionSnapShotsToMap(snapshot);
      dispatch(updateCollectionFromStore(collectionMap));
    });
  };
};
export const updateCollectionFromStore = (data) => {
  return {
    type: UPDATE_COLLECTIONS,
    data,
  };
};
