import React from "react";
import CollectionPreview from "../../components/preview/CollectionPreview";
import "./collectionOverView.scss";

import { useSelector } from "react-redux";
import ShopCollectionSelector from "../../redux/shop/ShopCollectionSelector";

import Spinner from "../spinner/Spinner";
import { Center } from ".././CenterStyle";

const CollectionOverview = () => {
  const shoppingData = useSelector((state) => state.shopReducer);
  const { collection, isLoading } = shoppingData;
  const date = new Date().toLocaleTimeString();
  let newData = ShopCollectionSelector(collection);

  return (
    <>
      {isLoading ? (
        <Center>
          <Spinner />
        </Center>
      ) : (
        <div className="collection_overview">
          {newData.map(({ id, ...collection }) => {
            return <CollectionPreview key={id + date} {...collection} />;
          })}
        </div>
      )}
    </>
  );
};

export default CollectionOverview;
