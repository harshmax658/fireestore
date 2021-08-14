import React, { useEffect } from "react";

import { Route, useRouteMatch } from "react-router-dom";
import CollectionPage from "../collection/CollectionPage";
import CollectionOverview from "../../components/collectionOverview/CollectionOverview";

import { fetchCollectionData } from "../../redux/shop/action";
import { useDispatch } from "react-redux";

const Shop = () => {
  const match = useRouteMatch();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionData());
    // const collectionRef = firestore.collection("collection");

    // unSubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
    //   const collectionMap = convertCollectionSnapShotsToMap(snapshot);
    //   dispatch(updateCollectionFromStore(collectionMap));
    // });
    // return () => unSubscribeFromSnapshot();
  }, [dispatch]);
  return (
    <>
      <Route exact path={match.path} component={CollectionOverview} />
      <Route path={`${match.path}/:categoryName`} component={CollectionPage} />
    </>
  );
};

export default Shop;
